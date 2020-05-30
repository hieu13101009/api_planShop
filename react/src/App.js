import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Signup from './views/Signup'
import Login from './views/Login'
import Home from './views/Home'
import './App.css';
import { render } from 'react-dom';

function App() {
  return (
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Login" component={Login} />
      </Switch>
      </Router>
  );
}

export default App;
