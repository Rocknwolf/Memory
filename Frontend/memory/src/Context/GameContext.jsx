import {createContext, useState} from 'react'
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
        }}>
        <h2>icke datt context</h2>
          {children}  
        </GameContext.Provider>
    )
}

export default GameProvider
                
