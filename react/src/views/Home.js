import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Api view</a>
                </nav>
                <div className="jumbotron">
                    <h1 className="display-3">Auth</h1>
                    <p className="lead">This is a simple Auth.</p>
                    <hr className="my-4"/>
                    <p>Welcome to Auth.</p>
                    <p className="lead">
                        <Link to="/Signup">Signup</Link>
                    </p>
                    <p className="lead">
                        <Link to="/login">Login</Link>
                    </p>
                    <p className="lead">
                        <Link to="/index">Go to index</Link>
                    </p>
                </div>
            </div>
        );
    }
}

export default Home;
