import React from 'react'
import {Link} from 'react-router-dom'

function Game() {

    return (
        <div>
            <h1>Memory</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore recusandae asperiores error magni facere dolore. Neque veniam animi iusto at perspiciatis aut omnis, alias minima vitae. In iusto facere tempora?</p>
            <br />
            <br />
            <p>turn: num</p>
            <p>score: num</p>
            <br />
            <div>Spielfeld</div>
            <br />
            <p>user: 1</p>
            <p>user: 2</p>
            <br />
            <Link to="/" >Home</Link>

        </div>
    )
}

export default Game
