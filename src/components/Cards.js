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
                        text='Supreme Team Los Angeles site made with Vanilla JavaScript and Bootsrap and widgets from Ticket Master and Mail Chimp'
                        // label='Adventure'
                        path='/supremeTeamLa'
                         />
                          <CardItem 
                        src='images/photo_gallery_cover.png'
                        text='Photo Gallery made with React, Firebase and Framer Motion'
                        // label='Luxury'
                        path='/photoGallery'/>
                        <CardItem 
                        src='images/portfolio_cover.png'
                        text='Sample of a brochure site with animations made with React'
                        // label='Mystery'
                        path='/brochure'/>
                           <CardItem 
                        src='images/currency_exchange_cover.png'
                        text='Currency Exchange calculator using vanilla Javascript and a currency exchange API'
                        // label='Adventure'
                        path='/currencyExchange'/>
                    </ul>
                    <ul className='cards__items'>
                        
                       
                          <CardItem 
                        src='images/hangman_cover.png'
                        text='Hangman Game using Vanilla Javascript'
                        // label='Adrenaline'
                        path='/hangman'/>
                          <CardItem 
                        src='images/guess_the_number_cover.png'
                        text='Number guessing game using Vanilla Javascript'
                        // label='Adrenaline'
                        path='/numberGuessingGame'/>
                          <CardItem 
                        src='images/superstore_tableau_cover.png'
                        text='Analysis on a superstore using Excel to clean and organize data, SQL queries extract data samples and Tableau to display data'
                        // label='Adrenaline'
                        path='/superStore'/>
                          <CardItem 
                        src='images/restaurant_analysis_cover.png'
                        text='Analysis on the potential profit and expense of opening a restaurant over five years using Excel'
                        // label='Adrenaline'
                        path='/restaurantAnalysis'/>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
