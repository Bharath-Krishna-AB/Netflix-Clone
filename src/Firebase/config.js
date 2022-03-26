import {initializeApp} from 'firebase/app'
import {GoogleAuthProvider , getAuth} from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDt-y909EIP4cWwtFCjnP_-MbQoWTJWh14",
    authDomain: "netflix-project-1e76b.firebaseapp.com",
    projectId: "netflix-project-1e76b",
    storageBucket: "netflix-project-1e76b.appspot.com",
    messagingSenderId: "132863871338",
    appId: "1:132863871338:web:331c2e635ae43d0853bd13",
    measurementId: "G-6ES655K2DR"
  };

  const firebase = initializeApp(firebaseConfig)

  const provider = new GoogleAuthProvider()
  const auth = getAuth()

  export {firebase,provider,auth}