import react from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Footer from '../Footer'
import Resume from './Resume'
import References from './References'


function Home () {
    return (
        <>
            <HeroSection/>
            <Cards />
            <Resume/>
            <References/>
            <Footer/>
        </>
    )
}

export default Home