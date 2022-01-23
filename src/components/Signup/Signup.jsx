import React from 'react';
import './Signup.css'

function Signup() {
  return (
      <section className='Signup' style={{backgroundImage: `url()`}}>
          <img  className='Signuplogo' src="Assets/images/Netflix-Logo.png" alt="" />
          <img className='background-Banner-Netflix' src="Assets/images/background-Banner-Netflix.jpg" alt="" />
          <div className="Signup-Container">
              <div className="form-container">
                  <div className='heading-container'>
              <h1 className='Signup-heading' >Sign Up</h1>
              </div>
                  <form className='form' action="">
                      <label className='input-container'>
                      <input className='input-field' type="text"/>
                      <label className='label-text'>Email or phone number</label>
                      </label>
                      <label className='input-container'>
                      <input className='input-field' type="text" />
                      <label className='label-text'>Username</label>
                      </label>
                      <label className='input-container'>
                      <input className='input-field' type="password" />
                      <label className='label-text'>Password</label>
                      </label>
                      <button className='Submit'>Sign Up</button>
                  </form>
              </div>
          </div>
      </section>
  )
}

export default Signup;
