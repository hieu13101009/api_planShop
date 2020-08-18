import React, { useState, useCallback, useEffect } from 'react';
import {
    Link
} from "react-router-dom";
import { useSelector, useDispatch, } from "react-redux"
import useCallListApi from '../hooks/index';
import List from './List';

const NOTE_URL = 'http://192.168.33.21:8080/api/v1/notes';


const Index = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const [data, setData] = useState([]);


    // const count = useSelector(state => state.counter.count);
    // const user = useSelector(state => state.user);
    useCallListApi(setData);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    },[number])

    const theme = {
        backgroundColor: dark ? '#333': '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    const Logout = useCallback((_event) => {
        localStorage.removeItem('token');
    }, [])

    const onChangeTitle = useCallback((event) => {
        console.log('onChangeTitle',onChangeTitle)
        setTitle(event.target.value)
    }, [])

    const onChangeNote = useCallback((event) => {
        setNote(event.target.value)
    }, [])

    const formSubmitted =(event: any) => {
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

    return (
    <div>
        <div style={theme}>
            <input 
            type="number"
            value={number}
            onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button onClick={()=>setDark(prevDark => !prevDark)}>
                Toggle theme
            </button>
            {/* <List getItems={getItems} /> */}
        </div>
        <div style={{textAlign: 'center'}}>
            <div >
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand" href="/">Api view</a>
                    <button className="btn btn-light" onClick={Logout}><Link to="/">Log Out</Link></button>
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
            {data.map((item,_index) => (
                <div className="list-group" key={item}>
                    <a className="list-group-item list-group-item-action flex-column align-items-start active">
                        <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1" >{item}</h5>
                        </div>
                        <p className="mb-1">{item}</p>
                    </a>
                </div>
            ))}

            <form onSubmit={formSubmitted} >
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
                        className="form-control"
                        placeholder="Enter Notes"
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
        </div>
    );
}
export default Index;
