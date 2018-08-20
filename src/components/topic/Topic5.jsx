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
              <h1>A simple tool for anyone to change the look of Firefox.</h1>
              <p>Firefox Color lets you customize the look and feel of Firefox. You can change the tab color, background color, toolbar color and more, to create your own theme. You can also share your creations with your friends, or save them for yourself. It is a Test Pilot experiment that emphasis on enabling users to create their own Firefox experiences with customization.</p>
              <p className="o-40 fw5 f6">• Roles: UX Designer<br/>• Skills: Sketch, InVision</p>
              <div className="mt4 pt3">
                <a href="https://color.firefox.com/" target="_blank" rel="noopener noreferrer" className={"db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 mr3-ns pa3 bg-"+projectColor+"-1 hover-bg-"+projectColor+"-1 white"}>Launch Website</a>
                <a href="https://testpilot.firefox.com/experiments/color" target="_blank" rel="noopener noreferrer" className="db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 pa3 bg-moon-gray bg-animate hover-bg-light-silver">Visit Experiment Page</a>
              </div>
            </div>
            <hr className="mv5-ns mv4 o-30" />
            <article id="process" className="mw7 ph5-l ph0">
              <h2>Design Process</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>We started with a <a href="https://addons.mozilla.org/en-US/firefox/addon/themr/" target="_blank" rel="noopener noreferrer">prototype (Themr)</a> our project manager John Gruen created to test out the idea of customizing the colors of Firefox components. After trying out the prototype, we started sketching out ideas to create a more intuitive tool for users to use. One of the issues we saw is that people don't know what they are customizing based on the components name, such as "Background Tab Text Color", so we want to make the preview of the Firefox browser interactive. Users can click on the parts directly if they want to change the colors.</p>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-0.png'}}/>
                <p className="tc f12 o-60">Themr addon's interface</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-1.png'}}/>
                <p className="tc f12 o-60">Early wireframes to establish the user interactions.</p>
              </figure>
            </article>
            <article className="mw7 ph5-l ph0">
              <p>We made several adjustments with the UX spec, and at the same time started several visual explorations on how the interface should look and behave. One of the core value of this project is to make it a fun tool for users to play with, so we wanted to make it less tool-like and more visually intriguing. We tested out adding gradient background color on the interface based on the colors users select, and we also added some "preset" themes for people to choose from if they don't want to create their own.</p>
            </article>
            <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-2.png'}}/>
              <p className="tc f12 o-60">UX spec iterations.</p>
            </figure>
            <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-3.png'}}/>
              <p className="tc f12 o-60">Exploring different visual ideas.</p>
            </figure>
            <article id="final" className="mw7 ph5-l ph0">
              <h2>Final Design</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>After working closely with the engineers about additional functionalities such as "Reset", "Undo" and "Save", we delivered our design with a clear list of components users can customize, and an interactive preview section where users can click and select color. Since Firefox Color is a tool for Firefox users only, it's reasonable to promote Firefox Browser if a user accesses this tool from other browsers. Ideally with more people creating and sharing their themes, we could at the same time gain more users to try out Firefox!</p>
            </article>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-5.gif', className: 'shadow'}}/>
              <p className="tc f12 o-60">Changing Colors.</p>
            </figure>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-6.gif', className: 'shadow'}}/>
              <p className="tc f12 o-60">Applying preset themes.</p>
            </figure>
            <section className={"bg-"+projectColor+"-1 pv4 mv5-ns mv4 full-width"}>
              <p className="tc white">Try out Firefox Color here: <a href="https://color.firefox.com/" target="_blank" rel="noopener noreferrer" className={"db dib-ns tl-ns mw5 mv3 center tc br1 near-black button no-underline pointer f12 fw7 mr3-ns pa3 ba b--white bg-"+projectColor+"-1 hover-bg-"+projectColor+"-1 white"}>Launch Firefox Color</a></p>
            </section>
            <div id="next" className="mw7 ph5-l ph0">
              <h2>What's Next</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>Firefox Color received lots of feedback since its launch, and the team also made some major changes to the interface to make it more visual on how to interact with the tool. For the next steps, we want to integrate Firefox Color with the existing customization settings and theme related addons to make it the one true place for people to change their browser's appearance. Hopefully in the future, all the Firefox new users will recognize Firefox Color as a built-in feature on Firefox.</p>
            </div>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-4.gif', className: 'shadow'}}/>
              <p className="tc f12 o-60">Firefox Color latest interactive interface.</p>
            </figure>
          </div>
        </section>
        <section className="mv2 pv4 hideme hidediv">
          <div className="center mw8 space-between ph4-ns ph3">
            {this.more('Screenshot Plus', 'previous')}
            {this.more('Project Zerda', 'next')}
          </div>
        </section>
      </div>
    );
  }
}

export default TopicA;
