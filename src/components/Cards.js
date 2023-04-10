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
                        src='images/lafunctionCover.png'
                        text='Dynamic and responsive website using React.js to showcase an upcoming event. The website was designed with a user-friendly interface and sleek layout using Tailwind CSS for the styling. The website also features external and internal routing, allowing visitors to easily navigate and explore the different sections of the event.'
                        // label='Adventure'
                        path='/eventSite'
                         />
                          <CardItem 
                        src='images/adAgencyCover.png'
                        text="Visually stunning website for an ad agency using Vanilla JavaScript, Gulp and Bootstrap for the CSS. It showcases my ability to create responsive designs and engaging user experiences, which are essential for effective website development."
                        // label='Luxury'
                        path='/adAgency'/>
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
