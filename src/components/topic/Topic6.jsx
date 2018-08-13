import React, { Component } from 'react';
import loadImage from 'image-promise';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';
import ImageZoom from 'react-medium-image-zoom';

var pageURL = "screenshot-plus";
var pageTitle = "Screenshot Plus";
var projectColor = "dark-green";

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
              <h1>Collect, organize and find your mobile screenshots easily.</h1>
              <p>Screenshot Plus is an exploration project started by Mozilla Taipei Team, and it is specifically targeting Asia markets such as Indonesia. It is a screenshot tool designed for people who use screenshots to capture information across various apps and browsers. We want to help users organize their screenshots by adding information layer to their screenshots so that it is searchable. One of the ideas is to add links to screenshots so that we can bring users back to the internet for more information about their screenshots.</p>
              <div className="mt4 pt3">
                <a href="https://framer.cloud/woqSs" target="_blank" rel="noopener noreferrer" className={"db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 mr3-ns pa3 bg-"+projectColor+"-1 hover-bg-"+projectColor+"-1 white"}>Launch Framer Prototype</a>
              </div>
            </div>
            <hr className="mv5-ns mv4 o-30" />
            <div id="challenge" className="mw7 ph5-l ph0">
              <h2>The Challenge</h2>
              <p>Our team in Taipei wanted to start an idea around online shopping in Asia market. We had our previous research reports about Indonesia market so we asked ourselves what we can do to create a better online shopping experiences for them. We started by mapping out the user journey of a typical shopping experience, and see if there's anything we can tackle. After sending out surveys and several rounds of desk research, we decided to look into the idea of "Online Wishlist" and started our high-level concept storyboarding.</p>
            </div>
            <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-0.png'}}/>
              <p className="tc f12 o-60">Shopping User Journey.</p>
            </figure>
            <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-0.png'}}/>
              <p className="tc f12 o-60">Deciding concept direction.</p>
            </figure>
            <div id="research" className="mw7 ph5-l ph0">
              <h2>Design Process</h2>
              <p>We came up with three concepts around "Wishlist", including organized wishlist, smart wishlist, and social wishlist. We created concept storyboards for those ideas and sent them out to an online survey. We found that people are more interested in organizing their wishlists so that they can clearly see what they have saved and what they have bought. One of the findings from our previous surveys is that people use screenshots a lot on their mobile devices, not only capturing the products they love but also capturing things like chat history, bank transfer confirmation, etc.. <br/><br/>With the survey results and our team discussions, we decided to focus on helping people organize their screenshots, and using OCR to detect keywords on the screenshots so they can be searchable. With the text information on the screenshots, we could also direct users to find more information about their screenshots on the internet. For example, if a user screenshot a pair of shoes on an e-commerce site, we can detect the text on the screenshot and potentially bring that user back to that e-commerce site for further actions. </p>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-1.png'}}/>
                <p className="tc f12 o-60">Our storyboards.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-4.png'}}/>
                <p className="tc f12 o-60">Team up with engineers to discuss concept.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-5.png'}}/>
                <p className="tc f12 o-60">Our initial product concept.</p>
              </figure>
            </div>
            <div id="process" className="mw7 ph5-l ph0">
              <h2>User Testing Trip</h2>
              <p>After refining the concept with our designers and engineers, we started the prototyping process so that we can test the idea with real users. As our team's prototyper, I use Framer to create an interactive prototype where users can add collections for their screenshots, and also pretend to screenshot an item they like on a website. With the finalized prototype, our team flew to Jakarta to meet with the locals we recruited for user testing. We spent a week interviewing eight users, and at the same time iterating our prototype. (At that time we called our app "Wishot")

              <br/><br/>The whole trip was very inspiring for our design team, and we've learned so much about our users, much more than our desk research. We had better ideas on how they use their mobile devices and their daily activities that involve screenshots. We also learned that data plans, internet speed, and mobile device storage could be an important factor that changes their mobile behaviors.</p>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-2.png'}}/>
                <p className="tc f12 o-60">User testing sessions with our participants.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-3.png'}}/>
                <p className="tc f12 o-60">User testing sessions with our participants.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-1.gif', className: 'shadow'}}/>
                <p className="tc f12 o-60">Screenshot and add to collection.</p>
              </figure>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-2.gif', className: 'shadow'}}/>
                <p className="tc f12 o-60">View your recent screenshots.</p>
              </figure>
            </div>
            <section className={"bg-"+projectColor+"-1 pv4 mv5-ns mv4 full-width"}>
              <p className="tc white">Try out the prototype here: <a href="https://framer.cloud/woqSs" target="_blank" rel="noopener noreferrer" className={"db dib-ns tl-ns mw5 mv3 center tc br1 near-black button no-underline f12 fw7 mr3-ns pa3 ba b--white bg-"+projectColor+"-1 hover-bg-"+projectColor+"-1 white"}>Launch Prototype</a></p>
            </section>
            <div id="final" className="mw7 ph5-l ph0">
              <h2>What's Next</h2>
              <p>Compiling all the interview results from our research trip helps us get a better idea of what our product could be. The team continued refining the concept and create a landing page test to see if the idea is worth enough to pour in our engineering team's effort. If the result is promising, we will define an MVP for designers and engineers to start building the product.</p>
            </div>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-0.png'}}/>
              <p className="tc f12 o-60">Landing page website</p>
            </figure>
          </div>
        </section>
        <section className="mv2 pv4 hideme hidediv">
          <div className="center mw8 space-between ph4-ns ph3">
            {this.more('FirefoxOS TV', 'previous')}
            {this.more('Firefox Color', 'next')}
          </div>
        </section>
      </div>
    );
  }
}

export default TopicA;
