import React from 'react'
import PlayerSettings from '../PlayerSettings.jsx';
import GameSettings from '../GameSettings.jsx';
import Button from '../Button.jsx';

function NewGame() {
    const handleClick = () =>{
        alert("Hallo DU da")
    }
    return (
        <div>
            <h1>New Game</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas possimus similique aliquid atque odit nostrum distinctio soluta numquam ducimus a dolor quis ea id iure reiciendis corporis, quae consequuntur alias.</p>
            <PlayerSettings/>
            <GameSettings/>
            <Button handleClick={handleClick} title="start game" />
        </div>
    )
}

export default NewGame
