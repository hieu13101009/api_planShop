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
            data: []
        }
    }

    componentDidMount = async () => {
        await this.getNotesList();
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
            note: this.state.note,
        };
        console.log('body',body)

        fetch(NOTE_URL, {
            method: 'post',
            body: JSON.stringify(body),
            headers: {
                'content-type': 'application/json',
                'authorization': localStorage.token,
            },
        }).then(res => res.json())
        console.log('localStorage.token', localStorage.token)
    }

    getNotesList =() => {
        fetch(NOTE_URL, {
            method: 'get',
            headers: {
                'content-type': 'application/json',
                'authorization': localStorage.token,
            },
        }).then(response => response.json()).then(data => {
            this.setState({data})
        });
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
                <div className="alert alert-dismissible alert-danger">
                    <a className="alert-link"> List note</a>
                </div>
                {this.state.data.map((item,index) => (
                    <div className="list-group" key={item._id}>
                        <a className="list-group-item list-group-item-action flex-column align-items-start active">
                            <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1" >{item.title}</h5>
                            </div>
                            <p className="mb-1">{item.notes}</p>
                        </a>
                    </div>
                ))}
                <form onSubmit={(event) => this.formSubmitted(event)}>
                    <div className="form-group">
                        <div className="alert alert-dismissible alert-danger">
                            <a className="alert-link"> Add more note here</a>
                        </div>
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
