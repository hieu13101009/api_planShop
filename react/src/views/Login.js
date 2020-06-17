import React, { useState, useCallback, useEffect } from 'react';
import { Route, Redirect } from "react-router-dom";

const Login_URL = 'http://192.168.33.21:8080/auth/login';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [directScreen, setDirectScreen] = useState({directScreen: ''});

    const onChangeText = useCallback((event) => {
        setUsername(event.target.value)
    })
    const onChangePass = useCallback((event) => {
        setPassword(event.target.value)
    })

    useEffect(() => {
        if (localStorage.token) {
            setDirectScreen('admin');
        }
    }, [directScreen])

    const formSubmitted = (event) => {
        event.preventDefault();
        const body = {
            username: username,
            password: password
        };
        console.log('body',body)


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
            console.log('abcd',user);
            if (user.code !== '001') {
                setDirectScreen('Home');
            } else {
                localStorage.token = user.data
                setDirectScreen('admin');
            }

        }).catch((error) => {
            console.log(error);
        })
    
    }

    return (
        directScreen === 'admin' ? (
            <Redirect
            to={{
                pathname: directScreen,
            }}
            />
        ) : (
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
            <form onSubmit={formSubmitted}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Username</label>
                    <input type="text" className="form-control" placeholder="Enter Username" 
                        value={username}
                        onChange={onChangeText}
                        >
                    </input>
                    <small id="emailHelp" className="form-text text-muted">Username form 3 to 30 char</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input 
                        onChange={onChangePass}
                        type="password" className="form-control" id="password" placeholder="Enter Password" value={password}></input>
                    <small id="emailHelp" className="form-text text-muted">Username form 6 to 8 char</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <div className="form-group form-check">
                </div>
            </form>
        </div>
        )
    );
}

export default Login;
