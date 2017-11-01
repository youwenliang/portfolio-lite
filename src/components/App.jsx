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
        <nav id="nav" className="center mw8 ph4-ns ph3 pt4 space-between">
          <Link to='/'>
            <div className="logo">
              <svg xmlns="http://www.w3.org/2000/svg" width="71.33" height="71.33" viewBox="0 0 71.33 71.33">
                <g>
                  <path opacity=".51" d="M60.74 35.664H27.47c-.15.265-.245.57-.245.83v24.02c0 .457.294.608.654.333l32.45-24.684c.153-.118.298-.298.41-.5z"/>
                  <g opacity=".71">
                    <path d="M27.297 36.066c.007-.024.014-.048.022-.07-.01.022-.016.046-.023.07zM60.33 10.482L27.88 35.167c-.155.118-.3.298-.41.497H60.74c.148-.264.245-.57.245-.83v-24.02c0-.457-.295-.605-.656-.332zM27.247 36.27l.014-.066c-.004.02-.01.042-.013.065zM27.27 36.165c.004-.02.01-.04.017-.063l-.018.063zM27.33 35.964c.01-.024.02-.053.032-.08l-.03.08zM27.225 36.495c0-.03 0-.063.004-.094-.004.032-.005.066-.005.095zM27.37 35.865c.03-.067.062-.136.098-.2-.036.064-.07.133-.098.2zM27.233 36.37c.002-.02.004-.046.008-.067l-.007.067zM60.647 35.816c-.01.012-.02.025-.03.04l.03-.04zM60.595 35.89c-.01.012-.02.023-.03.037l.03-.038zM60.734 35.677c-.02.037-.044.073-.067.107.023-.034.046-.07.067-.107zM60.54 35.96l-.03.032.03-.033zM60.452 36.053c.01-.008.017-.017.026-.026-.01.01-.016.018-.026.026zM60.414 36.09l-.022.022.022-.02z"/>
                  </g>
                  <path opacity=".87" d="M27.225 36.495c0-.26.095-.566.244-.83H10.345V60.514c0 .456.294.607.654.332l16.225-12.342v-12.01z"/>
                  <path d="M27.88 35.167l7.785-5.923L11 10.482c-.36-.273-.654-.125-.654.332V35.664H27.47c.11-.2.255-.38.41-.497z"/>
                </g>
              </svg>
            </div>
          </Link>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=mliang@mozilla.com" target="_blank"  rel="noopener noreferrer" className="no-underline near-black ">
            <div className="f6 link ph2"><FontAwesome name='envelope-o' className="mr1" />mliang@mozilla.com</div>
          </a>
        </nav>
        <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
