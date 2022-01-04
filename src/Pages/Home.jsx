import React,{Fragment} from 'react'
import Banner from '../components/Banner/Banner'
import Navbar from '../components/Navbar/Navbar'
import Poster from '../components/Poster/Poster'

function Home() {
    return (
        <Fragment>
            <Navbar/>
            <Banner/>
            <Poster title='Netflix-Originals'/>
        </Fragment>
    )
}

export default Home
