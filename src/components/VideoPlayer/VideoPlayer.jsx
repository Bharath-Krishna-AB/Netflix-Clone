import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BannerData } from '../../movie-objectDatas/BannerObj'
import './VideoPlayer.css'

function VideoPlayer() {
    const navigate = useNavigate()
    const [video, setVideo] = useState('')
    const {id} = useParams()

    useEffect(() => {
        setVideo(BannerData[id].videoUrl)
    }, [])
    return (
        <section className="VidePlayer">
              <div  className="goBack-container">
                <i onClick={()=>{
                    navigate('/')
                }} className="arrow fas fa-arrow-left"></i>
            </div>
     <video className='VideoPlayer'  controls autoPlay src={video}></video> 
     
        </section>
    )
}

export default VideoPlayer
