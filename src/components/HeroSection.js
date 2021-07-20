import React from 'react'
import Button from './Button'
import './HeroSection.css';
import '../App.css';


const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src='/videos/video-2.mp4' autoPlay loop muted />
            <h1> Gary Liggins</h1>
            <p>Software Engineer & Data Analyst</p>
            {/* <div className="hero-btns">
            <Button className="btns" 
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
            Get Started    
            </Button> 
            <Button className="btns" 
            buttonStyle='btn--primary'
            buttonSize='btn--large'>
            Watch Trailer <i className='far fa-play-circle'/>   
            </Button> 
            </div> */}
        </div>
    )
}

export default HeroSection
