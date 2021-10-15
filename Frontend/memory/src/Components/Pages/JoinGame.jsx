import React from 'react'
import {Link} from 'react-router-dom'
import PlayerSettings from '../PlayerSettings.jsx'

function JoinGame() {
    return (
        <div>
            <h2>Header</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis tempora nesciunt illo maxime. Veniam, illo tempore hic ea ad nulla pariatur quia tenetur, officia quas harum maxime deserunt! In.</p>
            <br />
            <PlayerSettings/>
            <br />
            <Link to="/player-settings" >Accept Challenge</Link>
            <Link to="/" >No thanks!</Link>
        </div>
    )
}

export default JoinGame
