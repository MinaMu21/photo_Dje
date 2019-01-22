import React, { Component } from 'react';
import NavBarDefault from './component/NavBarDefault';
import Slider from './component/Slider';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbardefault">
          <NavBarDefault />
        </div>
        <div className="slider">
        <Slider />
        </div>
      </div>
    );
  }
}

export default App;
