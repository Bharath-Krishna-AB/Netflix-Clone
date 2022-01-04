import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BannerData } from '../../movie-objectDatas/BannerObj'
import './Poster.css'

function Poster({title,orignals,genreData}) {
    const navigate = useNavigate()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        if(orignals){
        setMovie(genreData)
        }else{
            
        }
    }, [])


    return (
        <section className="Poster" id={title}>
       <h2 className="Poster-title">{title}</h2>

         <div className="posters">
             {
                 movie.map((data)=>{
                     return(
                        <img className='card' onClick={()=>{
                            navigate(`/video/${data.id}`)
                        }} src={data.poster_path} alt="" />
                     )

                 })
             }
           </div>
        </section>
    )
}

export default Poster
