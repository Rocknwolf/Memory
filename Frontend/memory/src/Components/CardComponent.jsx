import React, {useContext} from 'react'
import {GameContext} from '../Context/GameContext.jsx'

function CardComponent() {
    const {handleHiddenCard} = useContext(GameContext);

    return (
        <div>
            <div> 
                <h4 onClick={handleHiddenCard}>Card</h4>
            </div>
        </div>
    )
}

export default CardComponent
