import React from 'react'
import {Link} from 'react-router-dom'

function Home() {

    return (
        <div className='homeComponent'>
            <div className="homeContent">
                <h1 className='homeHeader'>Memory</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae, voluptatibus sit mollitia dolorum necessitatibus, iure cumque quo minima sed a laudantium soluta odit expedita aspernatur quia maiores aliquam at?</p>
                <Link className='mainBtn' to="/new-game" >New Game</Link>
            </div>
        </div>
    )
}

export default Home
