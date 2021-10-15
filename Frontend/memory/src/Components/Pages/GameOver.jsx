import {useContext} from 'react'
import {GameContext} from '../../Context/GameContext.jsx'

import Win from './Win.jsx'
import Lose from './Lose.jsx'
import Button from '../Button.jsx'

function GameOver() {
    const {won, toggleWinner} = useContext(GameContext);

    return (
        <div>
            {won && <h1>TEST</h1>}
            { won ? <Win/> : <Lose/> }
            
            <Button handleClick={toggleWinner} title="toggle mich"></Button>
        </div>
    )
}

export default GameOver
