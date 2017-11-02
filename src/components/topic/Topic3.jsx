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
            <img src={"images/"+pageURL+"-cover.png"} alt={pageTitle}/>
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
              <h2>Concepting</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>During the concepting stage, our team came up with several themes around how to help users save cellular data. One of the ideas is to let users subscribe to their frequently visited websites. The browser will automatically download the contents of the subscribed websites when a user is using WiFi, and then the user will be able to view those websites offline without using cellular data.</p>
            </div>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-2.png'}}/>
              <p className="tc f12 o-60">Wireframes for building the prototype.</p>
            </figure>
            <div id="interactions" className="mw7 ph5-l ph0">
              <h2>User Tasks</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>To validate our ideas, we need to learn from the users when they are interacting with the prototype. We listed out several key user flows to test if users can understand the concept, including a task to explain the onboarding information, a task to follow different websites, and a task to revisit the websites they followed.</p>
              <figure className="mt5-ns mt4 mh0 hideme hidediv tc bg-white pv4">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-3.gif', className: 'shadow mobile'}}/>
              </figure>
              <p className="tc f12 o-60">Onboarding about how to "follow" websites.</p>
              <figure className="mt5-ns mt4 mh0 hideme hidediv tc bg-white pv4">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-6.gif', className: 'shadow mobile'}}/>
              </figure>
              <p className="tc f12 o-60 mb5-l mb4">Followed sites will be added to your homepage.</p>
            </div>
            <div id="prototyping" className="mw7 ph5-l ph0">
              <h2>Prototyping </h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>I've been trying different ways to prototype a browser app, but it seems like the most natural way is to build a stand-alone web app that runs inside a browser, in other words, a fake browser inside a real browser. For this project, I used ReactJS to create a single page application that mimics various behaviors of a browser. Since changing states in a react app is usually in a split second without reloading the pages, I have to simulate loading effects to make the whole experience more natural. With the help of our Indonesia colleague, we got the translation for all the copy strings in the interface, this way I can make a hidden switch to change the language showing in the prototype.</p>
              <figure className="mt5-ns mt4 mh0 hideme hidediv tc bg-white pv4">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-5.gif', className: 'shadow mobile'}}/>
              </figure>
              <p className="tc f12 o-60">Mimicking the page loading effect.</p>
              <figure className="mt5-ns mt4 mh0 hideme hidediv tc bg-white pv4">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-4.gif', className: 'shadow mobile'}}/>
              </figure>
              <p className="tc f12 o-60 mb5-l mb4">Switching between Indonesian and English.</p>
            </div>
            <div id="testing" className="mw7 ph5-l ph0">
              <h2>User Testing</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>Our research team visited local residents in Indonesia for two weeks to do field studies and user testing. They put the prototype in front of the participants and see how they perceive this kind of new browsing experience. Through several contextual interviews and surveys, we learned that browsing speed is the most important thing to them. Another thing they care about is the app size due to the limited storage on their mobile phone. They will buy SD card to expand their storage space if needed. Data saving, however, doesn’t reflect in their actions. We will need to re-evalutate if data saving can be an incentive for users to try out Zerda.</p>
            </div>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-1.png', className: 'shadow'}}/>
              <p className="tc f12 o-60">Our research team visited families in Indonesia to do user testing.</p>
            </figure>
            <div id="final" className="mw7 ph5-l ph0">
              <h2>Milestone</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>After several rounds of research and production, the Zerda team launched its beta version to the Indonesia market and collaborated with the communities to promote this product. Project Zerda is now officially called "Firefox Rocket"! The goal here is to quickly test this new lightweight browser and validate our hypothesis that there is an opportunity to compete in Indonesia if we can offer a product with the proper product market fit. A lot has evolved since the first prototype, and I'm excited to see more progress on how Firefox can innovate in the emerging markets.</p>
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
