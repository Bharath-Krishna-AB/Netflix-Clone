import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Poster.css'
import { IMAGE_URL } from '../../constants/constants'

function Poster({title,originals,genreData}) {
    const navigate = useNavigate()
    const [movie, setMovie] = useState([])

    useEffect(() => {
        if(originals){
        setMovie(genreData)
        }else{
            axios.get(genreData).then((response)=>{
                console.log(response.data.results);
                setMovie(response.data.results)
            })
        }
    }, [])

    return (
        <section className="Poster" id={title}>
       <h2 className="Poster-title">{title}</h2>

         <div className="posters">
             
             {movie.map((data)=>{
                     return(
                        <img key={data.id} className='card' onClick={()=>{
                            navigate(`/video/${originals ? 'Banner': "Poster"}/${data.id}`)
                        }} src={originals ? data.poster_path : IMAGE_URL+data.poster_path } alt="" />
                     )

                 })}
           </div>
        </section>
    )
}

export default Poster
