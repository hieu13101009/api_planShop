import React, { useState, useCallback, useEffect } from 'react';
import {
    Link
} from "react-router-dom";

const NOTE_URL = 'http://192.168.33.21:8080/api/v1/notes';

const Index = () => {
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [data, setData] = useState([]);

    useEffect(() => {
        getNotesList();
    },[])

    const Logout = useCallback((event) => {
        localStorage.removeItem('token');
    }, [])

    const onChangeTitle = useCallback((event) => {
        setTitle(event.target.value)
    }, [])

    const onChangeNote = useCallback((event) => {
        setNote(event.target.value)
    }, [])

    const formSubmitted =(event) => {
        const body = {
            title: title,
            note: note,
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

    const getNotesList =() => {
        console.log('1111')
        fetch(NOTE_URL, {
            method: 'get',
            headers: {
                'content-type': 'application/json',
                'authorization': localStorage.token,
            },
        }).then(response => response.json()).then(data => {
            setData(data)
        });
    }

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
            {data.map((item,index) => (
                <div className="list-group" key={item._id}>
                    <a className="list-group-item list-group-item-action flex-column align-items-start active">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1" >{item.title}</h5>
                        </div>
                        <p className="mb-1">{item.notes}</p>
                    </a>
                </div>
            ))}
            <form onSubmit={formSubmitted}>
                <div className="form-group">
                    <div className="alert alert-dismissible alert-danger">
                        <a className="alert-link"> Add more note here</a>
                    </div>
                    <label htmlFor="title">Title</label>
                    <input type="text" 
                    className="form-control" 
                    placeholder="Enter Title" 
                    value={title} 
                    onChange={onChangeTitle}
                        >
                    </input>
                </div>
                <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <textarea 
                        type="text" className="form-control" rows="3" placeholder="Enter Notes"
                        value={note}
                        onChange={onChangeNote}
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
export default Index;
