import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import Topic1 from './topic/Topic1';
import Topic2 from './topic/Topic2';
import Topic3 from './topic/Topic3';
import Topic4 from './topic/Topic4';

import $ from 'jquery';

class Main extends Component {
  updateActions = () => {
    window.scrollTo(0, 0);
    $(window).scroll( function(){
      if($(window).scrollTop() > 0) {
        $('.hidediv').each( function(i){
          var bottom_of_object = $(this).offset().top + $(this).outerHeight()/5;
          var bottom_of_window = $(window).scrollTop() + $(window).height();
          if( bottom_of_window > bottom_of_object ){
            $(this).removeClass('hideme');
          }  
        });
      }
    });
  }
  componentDidMount(prevProps, prevState) {
    this.updateActions();
  } 
  componentDidUpdate(prevProps, prevState) {
    this.updateActions();
  }
  
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/firefox-screenshots' component={Topic1} />
          <Route exact path='/firefox-send' component={Topic2} />
          <Route exact path='/project-zerda' component={Topic3} />
          <Route exact path='/firefoxos-tv' component={Topic4} />
          <Redirect from='*' to='/' />
        </Switch>
      </main>
    );
  }
}

export default Main;
