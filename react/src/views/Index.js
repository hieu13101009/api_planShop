import React, { Component } from 'react';
const Login_URL = 'http://192.168.33.21:8080/auth/login';

class Index extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <div >
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <a className="navbar-brand" href="/">Api view</a>
                    </nav>
                    <div className="jumbotron">
                        <h1 className="display-3">Index</h1>
                        <hr className="my-4"/>
                        <p>Welcome to index.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
