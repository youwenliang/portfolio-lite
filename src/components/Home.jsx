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
        <header>
          
        </header>
        <section>
          <Link to='/firefox-send'>Send</Link>
          <Link to='/firefox-screenshots'>Screenshots</Link>
          <Link to='/firefoxos-tv'>TV</Link>
          <Link to='/project-zerda'>Zerda</Link>
        </section>
      </div>
    );
  }
}

export default Home;
