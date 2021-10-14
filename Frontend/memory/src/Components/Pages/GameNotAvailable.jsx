import React from 'react'
import {Link} from 'react-router-dom'

function GameNotAvailable() {
    return (
        <div>
            <h2>Game not available</h2>
            <p>please proof your whatever...</p>

            <Link to="/" ></Link>
        </div>
    )
}

export default GameNotAvailable
