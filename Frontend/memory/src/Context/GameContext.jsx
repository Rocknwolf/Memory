import {createContext, useState} from 'react'
import { createPlayer, createGame } from '../Lib/Api';
import { useHistory } from 'react-router-dom';
export const GameContext = createContext(null);

// Gedanken machen, wie man Spielzug bestimmt. Implementieren: Karte nich anklickbar wenn du nich  dran bist, state im contex

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

    const [size, setSize] = useState({x: 6, y: 4}); 
    const [playerId, setPlayerId] = useState(null);
    const [gameId, setGameId] = useState(null);

    const [drawnCards, setDrawnCards]  = useState([]);

    const [draw, setDraw] = useState(true);

    const history = useHistory();

    const startNewGame = async () => {
        const newPlayer = await createPlayer({name, avatar});
        setPlayerId(newPlayer.id);
        const newGame = await createGame({playerId: newPlayer.id, size});
        setGameId(newGame.id);
        history.push(`/game/${newGame.id}`);
    };

    const handleDrawCard = (cardIndex) => {
        if(drawnCards.includes(cardIndex)) return;
        if(drawnCards.length >= 2) return;
        setDrawnCards([...drawnCards, cardIndex]);
        if(drawnCards.length >= 1){
            console.log([...drawnCards, cardIndex]);
            setTimeout(_resetDrawnCards, 3000);
            switchDraw();
        }
    };
    const switchDraw = () => {
        setDraw(!draw);
    };

    const _resetDrawnCards = () => setDrawnCards([]);

    return (
        <GameContext.Provider value={{
            name,
            setName,
            size,
            setSize,
            avatar,
            setAvatar,
            startNewGame,
            playerId,
            gameId,
            drawnCards,
            handleDrawCard,
        }}>
        <h2>icke datt context</h2>
          {children}  
        </GameContext.Provider>
    )
}

export default GameProvider
                
