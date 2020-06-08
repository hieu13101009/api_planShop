import React, { Component } from 'react';
import {
    Link
} from "react-router-dom";

const NOTE_URL = 'http://192.168.33.21:8080/api/v1/notes';

class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            note: '',
        }
    }
    Logout = () => {
        localStorage.removeItem('token');
    }

    onChangeTitle =(event) => {
        this.setState({title: event.target.value})
    }

    onChangeNote =(event) => {
        this.setState({note: event.target.value})
    }

    formSubmitted =(event) => {
        const body = {
            title: this.state.title,
            note: this.state.note
        };
        console.log('body',body)

        fetch(NOTE_URL, {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json'
            },
            token: localStorage.token
        }).then(res => res.json())
        event.preventDefault();
    }



    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <div >
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <a className="navbar-brand" href="/">Api view</a>
                        <button className="btn btn-light" onClick={() => this.Logout()}><Link to="/">Log Out</Link></button>
                    </nav>
                    <div className="jumbotron">
                        <h1 className="display-3">Index</h1>
                        <hr className="my-4"/>
                        <p>Welcome to index.</p>
                        <p className="lead">
                    </p>
                    </div>
                </div>
                <form onSubmit={(event) => this.formSubmitted(event)}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" 
                        className="form-control" 
                        placeholder="Enter Title" 
                        value={this.state.title} 
                        onChange={event => this.onChangeTitle(event)}
                            >
                        </input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="notes">Notes</label>
                        <textarea 
                            type="text" className="form-control" rows="3" placeholder="Enter Notes"
                            value={this.state.note}
                            onChange={event => this.onChangeNote(event)}
                            >
                            </textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <div className="form-group form-check">
                    </div>
                </form>
            </div>
        );
    }
}

export default Index;
