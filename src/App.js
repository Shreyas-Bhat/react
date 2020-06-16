import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, Nav, NavbarBrand } from 'reactstrap';

import './App.css';

class App extends Component{
  render(){
    return(
      <div className='App'>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Risorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      </div>
    )
  }
}

export default App;
