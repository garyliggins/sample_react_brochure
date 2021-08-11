import React from 'react'
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route, External} from 'react-router-dom'
import Home from './components/pages/Home'



function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact  component={Home}/>
        <Route path='/supremeTeamLa' component={() => {
          window.location.replace("https://www.supremeteamla.com/");
          return null;
        }}/>
         <Route path='/photoGallery' component={() => {
          window.location.replace("https://friendly-hoover-261561.netlify.app");
          return null;
        }}/>
        <Route path='/brochure' component={() => {
          window.location.replace("https://elastic-shannon-817b34.netlify.app");
          return null;
        }}/>
         <Route path='/currencyExchange' component={() => {
          window.location.replace("https://garyliggins.github.io/currency-exchange-calculator/");
          return null;
        }}/>
         <Route path='/hangman' component={() => {
          window.location.replace("https://gifted-brahmagupta-c4c66e.netlify.app");
          return null;
        }}/>
        <Route path='/numberGuessingGame' component={() => {
          window.location.replace("https://garyliggins.github.io/number-guessing-game/");
          return null;
        }}/>
         <Route path='/superStore' component={() => {
          window.location.replace("https://github.com/garyliggins/superstore_tableau");
          return null;
        }}/>
          <Route path='/restaurantAnalysis' component={() => {
          window.location.replace("https://github.com/garyliggins/restaurant_profit_analysis");
          return null;
        }}/>
      </Switch>
    </Router>
     
  
    </>
  );
}

export default App;
