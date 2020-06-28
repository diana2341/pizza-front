import React from 'react';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Checkout from './components/Checkout'
import CreatePizza from './components/CreatePizza'
import Entrance from './components/Entrance'
import PizzaProfile from './components/Pizzaprofile'
import Pizzas from './components/pizzas'

import './App.css';

function App() {
  return (
    <Router>
    <Route exact path= '/' render={(routerProps)=>(<Entrance {...routerProps}/>)}/>  
    <Route exact path= '/pizzas' render={(routerProps)=>(<Pizzas {...routerProps}/>)}/>  
    <Route exact path= '/pizzas/:id' render={(routerProps)=>(<PizzaProfile {...routerProps}/>)}/>  
    <Route exact path= '/create-Your-Pizza' render={(routerProps)=>(<CreatePizza {...routerProps}/>)}/>  
    <Route exact path= '/checkout' render={(routerProps)=>(<Checkout {...routerProps}/>)}/>  

    </Router>
  );
}

export default App;
