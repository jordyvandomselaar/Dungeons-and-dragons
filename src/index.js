import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import Home from './components/views/Home/Home';
import About from './components/views/About/About';
import Register from './components/views/Register/Register';

import {Router, Route, IndexRoute, hashHistory} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <route path="register" component={Register} />
    </Route>
  </Router>,
  document.getElementById('root')
);