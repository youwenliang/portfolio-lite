import React, { Component } from 'react';
import loadImage from 'image-promise';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';

var pageURL = "project-zerda";
var pageTitle = "Project Zerda";
var projectColor = "pink";

class TopicA extends Component {
  componentDidMount() {
    console.log(pageURL);
    document.title = "Mark Liang - " + pageTitle;
    document.getElementById('loading').classList.remove('fade');
    document.body.classList.add('ds');
    document.body.classList.remove('home');

    /* Preload Image */
    var images  = [];
    loadImage(images)
    .then(function (allImgs) {
      setTimeout(function(){        
        document.getElementById('loading').classList.add('fade');
        document.getElementById('nav').classList.add('white');
        document.body.classList.remove('ds');
        setTimeout(function(){
          $('.fadein').removeClass('fadein');
          $('#' + pageURL + ' .hidediv').each(function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight()/3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if( bottom_of_window > bottom_of_object ){
              $(this).removeClass('hideme');
            }  
          });
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
      <div id={pageURL}>
        <header className={"project-header bg-"+projectColor+"-1 h5 pt6"}>
        </header>
        <div className="center mw8 ph4-ns ph3 project-cover">
          <figure className="ma0 hideme hidediv ph2">
            <img src={"images/"+pageURL+"-cover.png"}/>
          </figure>
        </div>
        <section className="center mw8 ph4-ns ph3">
          <div className="mt5-ns mt4 ph2">
            <hr className={"dash bg-"+projectColor+"-1"} /><span className="f12 ttu ml3 fw7">{pageTitle}</span>
            <div id="intro" className="mw7 ph5-l ph0">
              <h1>Take, save, and share screenshots without leaving Firefox.</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent </p>
              <p className="o-40 fw5 f6">• Roles: Prototyper / Front-End Development<br/>• Skills: HTML/CSS, Javascript, User Testing, UX/UI</p>
              <div className="mt4 pt3">
                <a href="https://screenshots.firefox.com/" target="_blank" className={"db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 mr3-ns pa3 bg-"+projectColor+"-1 hover-bg-"+projectColor+"-1 white"}>Launch Website</a>
                <a href="https://github.com/mozilla-services/screenshots/" target="_blank" className="db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 pa3 bg-moon-gray bg-animate hover-bg-light-silver">View Project on Github</a>
              </div>
            </div>
            <hr className="mv5-ns mv4 o-30" />
            <div id="process" className="mw7 ph5-l ph0">
              <h2>Design Process</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent </p>
            </div>
            <figure className="mv5-ns mv4 mh0 hideme hidediv">
              <img src="images/800x600.png"/>
            </figure>
            <div id="process" className="mw7 ph5-l ph0">
              <h2>Final Designs</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent </p>
            </div>
            <figure className="mv5-ns mv4 mh0 hideme hidediv">
              <img src="images/800x600.png"/>
            </figure>
          </div>
        </section>
        <section className="mv2 pv4 hideme hidediv">
          <div className="center mw8 space-between ph4-ns ph3">
            <Link to='/firefox-send' className="near-black no-underline hover-move ph2">
              <p className="ttu tracked f12 fw7 tl">Previous</p>
              <h4 className="tl fw2 f4">Firefox Send</h4>
              <h4 className="tl">
                  <FontAwesome name='long-arrow-left' className="gold" />
              </h4>
            </Link>
            <Link to='/firefoxos-tv' className="near-black no-underline hover-move ph2">
              <p className="ttu tracked f12 fw7 tr">Next</p>
              <h4 className="tr fw2 f4">FirefoxOS TV</h4>
              <h4 className="tr">
                  <FontAwesome name='long-arrow-right' className="gold" />
              </h4>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default TopicA;
