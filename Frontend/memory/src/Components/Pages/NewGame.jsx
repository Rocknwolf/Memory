import {useContext} from 'react'
import PlayerSettings from '../PlayerSettings.jsx';
import GameSettings from '../GameSettings.jsx';
import Button from '../Button.jsx';
import { GameContext } from '../../Context/GameContext.jsx';
import GameOptions from '../GameOptions.jsx';

function NewGame() {
    const {startNewGame} = useContext(GameContext);
    
    return (
        <div className='newGameComponent'>
            <h1>New Game</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas possimus similique aliquid atque odit nostrum distinctio soluta numquam ducimus a dolor quis ea id iure reiciendis corporis, quae consequuntur alias.</p>
            <PlayerSettings/>
            <GameSettings/>
            <Button handleClick={startNewGame} title="start game" />

            <h2>Game Options:</h2>
            <GameOptions/>
        </div>
    )
}

export default NewGame
