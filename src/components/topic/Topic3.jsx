import React, { Component } from 'react';
import loadImage from 'image-promise';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';
import ImageZoom from 'react-medium-image-zoom';

var pageURL = "project-zerda";
var pageTitle = "Project Zerda";
var projectColor = "pink";

class TopicC extends Component {
  componentDidMount() {
    console.log(pageURL);
    document.title = "Mark Liang - " + pageTitle;
    document.getElementById('loading').classList.remove('fade');
    document.body.classList.add('ds');
    document.body.classList.remove('home');

    /* Preload Image */
    var images  = [];
    for(var i = 0; i < 3; i++)
    images.push('/images/'+pageURL+'/image-'+i+'.png');
    for(var j = 3; i < 8; i++)
    images.push('/images/'+pageURL+'/image-'+j+'.gif');
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
  more(a, b) {
    var link = a.replace(' ', '-').toLowerCase();
    var direction = (b === "next") ? 'right' : 'left';
    return(
      <Link to={'/'+link} className="near-black no-underline hover-move ph2">
        <p className="ttu tracked f12 fw7 tl">{b}</p>
        <h4 className="tl fw3 f4">{a}</h4>
        <h4 className="tl">
            <FontAwesome name={'long-arrow-'+direction} className="gold" />
        </h4>
      </Link>
    );
  }
  popup(a) {
    var left = (window.innerWidth - 360) /2;
    window.open(a,'Popup_Window','toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=360,height=640,left ='+left+',top = 0');
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
              <h1>A lightweight and data saving browser for emerging markets.</h1>
              <p>Project Zerda is lightweight browser tailored for the Indonesia market, explicitly designed for mobile-first (even mobile-only) users with different needs from the power users. It provides a new UX with an excellent single hand browsing experience and includes major features such as screenshots, data saving, and storage control.</p>
              <p className="o-40 fw5 f6">• Roles: Prototyper / Front-End Development<br/>• Skills: HTML/CSS, ReactJS, Progressive Web App</p>
              <div className="mt4 pt3">
                <a className={"pointer db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 mr3-ns pa3 bg-"+projectColor+"-1 hover-bg-"+projectColor+"-1 white"} onClick={() => {this.popup('https://youwenliang.github.io/project-zerda/')}}>Launch Prototype</a>
                <a href="https://github.com/youwenliang/project-zerda/" target="_blank" rel="noopener noreferrer" className="db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 pa3 bg-moon-gray bg-animate hover-bg-light-silver">View Project on Github</a>
              </div>
            </div>
            <hr className="mv5-ns mv4 o-30" />
            <div id="process" className="mw7 ph5-l ph0">
              <h2>Design Process</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>Validate ideas. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent </p>
            </div>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-2.png'}}/>
              <p className="tc f12 o-60">Wireframes for building prototype.</p>
            </figure>
            <div id="interactions" className="mw7 ph5-l ph0">
              <h2>Interactions</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent </p>
              <figure className="mt5-ns mt4 mh0 hideme hidediv tc bg-white pv4">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-3.gif', className: 'shadow mobile'}}/>
              </figure>
              <p className="tc f12 o-60">Onboarding about how to "follow" websites. (static)</p>
              <figure className="mt5-ns mt4 mh0 hideme hidediv tc bg-white pv4">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-7.gif', className: 'shadow mobile'}}/>
              </figure>
              <p className="tc f12 o-60">Single hand experience to access menu panel. (gif)</p>
              <figure className="mt5-ns mt4 mh0 hideme hidediv tc bg-white pv4">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-6.gif', className: 'shadow mobile'}}/>
              </figure>
              <p className="tc f12 o-60 mb5-l mb4">Followed sites will be added to your homepage. (gif)</p>
            </div>
            <div id="prototyping" className="mw7 ph5-l ph0">
              <h2>Prototyping</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent </p>
              <figure className="mt5-ns mt4 mh0 hideme hidediv tc bg-white pv4">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-5.gif', className: 'shadow mobile'}}/>
              </figure>
              <p className="tc f12 o-60">Mimicking the loading effect. (gif)</p>
              <figure className="mt5-ns mt4 mh0 hideme hidediv tc bg-white pv4">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-4.gif', className: 'shadow mobile'}}/>
              </figure>
              <p className="tc f12 o-60 mb5-l mb4">Localized the strings. (gif)</p>
            </div>
            <div id="testing" className="mw7 ph5-l ph0">
              <h2>User Testing</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent </p>
            </div>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-1.png', className: 'shadow'}}/>
              <p className="tc f12 o-60">Our research team visited families in Indonesia to do user testing.</p>
            </figure>
            <div id="final" className="mw7 ph5-l ph0">
              <h2>Milestone</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>After several rounds of research and production, Project Zerda is now officially called "Firefox Rocket"! In October, the Zerda team launched its beta version to the Indonesia market. The goal is to quickly test this new lightweight browser product and validate our hypothesis that there is an opportunity to compete in Indonesia if we can offer a product with the proper product market fit. A lot has evolved since the first prototype, and I'm excited to see more progress on how Firefox can innovate in the emerging markets.</p>
            </div>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-0.png'}}/>
              <p className="tc f12 o-60">New Firefox Rocket interfaces.</p>
            </figure>
          </div>
        </section>
        <section className="mv2 pv4 hideme hidediv">
          <div className="center mw8 space-between ph4-ns ph3">
            {this.more('Firefox Send', 'previous')}
            {this.more('FirefoxOS TV', 'next')}
          </div>
        </section>
      </div>
    );
  }
}

export default TopicC;
