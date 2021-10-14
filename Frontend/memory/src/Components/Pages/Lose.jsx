import React from 'react'
import {Link} from 'react-router-dom'

function Lose() {
    return (
        <div>
            <h2>Loser!</h2>
            <p>username: you lose!</p>
            <br />
            <img src="http://blog.docx.org/wp-content/uploads/2010/03/nelson_haha.jpg" alt="haha" />
            <br />
            <p>Get him or die trying</p>
            <br />
            <Link to="/" >get home</Link>
            <br />
            <Link to="/new-game" >revenge</Link>

        </div>
    )
}

export default Lose
