
//container component deal with the state, provide the data and handle user interactions.
import React, { Component } from 'react';

import Menu from './MenuComponent';
import Header from './HeaderComponents';
import Footer from './FooterComponents';
import DishDetail from './DishDetailComponent';
import Home from './HomeComponents';
import {DISHES} from '../shared/dishes';
import { Switch, Route ,Redirect } from 'react-router-dom';

class Main extends Component{

  constructor(props){
    super(props);
    this.state={
      dishes:DISHES,
    
      
    };
  }

  render(){

    const HomePage= ()=> {
      return(
        <Home />  
      );
    }
    return(
      <div>
      
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} /> 
          <Redirect to ="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;