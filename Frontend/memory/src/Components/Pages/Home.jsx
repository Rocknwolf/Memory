import React from 'react'
import {Link} from 'react-router-dom'

function Home() {

    return (
        <div className='homeComponent'>
            <h1>The Maniac Memory Section</h1>
            <div className="homeContent">
                <h2 className='homeHeader'>Memory</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae, voluptatibus sit mollitia dolorum necessitatibus, iure cumque quo minima sed a laudantium soluta odit expedita aspernatur quia maiores aliquam at?</p>
                <Link className='mainBtn' to="/new-game" >New Game</Link>
            </div>
        </div>
    )
}

export default Home
