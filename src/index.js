import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Router,Route,Link,browserHistory} from 'react-router'

import Bisection from './Bisection';
import FalsePosition from './FalsePosition';
import OnePoint from './OnePoint';
import NewtonRaphson from './NewtonRaphson';
import Secant from './Secant';



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/Bisection" component={Bisection}/>
    <Route path="/FalsePosition" component={FalsePosition}/>
    <Route path="/OnePoint" component={OnePoint}/>
    <Route path="/NewtonRaphson" component={NewtonRaphson}/>
    <Route path="/Secant" component={Secant}/>
  </Router>,
  
  document.getElementById('root')
  
);

