import React, { useEffect, useState } from 'react'
import { BannerData } from '../../movie-objectDatas/BannerObj'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        setMovie(BannerData[Math.floor(Math.random() * BannerData.length)])
    }, [])


    return (
        <section className='Banner' style={{backgroundImage: `url(${movie.backdrop_path})`}}>
            <div className="content">
                <h1>{movie.title}</h1>
                <div className="banner-buttons">
                    <button className="buttons">Play</button>
                    <button className="buttons">My list</button>
                </div>
                <p className="description">{movie.overview}</p>
            </div>
        </section>
    )
}

export default Banner
