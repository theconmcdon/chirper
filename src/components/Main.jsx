import React, { useState, useEffect } from 'react'

const Main = props => {



    const hoverBuddy = {
        cursor: 'pointer'
    }

    const textBuddy = {
        height: '120px',
        width: '940px',
        padding: '0'
    }

    const sideBuddy = {
        transform: 'translate(4px)'
    }

    const imgBuddy = {
        height: '70px',
        width: '70px',
        borderRadius: '10px'
    }

    class Post {
        render() {
            return (
                <blockquote class="blockquote border p-5">
                    <div class='row'>
                        <img style={imgBuddy} src="https://pbs.twimg.com/media/C8QqGm4UQAAUiET.jpg" alt="" />
                        <div class='col-8'>
                            <p class="pl-5 mb-0">i need some new garage house recs but like old school larry levin garage not like burial future garage</p>
                            <footer class="ml-5 blockquote-footer">{props.at}{props.username} on <cite title="Source Title">{this.props.date.toLocaleTimeString()}</cite></footer>
                        </div>
                    </div>
                </blockquote>
            )
        }
    }



    const [update, setUpdate] = useState('')
    const [array, setArray] = useState([])
    const [array2, setArray2] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    

    useEffect(() => {
        console.log(update)
    }, [update])

    const typingPost = (e) => {
        setUpdate(e.target.value)
    }

    const newPost = () => {
        let date = new Date();
        let prePost = {
            text: update,
            day: date.toLocaleDateString(),
            time: date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
            id: Math.random()
        };
        setArray([...array, prePost])
        setDate(prePost.day)
        setTime(prePost.time)
        
    }

    useEffect(() => {
        setArray2(displayedPosts)
    }, [array])

    

    const displayedPosts = array.map(val => {
        return (
                <blockquote class="blockquote border p-5">
                    <div class='row'>
                        <img style={imgBuddy} src="https://pbs.twimg.com/media/C8QqGm4UQAAUiET.jpg" alt="" />
                        <div class='col-8'>
                            <p key={`the-array-${val.id}`} class="pl-5 mb-0">{val.text}</p>
                            <footer class="ml-5 blockquote-footer">{props.at}{props.username} on <cite title="Source Title">{date} at {time}</cite></footer>
                        </div>
                    </div>
                </blockquote>
        )
    });

    const hoverEnterPost = () => {
        let postBtn = document.querySelector('#btnPost')
        postBtn.classList.add('text-danger')
    }

    const hoverLeavePost = () => {
        let postBtn = document.querySelector('#btnPost')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterImg = () => {
        let postBtn = document.querySelector('#btnImg')
        postBtn.classList.add('text-danger')
        console.log(displayedPosts)
    }

    const hoverLeaveImg = () => {
        let postBtn = document.querySelector('#btnImg')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterLink = () => {
        let postBtn = document.querySelector('#btnLink')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveLink = () => {
        let postBtn = document.querySelector('#btnLink')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterLike = () => {
        let likeBtn = document.querySelector('#btnLike')
        likeBtn.classList.add('text-danger')
    }

    const hoverLeaveLike = () => {
        let likeBtn = document.querySelector('#btnLike')
        likeBtn.classList.remove('text-danger')
    }

    const hoverEnterRec = () => {
        let postBtn = document.querySelector('#btnRec')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveRec = () => {
        let postBtn = document.querySelector('#btnRec')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterSave = () => {
        let postBtn = document.querySelector('#btnSave')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveSave = () => {
        let postBtn = document.querySelector('#btnSave')
        postBtn.classList.remove('text-danger')
    }

    const hoverEnterShare = () => {
        let postBtn = document.querySelector('#btnShare')
        postBtn.classList.add('text-danger')
    }

    const hoverLeaveShare = () => {
        let postBtn = document.querySelector('#btnShare')
        postBtn.classList.remove('text-danger')
    }

    return (
        <div>
            <div class='pb-1'>
                <nav class="sticky-top row d-flex flew-row navbar pr-5 bg-danger bg-gradient navbar-expand-lg navbar-light">
                    <a class="navbar-brand text-white pl-5" href="#">Chirper</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="pl-4 collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Home</a>
                            </li>
                            <li class="nav-item active">
                                <a class="nav-link text-white" href="#">Profile <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Messages</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled text-white" href="#">Notifications</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Settings
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item text-white" href="#">Privacy</a>
                                    <a class="dropdown-item text-white" href="#">Alerts</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item text-white" href="#">Log Out</a>
                                </div>
                            </li>

                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
                <div class='row mb-3 pb-2 d-flex flew-row bg-danger bg-gradient text-white'>
                    <div class='col-1 display-4 text-left'>
                        <span class='pl-5'>🐣</span>
                    </div>
                    <div class='col-11' >
                        <h1 class='pl-5 display-4'>{props.nickName}'s Timeline</h1>
                    </div>
                </div>
                <div class='row d-flex flew-row'>
                    <div class='col-2'>
                        <div class=''>
                            <div class='border-right mt-3 lead border-secondary text-right pr-2' id='btnPost' onClick={() => newPost()} style={hoverBuddy} onMouseEnter={() => hoverEnterPost()} onMouseLeave={() => hoverLeavePost()}>Post</div>
                        </div>
                        <div>
                            <div class='border-right lead border-secondary text-right pr-2' id='btnImg' style={hoverBuddy} onMouseEnter={() => hoverEnterImg()} onMouseLeave={() => hoverLeaveImg()}>Add Image</div>
                        </div>
                        <div>
                            <div class='border-right mb-3 lead border-secondary text-right pr-2' id='btnLink' style={hoverBuddy} onMouseEnter={() => hoverEnterLink()} onMouseLeave={() => hoverLeaveLink()}>Add Link</div>
                        </div>
                    </div>
                    <div class='col-9'>
                        <input onChange={e => typingPost(e)} placeholder='' style={textBuddy} class="" type="text" />
                    </div>
                    <div class='col-1'></div>
                </div>
                <div class='row d-flex'>
                    <div style={sideBuddy} class='col-2 position-fixed lead text-right'>

                        <div>
                            <div class='invisible border-right lead border-secondary text-right pr-2' id='btnImg' style={hoverBuddy} >Add Image</div>
                        </div>
                        <div>
                            <div class='border-right invisible lead border-secondary text-right pr-2' id='btnLink' style={hoverBuddy}></div>
                        </div>
                        <div>
                            <div class='border-right lead invisible border-secondary text-right pr-2' id='btnImg' style={hoverBuddy}></div>
                        </div>
                        <div>
                            <div class='border-right lead invisible border-secondary text-right pr-2' id='btnLink' style={hoverBuddy}></div>
                        </div>
                        <div>
                            <div class='invisible border-right lead invisible border-secondary text-right pr-2' id='btnImg' style={hoverBuddy}></div>
                        </div>
                        <div>
                            <div id='btnLike' style={hoverBuddy} onMouseEnter={() => hoverEnterLike()} onMouseLeave={() => hoverLeaveLike()} class='border-right mt-3 lead border-secondary text-right pr-2'>Like</div>
                        </div>
                        <div class=''>
                            <div id='btnRec' style={hoverBuddy} onMouseEnter={() => hoverEnterRec()} onMouseLeave={() => hoverLeaveRec()} class='border-right lead border-secondary text-right pr-2'>Rechirp</div>
                        </div>
                        <div>
                            <div id='btnSave' style={hoverBuddy} onMouseEnter={() => hoverEnterSave()} onMouseLeave={() => hoverLeaveSave()} class='border-right lead border-secondary text-right pr-2'>Save</div>
                        </div>
                        <div>
                            <div id='btnShare' style={hoverBuddy} onMouseEnter={() => hoverEnterShare()} onMouseLeave={() => hoverLeaveShare()} class='border-right mb-3 lead border-secondary text-right pr-2'>Share</div>
                        </div>
                        <div>
                            <div class='border-right invisible lead border-secondary text-right pr-2' id='btnLink' style={hoverBuddy} ></div>
                        </div>
                    </div>
                    <div id='mainbody' class='col-9 offset-2 mt-3 overflow-auto'>
                        <div>{array2}</div>
                        <blockquote class="blockquote border p-5">
                            <div class='row'>
                                <img class='' style={imgBuddy} src="https://pbs.twimg.com/media/C8QqGm4UQAAUiET.jpg" alt="" />
                                <div class='col-8'>
                                    <p class="pl-5 mb-0">we could catch unlimited breadsticks at the all of garden or we could just put a bun in the oven ahaha 👉👈</p>
                                    <footer class="ml-5 blockquote-footer">{props.at}{props.username} on <cite title="Source Title">6/22/2021 at 01:21pm</cite></footer>
                                </div>
                            </div>
                        </blockquote>
                        <blockquote class="blockquote border p-5">
                            <div class='row'>
                                <img style={imgBuddy} src="https://pbs.twimg.com/media/C8QqGm4UQAAUiET.jpg" alt="" />
                                <div class='col-8'>
                                    <p class="pl-5 mb-0">finally got my 99 in firemaking only took 4 years</p>
                                    <footer class="ml-5 blockquote-footer">{props.at}{props.username} on <cite title="Source Title">6/19/2021 at 12:46am</cite></footer>
                                </div>
                            </div>
                        </blockquote>
                        <blockquote class="blockquote border p-5">
                            <div class='row'>
                                <img style={imgBuddy} src="https://pbs.twimg.com/media/C8QqGm4UQAAUiET.jpg" alt="" />
                                <div class='col-8'>
                                    <p class="pl-5 mb-0">react honestly isn't that hard it's just chaotic</p>
                                    <footer class="ml-5 blockquote-footer">{props.at}{props.username} on <cite title="Source Title">6/15/2021 at 09:46am</cite></footer>
                                </div>
                            </div>
                        </blockquote>
                    </div>
                    <div class='col-1 offset-11'></div>
                </div>
                <div class='d-flex row mt-5 mb-5'>
                    <div class='col-12'>
                        <div class='lead justify-content-center row'>End of Feed</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Main;



