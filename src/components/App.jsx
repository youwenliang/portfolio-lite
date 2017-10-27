/*global FB*/
import React, { Component } from 'react';
import Main from './Main';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="loading"></div>
        <nav className="center mw8 ph4 pt4 space-between">
          <Link to='/'><div>mark.</div></Link>
          <div>mliang@mozilla.com</div>
        </nav>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
