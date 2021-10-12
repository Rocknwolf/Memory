import React from 'react'
import {Link} from 'react-router-dom'

function Home() {

    return (
        <div>
            <h1>MainMenü</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint molestiae, voluptatibus sit mollitia dolorum necessitatibus, iure cumque quo minima sed a laudantium soluta odit expedita aspernatur quia maiores aliquam at?</p>

            <Link to="/new-game" >New Game</Link>

        </div>
    )
}

export default Home
