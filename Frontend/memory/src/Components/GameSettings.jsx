import React, {useState} from 'react'
import {createGame} from '../Lib/Api.js'
import Button from './Button.jsx';

//Gamesettings

const playerId = 555555;
function GameSettings() {
    const [sizeX, setSizeX] = useState(0);
    const [sizeY, setSizeY] = useState(0);

    const handleXLength = (event) => {
        setSizeX(event.currentTarget.value)
    }
    const handleYLength = (event) => {
        setSizeY(event.currentTarget.value)
    }
    const saveGame = () => {
        createGame({playerId, 
            size: {
                x: sizeX, 
                y: sizeY
            }})
    }

    return (
        <div>
            <h2>Game settings</h2>
            <label htmlFor="xSize">Länge X auswählen:</label>
            <input type="number" name="xSize" id="xSize" value={sizeX} onChange={handleXLength} />
            <label htmlFor="ySize">Länge Y auswählen</label>
            <input type="number" name="ySize" id="ySize" value={sizeY} onChange={handleYLength} />

            <Button handleClick={saveGame} title="save Game" />
        </div>
    )
}

export default GameSettings
