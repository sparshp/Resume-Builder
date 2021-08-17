import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

const Login = () => {
    const signIn = () => {
        // clever google login shizz...

        auth.signInWithPopup(provider).catch((err) => alert(err.message))
    }
    return (
        <div className='login' >
            <div className="login__logo">
                <img src="https://images.sftcdn.net/images/t_original/p/98cd475a-a4d4-11e6-8fb1-00163ec9f5fa/3256396456/cv-resume-creator-logo.png" alt="discord logo" />
                <p>by Sparsh Prajapati</p>
            </div>

            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login