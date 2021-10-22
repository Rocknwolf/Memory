import React, {useContext, useState} from 'react'
import {GameContext} from '../Context/GameContext.jsx'

function CardComponent({index}) {
    const { drawnCards, handleDrawCard} = useContext(GameContext);
    const [hidden, setHidden] = useState(true);

    const drawCard = () => {
        setHidden(false);
        handleDrawCard(index);
    }
    
    return (
        <div>
            <div> 
                {/* <h4 onClick={handleHiddenCard}>Card</h4> */}                
                <h4 onClick={drawCard}>{drawnCards.includes(index) ? index : "hidden"}</h4>
            </div>
        </div>
    )
}

export default CardComponent
