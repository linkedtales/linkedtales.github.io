import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from './Pages/Index/Index'
import Experiences from './Pages/Experiences/Experiences'

import * as serviceWorker from './serviceWorker';

const index = <Router>
    <Route path="/" exact component={Index} />
    <Route path="/software-engineer-professional-experiences" component={Experiences} />
    
  </Router>

ReactDOM.render(index, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();