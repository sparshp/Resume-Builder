import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCrQq7PPeZWaxGSK8mY3lr0fz91lQG_foU",
    authDomain: "resume-builder-df390.firebaseapp.com",
    projectId: "resume-builder-df390",
    storageBucket: "resume-builder-df390.appspot.com",
    messagingSenderId: "805481687076",
    appId: "1:805481687076:web:01597e88d4aee1f5e810b1",
    measurementId: "G-7B7X1G00XM"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db