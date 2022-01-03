import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <section className='Banner' style={{backgroundImage: `url(https://images.indianexpress.com/2020/01/kurup-first-look-dq-1200.jpg)`}}>
            <div className="content">
                <h1>Movie Title</h1>
                <div className="banner-buttons">
                    <button className="buttons">Play</button>
                    <button className="buttons">My list</button>
                </div>
                <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, dolore quae? Exercitationem tempore quasi in sequi.</p>
            </div>
        </section>
    )
}

export default Banner
