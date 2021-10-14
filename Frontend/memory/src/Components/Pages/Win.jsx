import React from 'react'
import {Link} from 'react-router-dom'

function Win() {
    return (
        <div>
            <h2>Winner</h2>
            <p>username: you win!</p>
            <br />
            <img src="http://img2.joyreactor.com/pics/post/funny-pictures-auto-kids-highlander-475587.jpeg" alt="haha" />
            <br />
            <p>Congratulations</p>
            <br />
            <Link to="/" >Back home</Link>
            <br />
            <Link to="/new-game" >Revenge</Link>
        </div>
    )
}

export default Win
