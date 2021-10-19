import {useContext} from 'react'
import PlayerSettings from '../PlayerSettings.jsx';
import GameSettings from '../GameSettings.jsx';
import Button from '../Button.jsx';
import { GameContext } from '../../Context/GameContext.jsx';
import {createGame, createPlayer} from '../../Lib/Api.js';
import GameOptions from '../GameOptions.jsx';

function NewGame() {
    const {size, name, avatar} = useContext(GameContext);
    const playerId = 5555555;
    
    const handleClick = () => {
        createPlayer({name, avatar})
        createGame({playerId, size})
        console.log("Hallo DU da");
    }
    return (
        <div>
            <h1>New Game</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas possimus similique aliquid atque odit nostrum distinctio soluta numquam ducimus a dolor quis ea id iure reiciendis corporis, quae consequuntur alias.</p>
            <PlayerSettings/>
            <GameSettings/>
            <Button handleClick={handleClick} title="start game" />

            <h2>Game Options:</h2>
            <GameOptions/>
        </div>
    )
}

export default NewGame
