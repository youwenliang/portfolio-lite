/*global FB*/
import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import Home from './Home';
import Topic1 from './topic/Topic1';
import Topic2 from './topic/Topic2';
import Topic3 from './topic/Topic3';
import Topic4 from './topic/Topic4';

import $ from 'jquery';

class Main extends Component {
  updateActions = () => {
    window.scrollTo(0, 0);
  }
  componentDidMount(prevProps, prevState) {
    this.updateActions();
  } 
  componentDidUpdate(prevProps, prevState) {
    this.updateActions();
  }

  render() {
    return (
      <main className="center mw8 ph4 pb5">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/project-zerda' component={Topic1} />
          <Route exact path='/firefox-send' component={Topic2} />
          <Route exact path='/firefox-screenshots' component={Topic3} />
          <Route exact path='/firefoxos-tv' component={Topic4} />
          <Redirect from='*' to='/' />
        </Switch>
      </main>
    );
  }
}

export default Main;
