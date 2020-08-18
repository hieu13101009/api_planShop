import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import Signup from '../../views/Signup';
import Login from '../../views/Login';
import Home from '../../views/Home';

import { ProtectedRoute } from '../../router/ProtectedRoute';
import useStyles from './styles';

function App() {
    const classes = useStyles();
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Signup" component={Signup} />
                <Route path="/Login" component={Login} />
                <ProtectedRoute />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default App;
