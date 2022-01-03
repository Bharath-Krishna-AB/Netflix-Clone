import React from 'react'
import { useNavigate } from 'react-router-dom'

function VideoPlayer() {
    const navigate = useNavigate()
    return (
        <section className="VidePlayer">
              <div  className="goBack-container">
                <i onClick={()=>{
                    navigate('/')
                }} className="arrow fas fa-arrow-left"></i>
            </div>
     <video className='VideoPlayer'  controls autoPlay src={}></video> 
        </section>
    )
}

export default VideoPlayer
