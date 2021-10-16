import {useContext} from 'react'
import {GameContext} from '../../Context/GameContext.jsx'

import Win from './Win.jsx'
import Lose from './Lose.jsx'

function GameOver() {
    const {won} = useContext(GameContext);

    return (
        <div>
            { won ? <Win/> : <Lose/> }    
        </div>
    )
}

export default GameOver
