import React, { Component } from 'react';
import loadImage from 'image-promise';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import $ from 'jquery';
import ImageZoom from 'react-medium-image-zoom';

var pageURL = "firefox-screenshots";
var pageTitle = "Firefox Screenshots";
var projectColor = "green";

class TopicA extends Component {
  componentDidMount() {
    console.log(pageURL);
    document.title = "Mark Liang - " + pageTitle;
    document.getElementById('loading').classList.remove('fade');
    document.body.classList.add('ds');
    document.body.classList.remove('home');

    /* Preload Image */
    var images  = [];
    for(var i = 0; i < 7; i++)
    images.push('/images/'+pageURL+'/image-'+i+'.png');
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
    if($("#addedScript") !== undefined) {
      $("#addedScript").remove();
    } 
    const script = document.createElement("script");
    script.setAttribute('id', 'addedScript');
    script.src = "https://production-assets.codepen.io/assets/embed/ei.js";
    script.async = true;
    document.body.appendChild(script);
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
              <h1>Take, save, and share screenshots without leaving Firefox.</h1>
              <p>Firefox Screenshots is one of the Firefox experiments created by the Test Pilot team. It is a smart screenshotting tool built right inside Firefox, letting users capture elements on a webpage easily, or even take shots of a full webpage. The images are collected in your own online library, ready to be shared.</p>
              <p className="o-40 fw5 f6">• Roles: UX Designer/Engineer<br/>• Skills: Sketch, InVision, HTML/CSS, Javascript</p>
              <div className="mt4 pt3">
                <a href="https://screenshots.firefox.com/" target="_blank" rel="noopener noreferrer" className={"db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 mr3-ns pa3 bg-"+projectColor+"-1 hover-bg-"+projectColor+"-1 white"}>Launch Website</a>
                <a href="https://github.com/mozilla-services/screenshots/" target="_blank" rel="noopener noreferrer" className="db dib-ns tl-ns tc mb3 br1 near-black button no-underline f12 fw7 pa3 bg-moon-gray bg-animate hover-bg-light-silver">View Project on Github</a>
              </div>
            </article>
            <hr className="mv5-ns mv4 o-30" />
            <article id="challenge" className="mw7 ph5-l ph0">
              <h2>The Challenge</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>In 2016, I joined the Test Pilot team as one of the UX designers to drive the UX and UI design for several experiments. At that time Firefox Screenshots is called Page Shot, and it has already got a lot of active participants using screenshots in their daily workflow. The challenge here is to provide a better onboarding experience, refine some of the user flows, and apply a new design system to the interfaces.</p>
            </article>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-1.png'}}/>
              <p className="tc f12 o-60">The original Page Shot interface.</p>
            </figure>
            <article id="process" className="mw7 ph5-l ph0">
              <h2>Design Process</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>To prioritize the works, we started by re-evaluating how people thought of the features in Page Shot. Over a workshop, we learned that people perceive the click-and-capture as the most significate differentiator for the overall experience. We want to address the key features through the onboarding panel and landing page, and make sure users can jump right into taking shots once that started.</p>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-0.png'}}/>
                <p className="tc f12 o-60">Wireframes for landing page experience.</p>
              </figure>
              <p>We mapped the user flow for the screenshots experience and pointed out some interactions that can be simplified or refined to get better user perception.
              </p>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-2.png'}}/>
                <p className="tc f12 o-60">Taking shots & detail page user flow.</p>
              </figure>
              <p>We also applied our new Photon Design System to give our UI design a consistent look and feel, while having the freedom to create some new icons with our own touch.</p>
              <figure className="mt4 mb5-ns mb4 mh0 hideme hidediv">
                <ImageZoom image={{src: 'images/'+pageURL+'/image-4.png'}}/>
                <p className="tc f12 o-60">Redesigning the main screens using Sketch.</p>
              </figure>
            </article>
            <article id="interactions" className="mw7 ph5-l ph0">
              <h2>Micro Interactions</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>While exchanging ideas with our engineers about the UX spec, I also provided some visual interactions on different aspects of the features. I use Codepen to quickly mockup some interaction ideas for the engineers to get a better idea of how things should behave. Here are some of the examples:</p>
              <div className="mt4 mb5-ns mb4">
                <p data-height="480" data-theme-id="dark" data-slug-hash="YZQbBG" data-default-tab="result" data-user="youwenliang" data-embed-version="2" data-pen-title="IxD Series: Mouse Tracking" className="codepen">See the Pen <a href="https://codepen.io/youwenliang/pen/YZQbBG/">IxD Series: Mouse Tracking</a> by Mark Liang (<a href="https://codepen.io/youwenliang">@youwenliang</a>) on <a href="https://codepen.io">CodePen</a>.</p>
                <p className="tc f12 o-60">Eyes will follow the mouse while users are taking shots.</p><br/>
                <p data-height="480" data-theme-id="dark" data-slug-hash="xqaxXE" data-default-tab="result" data-user="youwenliang" data-embed-version="2" data-pen-title="IxD Series: Photo Viewer" className="codepen">See the Pen <a href="https://codepen.io/youwenliang/pen/xqaxXE/">IxD Series: Photo Viewer</a> by Mark Liang (<a href="https://codepen.io/youwenliang">@youwenliang</a>) on <a href="https://codepen.io">CodePen</a>.</p>
                <p className="tc f12 o-60">Click to zoom in the shots users took.</p><br/>
                <p data-height="480" data-theme-id="light" data-slug-hash="LyvRpR" data-default-tab="result" data-user="youwenliang" data-embed-version="2" data-pen-title="IxD Series: Search Behavior" className="codepen">See the Pen <a href="https://codepen.io/youwenliang/pen/LyvRpR/">IxD Series: Search Behavior</a> by Mark Liang (<a href="https://codepen.io/youwenliang">@youwenliang</a>) on <a href="https://codepen.io">CodePen</a>.</p>
                <p className="tc f12 o-60">Click the magnifying glass to expand and collapse the search field.</p><br/>
              </div>
            </article>
            <article id="final" className="mw7 ph5-l ph0">
              <h2>The New Design</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>To reach our goals for the new design, we focus on simplifying the user experience, improving user interface polish and ensuring Screenshots works across all locales. We added an introductory landing page to explain Screenshots for the new users, a new onboarding flow to help users jumpstart the experience, and a significantly refined UI including new colors, animations, transitions, layouts and icons across the application. Designers and engineers worked together to make sure we deliver a high-quality experience for our users.</p>
            </article>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-8.gif', className: 'shadow'}}/>
              <p className="tc f12 o-60">Onboarding experience for first time users.</p>
            </figure>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-7.gif', className: 'shadow'}}/>
              <p className="tc f12 o-60">Taking shots in action.</p>
            </figure>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-6.png'}}/>
              <p className="tc f12 o-60">Detail page for your shots with sharing panel.</p>
            </figure>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-5.png'}}/>
              <p className="tc f12 o-60">My Shots page with your own collection of screenshots.</p>
            </figure>
            <section className={"bg-"+projectColor+"-1 pv4 mv5-ns mv4 full-width"}>
              <p className="tc white">Try out Firefox Screenshots here: <a href="https://screenshots.firefox.com/" target="_blank" rel="noopener noreferrer" className={"db dib-ns tl-ns mw5 mv3 center tc br1 near-black button no-underline pointer f12 fw7 mr3-ns pa3 ba b--white bg-"+projectColor+"-1 hover-bg-"+projectColor+"-1 white"}>Visit Firefox Screenshots</a></p>
            </section>
            <div id="next" className="mw7 ph5-l ph0">
              <h2>What's Next</h2><hr className={"dash bg-"+projectColor+"-1"} /><br/>
              <p>We take our users feedback seriously. As we obtained more users to try Firefox Screenshots, we got lots of interesting requests to help improve the overall experiences. One example is to combine screenshots with Firefox Account, so that users can access their screenshots on a different device if they log in with an account. Another example is to let user annotate the shots they took. Currently I'm leading the UX design for the new features, so stay tuned and we will see more updates soon!</p>
            </div>
            <figure className="mv5-ns mv4 mh0 hideme hidediv ph5-l ph0">
              <ImageZoom image={{src: 'images/'+pageURL+'/image-3.png'}}/>
              <p className="tc f12 o-60">A work-in-progress annotation interface I was working on.</p>
            </figure>
          </div>
        </section>
        <section className="mv2 pv4 hideme hidediv">
          <div className="center mw8 space-between ph4-ns ph3">
            {this.more('Firefox Color', 'previous')}
            {this.more('Firefox Send', 'next')}
          </div>
        </section>
      </div>
    );
  }
}

export default TopicA;
