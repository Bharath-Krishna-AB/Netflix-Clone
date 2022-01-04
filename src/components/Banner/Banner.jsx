import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BannerData } from '../../movie-objectDatas/BannerObj'
import './Banner.css'

function Banner() {
    const navigate = useNavigate()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        setMovie(BannerData[Math.floor(Math.random() * BannerData.length)])
    }, [])


    return (
        <section className='Banner' style={{backgroundImage: `url(${movie.backdrop_path})`}}>
            <div className="content">
                <h1>{movie.title}</h1>
                <div className="banner-buttons">
                    <button className="buttons" onClick={()=>{
                        navigate(`/video/${movie.id}`)
                    }}>Play</button>
                    <button className="buttons">My list</button>
                </div>
                <p className="description">{movie.overview}</p>
            </div>
            <div className="fade_bottom"></div>
        </section>
    )
}

export default Banner
