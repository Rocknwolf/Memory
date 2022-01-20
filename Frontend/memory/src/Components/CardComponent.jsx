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
        <div className='cardSection'>
            <div>            
                <h4 className='card' onClick={drawCard}>{drawnCards.includes(index) ? index : "hidden"}</h4>
            </div>
        </div>
    )
}

export default CardComponent
