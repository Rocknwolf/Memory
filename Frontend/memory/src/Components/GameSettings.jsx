import React, {useContext} from 'react'
import { GameContext } from '../Context/GameContext.jsx';

function GameSettings() {
    const {size, setSize} = useContext(GameContext);

    const handleXLength = (event) => {
        setSize(prev => ({...prev, x: +event.target.value}));
    }
    const handleYLength = (event) => {
        setSize(prev => ({...prev, y: +event.target.value}));
    }

    return (
        <div className='gameSettingComponent'>
            <div className="gameSettingsBox">
                <h2>Game settings</h2>
                <label htmlFor="xSize">Länge X auswählen:</label>
                <input type="text" name="xSize" id="xSize" value={size.x} onChange={handleXLength} />
                <label htmlFor="ySize">Länge Y auswählen</label>
                <input type="text" name="ySize" id="ySize" value={size.y} onChange={handleYLength} />
            </div>
        </div>
    )
}

export default GameSettings
