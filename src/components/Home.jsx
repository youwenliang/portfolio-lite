import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loadImage from 'image-promise';
import $ from 'jquery';
import {Helmet} from "react-helmet";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('Home');
    document.title = "Mark Liang - Interaction Designer";
    document.getElementById('loading').classList.remove('fade');
    document.body.classList.add('ds');

    /* Preload Image */
    var images  = [];
    loadImage(images)
    .then(function (allImgs) {
      setTimeout(function(){        
        document.getElementById('loading').classList.add('fade');
        document.body.classList.remove('ds');
        setTimeout(function(){
          $('#home .hidediv').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight()/3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
              $(this).removeClass('hideme');
            }  
          });
          $('.fadein').removeClass('fadein');
        }, 400);
        console.log(allImgs.length, 'images loaded!', allImgs);
      }, 400);
    })
    .catch(function (err) {
      console.error('One or more images have failed to load :(');
      console.error(err.errored);
      console.info('But these loaded fine:');
      console.info(err.loaded);
    });
  }
  render() {
    return (
      <div id="home">
        {/* Topics */}
        <header className="title align-center">
          <h1 className="mw7 fw5">Hello, my name is Mark. <br className="db-l dn" /><span className="fw3"> I’m a UX Designer / Engineer, currently designing and building delightful experiences at <a href="https://www.mozilla.org/" target="_blank" className="no-underline fw5 link near-black hover-gold">Mozilla</a>.</span></h1>
        </header>
        <section>
          <div className="cf">
            <div className="fl w-100 w-50-l">
              <Link to='/project-zerda'>
                <div className="bg-pink-1 project relative">
                  <figure className="ma0 project-image">
                    <img src="images/800x600.png"/>
                  </figure>
                  <div className="project-text absolute pa5-ns pa3">
                    <p className="white ttu tracked">project zerda / 2017</p>
                    <h3 className="white ma0">Project Zerda</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="fl w-100 w-50-l">
              <Link to='/firefox-send'>
                <div className="bg-blue-1 project relative">
                  <figure className="ma0 project-image">
                    <img src="images/800x600.png"/>
                  </figure>
                  <div className="project-text absolute pa5-ns pa3">
                    <p className="white ttu tracked">firefox send / 2017</p>
                    <h3 className="white ma0">Firefox Send lets you upload and encrypt large files to share online.</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="fl w-100 w-50-l">
              <Link to='/firefox-screenshots'>
                <div className="bg-green-1 project relative">
                  <figure className="ma0 project-image">
                    <img src="images/800x600.png"/>
                  </figure>
                  <div className="project-text absolute pa5-ns pa3">
                    <p className="white ttu tracked">firefox screenshots / 2016-2017</p>
                    <h3 className="white ma0">Firefox Screenshots</h3>
                  </div>
                </div>
              </Link>
            </div>
            <div className="fl w-100 w-50-l">
              <Link to='/firefoxos-tv'>
                <div className="bg-red-1 project relative">
                  <figure className="ma0 project-image">
                    <img src="images/800x600.png"/>
                  </figure>
                  <div className="project-text absolute pa5-ns pa3">
                    <p className="white ttu tracked">firefoxos tv / 2015</p>
                    <h3 className="white ma0">FirefoxOS TV</h3>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          
        </section>
      </div>
    );
  }
}

export default Home;
