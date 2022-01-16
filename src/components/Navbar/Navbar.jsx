import React, { useState,useEffect } from 'react'
import './Navbar.css'

function Navbar() {

    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", ()=>{
            if(window.scrollY > 100){
                setScroll(true)
            }else{
                setScroll(false)
            }
        } )
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])


    return (
        <nav className={`Navbar ${scroll ? 'BlackNav': ''}`}>
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
