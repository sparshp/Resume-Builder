import React, { useEffect } from 'react';
import { Counter } from './features/appSlice';
import './App.css';
import Leftside from './Leftside';
import Rightside from './Rightside';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import Login from './Login';
import { Button } from '@material-ui/core';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

      console.log(authUser)

      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  console.log(user)
  return (
    <div className="app">
    {user ? (
      <>
          <h1>Resume Creater</h1>
          <div className="logoutBtn"> <Button onClick={() => auth.signOut()}>LogOut</Button>
            <Button onClick={() => window.print()}>PRINT</Button>
          </div>
          
      <div className="app_content">
      {/*left side*/}
      <Leftside />
      {/*right side*/}
            <Rightside />
            
      </div>
      </>

    ) : (
        <Login />
      )}
      
    </div>
  );
}

export default App;
