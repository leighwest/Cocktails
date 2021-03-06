import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Home from './../Home/Home';
import '../../reset.css';
import '../../typography.css';
import './App.css';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Home />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
