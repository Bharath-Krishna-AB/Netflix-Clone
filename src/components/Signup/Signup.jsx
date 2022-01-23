import React from 'react';
import './Signup.css'

function Signup() {
  return (
      <section className='Signup' style={{backgroundImage: `url()`}}>
          <img  className='Signuplogo' src="Assets/images/Netflix-Logo.png" alt="" />
          <img className='background-Banner-Netflix' src="Assets/images/background-Banner-Netflix.jpg" alt="" />
          <div className="Signup-Container">
              <h1 className='SignIn-heading' >Sign In</h1>
              <div className="form-container">
                  <form action="">
                      <input className='input-field' type="text" placeholder='Email or phone number' />
                      <input className='input-field' type="text" placeholder='Password' />
                      <input type="submit" />
                  </form>
              </div>
          </div>
      </section>
  )
}

export default Signup;
