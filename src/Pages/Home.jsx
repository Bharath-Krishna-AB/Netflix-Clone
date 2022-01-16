import React,{Fragment} from 'react'
import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import Poster from '../components/Poster/Poster'
import { ACTION } from '../constants/constants'
import { BannerData } from '../movie-objectDatas/BannerObj'

function Home() {
    return (
        <Fragment>
            <Navbar/>
            <Banner/>
            <Poster title='Netflix-Originals' genreData={BannerData} originals={true}/>
            <Poster title='Action' genreData={ACTION} originals={false}/>
        </Fragment>
    )
}

export default Home
