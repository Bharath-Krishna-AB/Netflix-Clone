import React,{Fragment,useEffect,useState} from 'react'
import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import Poster from '../components/Poster/Poster'
import { ACTION, DRAMA, HORROR, THRILLER } from '../constants/constants'
import { BannerData } from '../movie-objectDatas/BannerObj'
import {auth} from '../Firebase/config'
import {onAuthStateChanged,signOut} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


function Home() {

    const navigate = useNavigate()
    const [userData,SetUserData] = useState()

    
  useEffect(() => {
    
    onAuthStateChanged(auth, user =>{
      if(user){
        SetUserData({
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      }else{
        SetUserData(null)
        navigate('/')
      }
    })
  }, [])

    return (
        <Fragment>
            <Navbar signOut={signOut} />
            <Banner/>
            <Poster title='Netflix-Originals' genreData={BannerData} originals={true}/>
            <Poster title='Action' genreData={ACTION} originals={false}/>
            <Poster title='Drama' genreData={DRAMA} originals={false}/>
            <Poster title='Thriller' genreData={THRILLER} originals={false}/>
            <Poster title='Horror' genreData={HORROR} originals={false}/>
        </Fragment>
    )
}

export default Home
