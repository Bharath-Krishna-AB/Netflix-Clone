import React, { useEffect, useState } from 'react'
import { BannerData } from '../../movie-objectDatas/BannerObj'
import './Poster.css'

function Poster({title}) {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        setMovie(BannerData)
    }, [])


    return (
        <section className="Poster" id={title}>
       <h2 className="Poster-title">{title}</h2>

         <div className="posters">
             {
                 movie.map((data)=>{
                     return(
                        <img className='card' src={data.poster_path} alt="" />
                     )

                 })
             }
           </div>
        </section>
    )
}

export default Poster
