import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Web Development & Data Analysis Projects</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/supremeteam_site_cover.png'
                        text='Supreme Team Los Angeles site made with Vanilla JavaScript and Bootsrap'
                        // label='Adventure'
                        path='/services'/>
                          <CardItem 
                        src='images/photo_gallery_cover.png'
                        text='Photo Gallery made with React, Firebase and Framer Motion'
                        // label='Luxury'
                        path='/services'/>
                        <CardItem 
                        src='images/portfolio_cover.png'
                        text='Sample of a portfolio site with animations made with React'
                        // label='Mystery'
                        path='/services'/>
                           <CardItem 
                        src='images/currency_exchange_cover.png'
                        text='Currency Exchange calculator using vanilla Javascript and a currency exchange API'
                        // label='Adventure'
                        path='/products'/>
                    </ul>
                    <ul className='cards__items'>
                        
                       
                          <CardItem 
                        src='images/hangman_cover.png'
                        text='Hangman Game using Vanilla Javascript'
                        // label='Adrenaline'
                        path='/sign-up'/>
                          <CardItem 
                        src='images/guess_the_number_cover.png'
                        text='Number guessing game using Vanilla Javascript'
                        // label='Adrenaline'
                        path='/sign-up'/>
                          <CardItem 
                        src='images/superstore_tableau_cover.png'
                        text='Analysis on a superstore using Excel and Tableau'
                        // label='Adrenaline'
                        path='/sign-up'/>
                          <CardItem 
                        src='images/restaurant_analysis_cover.png'
                        text='Analysis on the potential profit and expense of opening a restaurant over five years'
                        // label='Adrenaline'
                        path='/sign-up'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
