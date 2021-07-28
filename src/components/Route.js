import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Navbar from './Navbar';
import Home from './Home';
import Quote from './Quote';

const Route = () => (
<BrowserRouter>
<Navbar/>
 <Switch>
     <Route exact path='' component={Home}/>
     <Route exact path="/quote" component={Quote} />
     <Route exact path='/calculate' component={App}/>
 </Switch>
</BrowserRouter>
)