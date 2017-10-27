/*global FB*/
import React, { Component } from 'react';
import Main from './Main';
import Footer from './Footer';
import FontAwesome from 'react-fontawesome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="loading"></div>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
