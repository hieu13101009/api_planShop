import React, { useState, useCallback, useEffect } from 'react';
const NOTE_URL = 'http://192.168.33.21:8080/api/v1/notes';


const useCallListApi = (setData) => {
    useEffect(() => {
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
    },[])
}

export default useCallListApi;