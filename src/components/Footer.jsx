import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="center mw8 ph4 space-between">
          <Link to='/'><div>mark.</div></Link>
          <div>©2017 All rights Reserved.</div>
        </div>
      </footer>
    );
  }
}

export default Footer;
