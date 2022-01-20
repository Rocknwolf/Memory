import {useContext} from 'react'
import {GameContext} from '../Context/GameContext.jsx'

function GameOptions() {
    const {size, name, avatar, playerId} = useContext(GameContext);
    return (
        <div className='gameOptionsBox'>
            <img src={avatar} alt="avatar" />
            <h5>{name} ({playerId})</h5>
            <br />
            <h5>Spielfeld:</h5>
            <p>{size.x} x {size.y}</p>
        </div>
    )
}

export default GameOptions
