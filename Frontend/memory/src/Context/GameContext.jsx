import {createContext, useState} from 'react'
import GameOptions from '../Components/GameOptions.jsx';

export const GameContext = createContext(null);

function GameProvider({children}) {
    const [username] = useState('Mickey');
    const [won, setWon] = useState(true);

    const toggleWinner = () =>{
        setWon(!won);
}

    return (
        <GameContext.Provider value={{
            username,
            won,
            toggleWinner,
            GameOptions,
        }}>
        <h2>icke datt context</h2>
          {children}  
        </GameContext.Provider>
    )
}

export default GameProvider
                
