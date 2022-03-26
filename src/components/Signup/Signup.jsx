import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import './Signup.css'
import { signInWithPopup,onAuthStateChanged } from 'firebase/auth'
import {auth,provider} from '../../Firebase/config'

function Signup() {
    
    const navigate = useNavigate()
    
  useEffect(() => {

    onAuthStateChanged(auth,user => {

      if(user){
        navigate('/browse')
      }
    })

  }, [])
  


  return (
      <section className='Signup' style={{backgroundImage: `url()`}}>
          <img  className='Signuplogo' src="Assets/images/Netflix-Logo.png" alt="" />
          <img className='background-Banner-Netflix' src="Assets/images/background-Banner-Netflix.jpg" alt="" />
          <div className="Signup-Container">
              {/* <div className="form-container">
                  <div className='heading-container'>
              <h1 className='Signup-heading' >Sign Up</h1>
              </div>
                  <form className='form' action="">
                      <input className='input-field' type="text" placeholder='Email or phone number'/>
                      <input className='input-field' type="text" placeholder='Username'/>
                      <input className='input-field' type="password" placeholder='Password'/>
                      <button className='Submit'>Sign Up</button>
                  </form>
              </div> */}
              <button className='Submit' onClick={()=> signInWithPopup(auth,provider)}>Login with Google</button>
          </div>
      </section>
  )
}

export default Signup;
