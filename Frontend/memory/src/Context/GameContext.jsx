import {createContext, useState} from 'react'
//Spieler anlegen und mit ein und dem selben Klick spiel erstellen
export const GameContext = createContext(null);

function GameProvider({children}) {
    const avatars = [
        "https://i.pravatar.cc/150?img=0", 
        "https://i.pravatar.cc/150?img=5", 
        "https://i.pravatar.cc/150?img=8", 
        "https://i.pravatar.cc/150?img=7", 
        "https://i.pravatar.cc/150?img=11", 
        "https://i.pravatar.cc/150?img=13", 
        "https://i.pravatar.cc/150?img=50", 
        "https://i.pravatar.cc/150?img=17"
    ];

    const [name, setName] = useState('Mickey');
    const [avatar, setAvatar] = useState(avatars[0]);

    const [won, setWon] = useState(true);
    const [size, setSize] = useState({x: 0, y: 0}); 

    const toggleWinner = () =>{
        setWon(!won);
}

    return (
        <GameContext.Provider value={{
            name,
            setName,
            won,
            toggleWinner,
            size,
            setSize,
            avatar,
            setAvatar
        }}>
        <h2>icke datt context</h2>
          {children}  
        </GameContext.Provider>
    )
}

export default GameProvider
                
