import React, { Component } from 'react';
import loadImage from 'image-promise';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';
import ImageZoom from 'react-medium-image-zoom';

var pageURL = "firefox-color";
var pageTitle = "Firefox Color";
var projectColor = "yellow";

class TopicA extends Component {
  componentDidMount() {
    console.log(pageURL);
    document.title = "Mark Liang - " + pageTitle;
    document.getElementById('loading').classList.remove('fade');
    document.body.classList.add('ds');
    document.body.classList.remove('home');

    /* Preload Image */
    var images  = [];
    // for(var i = 0; i < 2; i++)
    // images.push('/images/'+pageURL+'/image-'+i+'.png');
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

  render() {
    return (
      <div id={pageURL}>
        <header className={"project-header bg-"+projectColor+"-1 h5 pt6"}>
        </header>
        <div className="center mw8 ph4-ns ph3 project-cover">
          <figure className="ma0 hideme hidediv ph2">
            <img src={"images/"+pageURL+"-cover.png"} alt={pageTitle}/>
          </figure>
        </div>
        <section className="center mw8 ph4-ns ph3">
          <div className="mt5-ns mt4 ph2">
            <hr className={"dash bg-"+projectColor+"-1"} /><span className="f12 ttu ml3 fw7">{pageTitle}</span>
            <div id="intro" className="mw7 ph5-l ph0">
              <h1>Independent and personalizable Web experience on Smart TVs.</h1>
              <p>Firefox OS TV presents a seamless Firefox web experience on a Smart TV platform, collaborating with our community to build an optimized TV experience. It is part of the effort to provide Firefox OS as an open platform choice for managing and controlling the broader range of connected devices available in the physical world. It was one of the most prominent projects running in the Mozilla Taipei office in 2015.</p>
              <p className="o-40 fw5 f6">• Roles: Prototyper / Front-End Development<br/>• Skills: HTML/CSS, Javascript, User Testing</p>
              <div className="mt4 pt3">
                <a href="https://youwenliang.github.io/people/mliang/Projects/FirefoxOS_TV-Prototype/" target="_blank" rel="noopener noreferrer" className={"db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 mr3-ns pa3 bg-"+projectColor+"-1 hover-bg-"+projectColor+"-1 white"}>Launch Prototype</a>
                <a href="https://github.com/youwenliang/FirefoxOS_TV-Prototype" target="_blank" rel="noopener noreferrer" className="db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 pa3 bg-moon-gray bg-animate hover-bg-light-silver">View Project on Github</a>
              </div>
            </div>
            <hr className="mv5-ns mv4 o-30" />
            <div id="process" className="mw7 ph5-l ph0">
              <h2>The Challenge</h2>
              <p>This was my first project when I joined Mozilla in 2015, at that time the user interface had already well developed and defined, so the role for me is to continue driving the UX of some new features and help prototype and iterate some ideas with our users. The challenge here is to build on top of an already well-received product and continue to innovate the details. Read more about the user interface design <a href="https://developer.mozilla.org/en-US/docs/Mozilla/Firefox_OS_for_TV/User_interface_animation_design" target="_blank" rel="noopener noreferrer">here</a>.</p>
            </div>
            <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-0.png'}}/>
              <p className="tc f12 o-60">Wireframes for the ideas about organizing homescreen with folders.</p>
            </figure>
            <div id="prototyping" className="mw7 ph5-l ph0">
              <h2>Prototyping</h2>
              <p>Prototyping for Smart TV is a very different experience since we have to control all the interfaces without a mouse. I made a web-based prototype that is solely controlled by keyboard and can be installed on a TV to navigate with a remote control. Users have to perform several tasks with the prototype, including rearranging the apps on the screen, filtering the view to show specific apps, creating a folder, and moving an item into that folder. The goal here is to understand how to create a better way for users to customize and organize their home screen. Here are some of the interactions we created:</p>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-1.gif', className: 'shadow'}}/>
                <p className="tc f12 o-60">Rearranging the apps to customize your home screen.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-2.gif', className: 'shadow'}}/>
                <p className="tc f12 o-60">Filtering the view to show specific apps.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-3.gif', className: 'shadow'}}/>
                <p className="tc f12 o-60">Creating a folder with selected apps.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-4.gif', className: 'shadow'}}/>
                <p className="tc f12 o-60">Moving an app inside your folder.</p>
              </figure>
            </div>
            <section className={"bg-"+projectColor+"-1 pv4 mv5-ns mv4 full-width"}>
              <p className="tc white">Try out the prototype here: <a href="https://youwenliang.github.io/people/mliang/Projects/FirefoxOS_TV-Prototype/" target="_blank" rel="noopener noreferrer" className={"db dib-ns tl-ns mw5 mv3 center tc br1 near-black button no-underline f12 fw7 mr3-ns pa3 ba b--white bg-"+projectColor+"-1 hover-bg-"+projectColor+"-1 white"}>Launch Prototype</a></p>
            </section>
            <div id="final" className="mw7 ph5-l ph0">
              <h2>The Results</h2>
              <p>The bad news is, Mozilla announced that it would no longer be developing the Firefox OS for the smartphone market in December 2015. In consequence, there's also no more Firefox OS for Smart TVs. Since Firefox OS is an open-source project, Panasonic was still able to develop its own "My Home Screen 2.0" based on the old OS. In a way, Firefox OS will continue live on in Panasonic’s 2017 TVs.</p>
            </div>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-1.png', className: 'shadow'}}/>
              <p className="tc f12 o-60">Panasonic's "My Home Screen 2.0".</p>
            </figure>
          </div>
        </section>
        <section className="mv2 pv4 hideme hidediv">
          <div className="center mw8 space-between ph4-ns ph3">
            {this.more('Screenshot Plus', 'previous')}
            {this.more('Firefox Screenshots', 'next')}
          </div>
        </section>
      </div>
    );
  }
}

export default TopicA;
