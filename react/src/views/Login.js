import React, { Component } from 'react';
const Login_URL = 'http://localhost:3100/auth/Login';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }


    onChangeText = (event) => {
        this.setState({ username: event.target.value })
    }
    onChangePass = (event) => {
        this.setState({ password: event.target.value })
    }

    formSubmitted = (event) => {
        event.preventDefault();
        const param =  {
            username: this.state.username,
            password: this.state.password,
            confPassword: this.state.confPassword
        }
        console.log('param',param)

        if(this.state.password !== this.state.confPassword) {
            console.log('no same')
        } else {
            const body = {
                username: this.state.username,
                password: this.state.password
            };
    
            fetch(Login_URL, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'content-type': 'application/json'
                }
            }).then(Response => {
                if (Response.ok) {
                    return Response.json();
                }
    
                return Response.json().then(error => {
                    throw new Error(error.message)
                })
            }).then(user => {
                console.log(user);
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <div >
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <a className="navbar-brand" href="/">Api view</a>
                    </nav>
                    <div className="jumbotron">
                        <h1 className="display-3">Login</h1>
                        <hr className="my-4"/>
                        <p>Welcome to Login.</p>
                    </div>
                </div>
                <form onSubmit={(event) => this.formSubmitted(event)}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="text" className="form-control" placeholder="Enter Username" 
                            value={this.state.username}
                            onChange={event => this.onChangeText(event)}
                            >
                        </input>
                        <small id="emailHelp" className="form-text text-muted">Username form 3 to 30 char</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input 
                            onChange={event => this.onChangePass(event)}
                            type="password" className="form-control" id="password" placeholder="Enter Password" value={this.state.Password}></input>
                        <small id="emailHelp" className="form-text text-muted">Username form 6 to 8 char</small>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <div className="form-group form-check">
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
