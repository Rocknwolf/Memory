import {useContext} from 'react'
import {GameContext} from '../Context/GameContext.jsx'

function GameOptions() {
    const {size} = useContext(GameContext);
    return (
        <div>
            <h3>Your game-options</h3>
            <h4>Spielfeld:</h4>
            <p>{size.x} x {size.y}</p>
        </div>
    )
}

export default GameOptions
