import React, { useState, useEffect } from 'react';
import Main from './Main'

const Login = () => {

    const [username, setUsername] = useState('');
    const [mainPage, setMainPage] = useState(false);
    const [availability, setAvailability] = useState('');
    const [extra, setExtra] = useState('')
    const [nickName, setnickName] = useState('')
    const [at, setAt] = useState('')
    const [logEffect, setlogEffect] = useState(false)

    const buttonBuddy = {
        width: '200px'
    }

    useEffect(() => {
        if (nickName.length > 20) {
            setExtra(`Nickname contains ${nickName.length} characters but must be 20 characters or less!`)
        } else {
            setExtra('Nickname is within 20 characters!')
        }
    }, [nickName]);

    useEffect(() => {
        if (username.length < 1) {
            setAvailability('')
            setAt('')
        } else if (username.length > 15) {
            setAvailability(`contains ${username.length} characters!`)
            setAt('@')
            setExtra('Username must be 15 characters or less!')
        } else {
            setAvailability('is available!')
            setAt('@')
            setExtra('Username is within 15 characters!')
        }
    }, [username]);

    useEffect(() => {
        if (nickName.length === 0) {
            setExtra('Nickname must include at least 1 character.')
        } else if (username.length > 15) {
            setExtra('Shorter username required.')
        } else if (username.length === 0) {
            setExtra('Username must include at least 1 character.')
        } else if (nickName.length > 20) {
            setExtra('Shorter nickname required.')
        } else {

        };
    }, [logEffect]);

    const enterName = (e) => {
        setUsername(e.target.value)
    }

    const clickLogin = () => {
        setlogEffect(false)
        if (nickName.length === 0) {
            setlogEffect(true)
        } else if (username.length > 15) {
            setlogEffect(true)
        } else if (username.length === 0) {
            setlogEffect(true)
        } else if (nickName.length > 20) {
            setlogEffect(true)
        } else {
            setMainPage(true)
        };
    };

    if (mainPage === false) {
        return (
            <div>
                <div class='row justify-content-center d-flex flex-row'>
                    <h1 class='display-1 text-center text-danger pt-5 mt-5'>Welcome to Chirper!</h1>
                </div>
                <div class='row d-flex flex-row pt-5'></div>
                <div class='row d-flex flex-row justify-content-center'>
                    <div class="form-row align-items-center">
                        <div class="col-sm-4 my-1">
                            <label class="sr-only" for="inlineFormInputName">Name</label>
                            <input type="text" class="form-control" id="inlineFormInputName" placeholder="Nickname" value={nickName} onChange={(e) => setnickName(e.target.value)} />
                        </div>
                        <div class="col-sm-4 my-1">
                            <label class="sr-only" for="inlineFormInputGroupUsername">Username</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">@</div>
                                </div>
                                <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Username" value={username} onChange={e => enterName(e)} />
                            </div>
                        </div>
                        <div  class="col-4 my-1">
                            <input style={buttonBuddy} type="submit" class="btn btn-danger" onClick={() => clickLogin()} value='Join' />
                        </div>
                    </div>
                </div>
                <div class='mt-3 row justify-content-center d-flex flew-row'>
                    <p id='avail' class=''>{at}{username} {availability}</p>
                </div>
                <div class='row justify-content-center d-flex flew-row'>
                    <p id='help' class=''>{extra}</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                <Main nickName={nickName} at={at} username={username} phrase='Timeline' />
            </div>
        )
    };
};

export default Login;