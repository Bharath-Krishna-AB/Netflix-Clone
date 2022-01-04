import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Poster.css'

function Poster({title,originals,genreData}) {
    const navigate = useNavigate()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        setMovie(genreData)
    }, [])

    return (
        <section className="Poster" id={title}>
       <h2 className="Poster-title">{title}</h2>

         <div className="posters">
             
             {movie.map((data)=>{
                     return(
                        <img key={data.id} className='card' onClick={()=>{
                            navigate(`/video/${data.id}`)
                        }} src={data.poster_path} alt="" />
                     )

                 })}
           </div>
        </section>
    )
}

export default Poster
