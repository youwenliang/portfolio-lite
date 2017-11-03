import React, { Component } from 'react';
import loadImage from 'image-promise';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';
import ImageZoom from 'react-medium-image-zoom';

var pageURL = "firefox-send";
var pageTitle = "Firefox Send";
var projectColor = "blue";

class TopicB extends Component {
  componentDidMount() {
    console.log(pageURL);
    document.title = "Mark Liang - " + pageTitle;
    document.getElementById('loading').classList.remove('fade');
    document.body.classList.add('ds');
    document.body.classList.remove('home');

    /* Preload Image */
    var images  = [];
    for(var i = 0; i < 7; i++)
    images.push('/portfolio/images/'+pageURL+'/image-'+i+'.png');
    for(var j = 7; i < 9; i++)
    images.push('/portfolio/images/'+pageURL+'/image-'+j+'.gif');
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
            <article id="intro" className="mw7 ph5-l ph0">
              <h1>Upload and encrypt large files to share online with Firefox Send.</h1>
              <p>Firefox Send is a file transfer service that automatically deletes files from the server after one download or 24 hours. It is the first Test Pilot "Web" experiment coming up this August, which means there's no need to install add-ons, and you can use it across different browsers and devices. </p>
              <p className="o-40 fw5 f6">• Roles: UX Designer/Engineer <br/>• Skills: Sketch, InVision, HTML/CSS, Javascript</p>
              <div className="mt4 pt3">
                <a href="https://send.firefox.com/" target="_blank" rel="noopener noreferrer" className={"db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 mr3-ns pa3 bg-"+projectColor+"-1 hover-bg-"+projectColor+"-1 white"}>Launch Website</a>
                <a href="https://testpilot.firefox.com/experiments/send" target="_blank" rel="noopener noreferrer" className="db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 pa3 bg-moon-gray bg-animate hover-bg-light-silver">Visit Experiment Page</a>
              </div>
            </article>
            <hr className="mv5-ns mv4 o-30" />
            <article id="process" className="mw7 ph5-l ph0">
              <h2>Design Process</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>Our user research team focused on trying to understand the problem space the experiment is intended to address during the early stage of this experiment. To help with the research, the UX team created early wireframes as a prototype to validate some hypothesis and learn from our users. This helps us determine how we are going to move forward with the UX, visual design and content strategy. Checkout the research report <a href="https://medium.com/firefox-test-pilot/gaining-insights-early-concept-evaluation-for-firefox-send-b6c576a4924b" target="_blank" rel="noopener noreferrer">here</a>.<br/><br/>The user flow seems simple. There's only uploading and downloading files, so we put our focus on how the interface can address the simpleness of transferring files. We also have to take care of some error cases and help users make sense of the whole process so that they will feel secure and be willing to trust the service.</p>
            </article>
            <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-6.png'}}/>
              <p className="tc f12 o-60">Early wireframes to establish the user interactions.</p>
            </figure>
            <article className="mw7 ph5-l ph0">
              <p>After establishing the UX spec with the team, we started several visual explorations on how the interface should look and behave. We also considered the responsive design for our interfaces since Firefox Send should work across all devices and all browsers.</p>
            </article>
            <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-4.png'}}/>
              <p className="tc f12 o-60">Exploring different visual ideas.</p>
            </figure>
            <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-5.png'}}/>
              <p className="tc f12 o-60">Designing responsive interfaces.</p>
            </figure>
            <article id="final" className="mw7 ph5-l ph0">
              <h2>Final Design</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>For the final design, we focused on clarifying the steps of uploading and downloading files, and also reduced the chances of people not knowing what to do on error pages. We made a lot effort into making Firefox Send support all browsers and different operating systems, and also localized all the strings to support users in different countries (which requires us to rethink about some of the components because of the string length). Before releasing this experiment, I also jumped in to help push the pixels on the front-end part to make sure all the components have a consistent look and feel. Our visual designer did an outstanding job providing a clean and friendly look for the interfaces!</p>
            </article>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-7.gif', className: 'shadow'}}/>
              <p className="tc f12 o-60">Dragging files to upload.</p>
            </figure>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-8.gif', className: 'shadow'}}/>
              <p className="tc f12 o-60">Downloading and decrypting files through a unique link.</p>
            </figure>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-3.png'}}/>
              <p className="tc f12 o-60">Removing files from your history.</p>
            </figure>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-0.png'}}/>
              <p className="tc f12 o-60">File expired if someone has already downloaded it.</p>
            </figure>
            <section className={"bg-"+projectColor+"-1 pv4 mv5-ns mv4 full-width"}>
              <p className="tc white">Try out Firefox Send here: <a href="https://send.firefox.com/" target="_blank" rel="noopener noreferrer" className={"db dib-ns tl-ns mw5 mv3 center tc br1 near-black button no-underline pointer f12 fw7 mr3-ns pa3 ba b--white bg-"+projectColor+"-1 hover-bg-"+projectColor+"-1 white"}>Launch Firefox Send</a></p>
            </section>
            <div id="next" className="mw7 ph5-l ph0">
              <h2>What's Next</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>Since it's launch, we got lots of articles talking about Firefox Send. There's also a vast amount of feedback and over one thousand upvotes on <a href="https://www.producthunt.com/posts/send-by-firefox" target="_blank" rel="noopener noreferrer">Product Hunt</a>. To continue improving Firefox Send, we collected all the input and compiled into a feature backlog for us to understand what our users think. We then prioritized the feature requests and brought together our design team to sketch up some ideas. One of the most requested features is to add a password to your files, which will roll out soon!</p>
            </div>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-1.png'}}/>
              <p className="tc f12 o-60">Sending files with password protection.</p>
            </figure>
          </div>
        </section>
        <section className="mv2 pv4 hideme hidediv">
          <div className="center mw8 space-between ph4-ns ph3">
            {this.more('Firefox Screenshots', 'previous')}
            {this.more('Project Zerda', 'next')}
          </div>
        </section>
      </div>
    );
  }
}

export default TopicB;
