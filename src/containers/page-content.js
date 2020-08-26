import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../pages/home';

class PageContent extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
      </Switch>
    )
  }
}

export default PageContent;