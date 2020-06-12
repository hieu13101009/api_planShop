import React, { useState,useCallback } from 'react';
const SIGNUP_URL = 'http://192.168.33.21:8080/auth/sigup';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');


    const onChangeText = useCallback((event) => {
        setUsername(event.target.value)
    }, [])
    const onChangePass = useCallback((event) => {
        setPassword(event.target.value)
    }, [])
    const onChangeConfPass = useCallback((event) => {
        setConfPassword(event.target.value)
    }, [])

    const formSubmitted = useCallback((event) => {
        event.preventDefault();
        const param =  {
            username: username,
            password: password,
            confPassword: confPassword
        }
        console.log('param',param)

        if(password !== confPassword) {
            console.log('no same')
        } else {
            const body = {
                username: username,
                password: password
            };
    
            fetch(SIGNUP_URL, {
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
    }, [username, password, confPassword])

    return (
        <div style={{textAlign: 'center'}}>
            <div >
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="/">Api view</a>
                </nav>
                <div className="jumbotron">
                    <h1 className="display-3">Signup</h1>
                    <hr className="my-4"/>
                    <p>Welcome to Signup.</p>
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
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input
                        onChange={onChangeConfPass}
                        type="password" className="form-control" id="password" placeholder="Enter Confirm Password" value={confPassword}></input>
                    <small id="emailHelp" className="form-text text-muted">Username form 6 to 8 char</small>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <div className="form-group form-check">
                </div>
            </form>
        </div>
    );
}

export default Signup;
