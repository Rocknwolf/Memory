import {useContext} from 'react'
import {GameContext} from '../../Context/GameContext.jsx'

import Win from './Win.jsx'
import Lose from './Lose.jsx'
import Button from '../Button.jsx'
import {getPlayer, createPlayer, getGame, joinGame, createGame} from '../../Lib/Api.js'

function GameOver() {
    const {won, toggleWinner} = useContext(GameContext);

    const handleApi1 = async () => {
        const player1 = await getPlayer(454534534354);
        console.log(player1);
    }
    const handleApi2 = async () => {
        const player2 = await createPlayer({name: "Gorden Shumway", avatar: "www.google.de"});
        console.log(player2);
    }
    const handleApi3 = async () => {
        const player3 = await getGame(666666666);
        console.log(player3);
    }
    const handleApi4 = async () => {
        const player4 = await joinGame({playerId: 5555555, gameId: 99999999});
        console.log(player4);
    }
    const handleApi5 = async () => {
        const player5 = await createGame({playerId: 5555555, sizeX: 4, sizeY: 5});
        console.log(player5);
    }
    return (
        <div>
            {won && <h1>TEST</h1>}
            { won ? <Win/> : <Lose/> }
            
            <Button handleClick={handleApi1} title="get player"></Button>
            <Button handleClick={handleApi2} title="create player"></Button>
            <Button handleClick={handleApi3} title="get game"></Button>
            <Button handleClick={handleApi4} title="join game"></Button>
            <Button handleClick={handleApi5} title="create game"></Button>
        </div>
    )
}

export default GameOver
