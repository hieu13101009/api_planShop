import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Signup from './views/Signup'
import Login from './views/Login'
import Home from './views/Home'
import Index from './views/Index'
import Example from './views/Example'

import { ProtectedRoute,  } from "./router/ProtectedRoute";

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/Index" component={Index} />
        <Route path="/Signup" component={Signup} />
        <Route path="/Login" component={Login} />
        <Route path="/Example" component={Example} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
