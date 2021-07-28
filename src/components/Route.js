import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Navbar from './Navbar';
import Home from './Home';
import Quote from './Quote';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/calculator" component={App} />
      <Route exact path="/qoute" component={Quote} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
