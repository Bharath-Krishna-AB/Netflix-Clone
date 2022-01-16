import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BannerData } from '../../movie-objectDatas/BannerObj'
import './VideoPlayer.css'
import { API_KEY } from '../../constants/constants'
import YouTube from 'react-youtube'

function VideoPlayer() {
    const navigate = useNavigate()
    const [video, setVideo] = useState('')
    const {id,location} = useParams()

    useEffect(() => {
        let isMounted = true;  
        if(isMounted){

        if(location == 'Banner'){
        setVideo(BannerData[id].videoUrl)
        }else if(location == 'Poster'){
            axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
                setVideo(response.data.results[0].key)
            })
        }
    }
        return () =>  isMounted = false 
    }, [])


    const opts = {
        playerVars: {
          autoplay: 1,
        },
    }


    return (
        <section className="VideoPlayer">
              <div  className="goBack-container">
                <i onClick={()=>{
                    navigate('/')
                }} className="arrow fas fa-arrow-left"></i>
            </div>
            {location == 'Banner' ? <video className='VideoArea'  controls autoPlay src={video}></video> :
            <YouTube className='Youtube-videoArea' opts={opts} videoId= {video ? video: ''}/>
            }
        </section>
    )
}

export default VideoPlayer
