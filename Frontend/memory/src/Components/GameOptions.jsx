import {useContext} from 'react'
import {GameContext} from '../Context/GameContext.jsx'

function GameOptions() {
    const {size, name, avatar, playerId} = useContext(GameContext);
    return (
        <div>
            <h3>Your game-options</h3>
            <h4>Spielfeld:</h4>
            <img src={avatar} alt="avatar" />
            <h5>{name} ({playerId})</h5>
            <p>{size.x} x {size.y}</p>
        </div>
    )
}

export default GameOptions
