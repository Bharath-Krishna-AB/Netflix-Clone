import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className='Navbar'>
            <div className='left-side'>
            <a className='Logo-Link' href="#Home">
            <img  className='logo' src="Assets/images/Netflix-Logo.png" alt="" />
            </a>
            <div className="section-links">
                <a className='links' href="#Netflix-Originals">Netflix Originals</a>
                <a className='links' href="#Action">Action</a>
                <a className='links' href="#Drama">Drama</a>
                <a className='links' href="#Thriller">Thriller</a>
                <a className='links' href="#Horror">Horror</a>

            </div>
            </div>
            <img className='avatar' src="assets/images/avatar.png" alt="" /> 
        </nav>
    )
}

export default Navbar
