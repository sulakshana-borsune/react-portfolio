import React from 'react'
import Jumbotron from '../../Components/Jumbotron'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='m-2'>
                <Jumbotron />
            </div>
            <div> 
                <Footer/>
            </div>
        </>
    )
}

export default Home
