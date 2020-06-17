import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

const Home = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Api view</a>
            </nav>
            <div className="jumbotron">
                <h1 className="display-3">Home</h1>
                <p className="lead">This is a simple Auth.</p>
                <hr className="my-4"/>
                <p>Welcome to Auth.</p>
                <p className="lead">
                    <Link to="/Signup">Signup</Link>
                </p>
                <p className="lead">
                    <Link to="/Login">Login</Link>
                </p>
                <p className="lead">
                    <Link to="/admin">Go to index</Link>
                </p>
                <p className="lead">
                    <Link to="/admin/Example">Go to hook</Link>
                </p>
            </div>
        </div>
    );
}
export default Home;
