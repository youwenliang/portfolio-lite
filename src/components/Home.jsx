import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loadImage from 'image-promise';
import $ from 'jquery';
import FontAwesome from 'react-fontawesome';

class Home extends Component {
  componentDidMount() {
    console.log('Home');
    document.title = "Mark Liang - Interaction Designer";
    document.getElementById('loading').classList.remove('fade');
    document.body.classList.add('ds');
    document.body.classList.add('home');

    /* Preload Image */
    var images  = [];
    images.push('/portfolio/images/firefox-screenshots-cover.png');
    images.push('/portfolio/images/firefox-send-cover.png');
    images.push('/portfolio/images/project-zerda-cover.png');
    images.push('/portfolio/images/firefoxos-tv-cover.png');
    loadImage(images)
    .then(function (allImgs) {
      document.getElementById('nav').classList.remove('white');
      setTimeout(function(){        
        document.getElementById('loading').classList.add('fade');
        document.body.classList.remove('ds');
        setTimeout(function(){
          $('#home .hidediv').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight()/5;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
              $(this).removeClass('hideme');
            }  
          });
          $('.fadein').removeClass('fadein');
        }, 200);
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
        <header className="title align-center center mw8 ph4-ns ph3">
          <h1 className="mw7 fw5 hideme hidediv ph2"><span className="lh-large">Hello, my name is Mark.</span><br /><span className="fw3"> I love crafting user experiences and bringing ideas to life with code, currently designing products and experiments at <a href="https://www.mozilla.org/" target="_blank" rel="noopener noreferrer" className="no-underline fw5 link near-black hover-gold">Mozilla Firefox</a>.</span></h1>
        </header>
        <section className="center mw8 ph4-ns ph3">
          <div className="cf hideme hidediv">
            <div className="fl w-100 w-50-l pa2">
              <Link to='/firefox-screenshots'>
                <div className="bg-green-1 project relative">
                  <figure className="ma0 project-image">
                    <img src="images/firefox-screenshots-cover.png" alt="Firefox Screenshots" />
                  </figure>
                  <div className="project-text absolute pa5-ns pa3">
                    <p className="white ttu tracked fw5">firefox screenshots / 2016-2017</p>
                    <h3 className="white ma0">Take, save, and share screenshots without leaving Firefox.</h3>
                    <p className="white o-80 tracked fw5">UX Design • Front-End UI</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="fl w-100 w-50-l pa2">
              <Link to='/firefox-send'>
                <div className="bg-blue-1 project relative">
                  <figure className="ma0 project-image">
                    <img src="images/firefox-send-cover.png" alt="Firefox Send" />
                  </figure>
                  <div className="project-text absolute pa5-ns pa3">
                    <p className="white ttu tracked fw5">firefox send / 2017</p>
                    <h3 className="white ma0">Upload and encrypt large files to share online with Firefox Send.</h3>
                    <p className="white o-80 tracked fw5">UX Design • Front-End UI</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="fl w-100 w-50-l pa2">
              <Link to='/project-zerda'>
                <div className="bg-pink-1 project relative">
                  <figure className="ma0 project-image">
                    <img src="images/project-zerda-cover.png" alt="Project Zerda" />
                  </figure>
                  <div className="project-text absolute pa5-ns pa3">
                    <p className="white ttu tracked fw5">project zerda / 2017</p>
                    <h3 className="white ma0">A lightweight and data saving browser for emerging markets.</h3>
                    <p className="white o-80 tracked fw5">Prototyping • User Testing</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="fl w-100 w-50-l pa2">
              <Link to='/firefoxos-tv'>
                <div className="bg-red-1 project relative">
                  <figure className="ma0 project-image">
                    <img src="images/firefoxos-tv-cover.png" alt="FirefoxOS TV" />
                  </figure>
                  <div className="project-text absolute pa5-ns pa3">
                    <p className="white ttu tracked fw5">firefoxos tv / 2015</p>
                    <h3 className="white ma0">Independent and personalizable Web experience on Smart TVs.</h3>
                    <p className="white o-80 tracked fw5">Prototyping • User Testing</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="mv2 pv4 hideme hidediv">
          <a href="https://www.youwenliang.com/work" target="_blank" rel="noopener noreferrer" className="near-black no-underline hover-move">
            <p className="ttu tracked f12 fw7 tc">MORE</p>
            <h4 className="tc fw3 f4">View Past Works</h4>
            <h4 className="tc">
                <FontAwesome name='long-arrow-right' className="gold" />
            </h4>
          </a>
        </section>
      </div>
    );
  }
}

export default Home;
