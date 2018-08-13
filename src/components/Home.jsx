import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import loadImage from 'image-promise';
import $ from 'jquery';
import FontAwesome from 'react-fontawesome';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: false
    };
    this.handler = this.handler.bind(this)
  }

  componentDidMount() {
    console.log('Home');
    document.title = "Mark Liang - Interaction Designer";
    document.getElementById('loading').classList.remove('fade');
    document.body.classList.add('ds');
    document.body.classList.add('home');

    /* Preload Image */
    var images  = [];
    images.push('images/firefox-screenshots-cover.png');
    images.push('images/firefox-send-cover.png');
    images.push('images/project-zerda-cover.png');
    images.push('images/firefoxos-tv-cover.png');
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

  handler(e) {
    e.preventDefault()
    this.setState({about: false});
    document.body.classList.remove('ds');
    $('#about').addClass('fade');
    $('#about').addClass('pn');
  }

  openAbout = () => {
    this.setState({about: true});
    $(document).scrollTop(0);
    $('#about').removeClass('fade');
    $('#about').removeClass('pn');
    document.body.classList.add('ds');
  }

  render() {
    return (
      <div id="home">
        {/* Topics */}
        <header className="title align-center center mw8 ph4-ns ph3">
          <h1 className="mw7 fw5 hideme hidediv ph2"><span className="lh-large">Hello, my name is <span className="cp underlink relative" onClick={this.openAbout.bind(this)}>Mark</span>.</span><br /><span className="fw3"> I love crafting user experiences and bringing ideas to life with code, currently designing products and experiments at <a href="https://www.mozilla.org/" target="_blank" rel="noopener noreferrer" id="firefox" className="no-underline fw5 link near-black">Mozilla Firefox</a>.</span></h1>
        </header>
        <section className="center mw8 ph4-ns ph3">
          <div className="cf hideme hidediv">
           <div className="fl w-100 w-50-l pa2">
              <Link to='/screenshot-plus'>
                <div className="bg-dark-green-1 project relative">
                  <figure className="ma0 project-image">
                    <img src="images/screenshot-plus-cover.png" alt="Screenshot Plus" />
                  </figure>
                  <div className="project-text absolute pa5-ns pa3">
                    <p className="white ttu tracked fw5">screenshot plus / 2018</p>
                    <h3 className="white ma0">Collect, organize and find your mobile screenshots easily.</h3>
                    <p className="white o-80 tracked fw5">UX Design • Prototyping • User Testing</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="fl w-100 w-50-l pa2">
              <Link to='/firefox-color'>
                <div className="bg-yellow-1 project relative">
                  <figure className="ma0 project-image">
                    <img src="images/firefox-color-cover.png" alt="Firefox Color" />
                  </figure>
                  <div className="project-text absolute pa5-ns pa3">
                    <p className="white ttu tracked fw5">firefox color / 2017-2018</p>
                    <h3 className="white ma0">A simple tool for anyone to change the look of Firefox.</h3>
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
            <p className="ttu tracked f12 fw7 tc">VIEW MORE</p>
            <div className="space-around center mw360">
              <a href="https://www.youwenliang.com/work" target="_blank" rel="noopener noreferrer" className="near-black no-underline hover-move">
                <h4 className="tc fw3 f4">Past Works</h4>
              </a>
              <p className="mh2 f4">/</p>
              <a href="https://creative-lab.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="near-black no-underline hover-move">
                <h4 className="tc fw3 f4">Side Projects</h4>
              </a>
            </div>
            <h4 className="tc">
                <FontAwesome name='long-arrow-right' className="gold" />
            </h4>
        </section>
        <About display={this.state.about} handler={this.handler}/>
      </div>
    );
  }
}

export default Home;

class About extends Component {
  render() {
    let display = " fade";
    return (
      <section id="about" className={"w-100 pt6 bg-white z1 vh-100 top-center absolute"+display}>
        <div className="mw8 center">
        <div className="about-content mw8 title center ph4-ns ph3">
          <h1 className="fw5 ph2-ns align-center">
          <span className="f6 wh48 cp bg-near-white br-100 absolute bg-animate hover-bg-moon-gray" onClick={this.props.handler} ><FontAwesome name='long-arrow-left' /></span>
          <span className="ml5 ph2-ns">About Mark</span>
          </h1>
          <div className="mw8 ml5">
            <div className="cf ph2-ns">
              <div className="fl w-100 w-60-l">
                <h3 className="fw3 lh-copy f4-ns f5 ph2-ns mt0">I am is a designer, engineer, and maker that crafts digital and physical experiences with new technologies. Previously, I was working as a Creative Technologist at AKQA San Francisco office, pitching and executing ideas for brands such as Google, Nike Jordan, DirecTV and Nest.
<br/><br/>
My work is informed by my previous study as an electrical engineering student tackling new possibilities in the digital and physical realm. My specialty in user experience, coupled with the ability to write code and build prototypes helped me facilitate the launch of several Firefox Testpilot experiments, such as Firefox Screenshots and Firefox Send.
<br/><br/>
I have a Masters degree in Interaction Design from California College of the Arts (CCA), and have a Bachelor of Science in Engineering from National Taiwan University.
I have lived and worked in San Francisco and now resides in Taipei, Taiwan.</h3>
                </div>
                <div className="fl w-100 w-40-l pl4-ns">
                <img className="br2 mb3" src="https://avatars3.githubusercontent.com/u/8919308?s=460&v=4" width="240" height="240"/>
                <a href="https://youwenliang.com/You-Wen-Liang-Resume.pdf" target="_blank"  rel="noopener noreferrer" className="no-underline near-black">
                  <div id="resume" className="f4 link ph2 mv3"><FontAwesome name='paperclip' className="mr1" />My Resume</div>
                </a>
                <a href="https://github.com/youwenliang" target="_blank"  rel="noopener noreferrer" className="no-underline near-black">
                  <div id="github" className="f4 link ph2 mv3"><FontAwesome name='github' className="mr1" />Github</div>
                </a>
                <a href="https://codepen.io/youwenliang/" target="_blank"  rel="noopener noreferrer" className="no-underline near-black">
                  <div id="codepen" className="f4 link ph2 mv3"><FontAwesome name='codepen' className="mr1" />Codepen</div>
                </a>
                <a href="https://dribbble.com/youwenliang" target="_blank"  rel="noopener noreferrer" className="no-underline near-black">
                  <div id="dribbble" className="f4 link ph2 mv3"><FontAwesome name='dribbble' className="mr1" />Dribbble</div>
                </a>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>
    )
  }
}
