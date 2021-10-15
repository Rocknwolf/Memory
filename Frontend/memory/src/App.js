import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Game from './Components/Pages/Game.jsx';
import Home from './Components/Pages/Home.jsx';
import JoinGame from './Components/Pages/JoinGame.jsx';
import NewGame from './Components/Pages/NewGame.jsx';
import PlayerSettings from './Components/PlayerSettings.jsx';
import Footer from './Components/Footer.jsx';
import GameOver from './Components/Pages/GameOver.jsx';
import GameProvider from './Context/GameContext.jsx';

function App() {
  return (
    <div className="App">
      <GameProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/game/:id">
              <Game />
            </Route>
            <Route path="/game/:id/join">
              <JoinGame />
            </Route>
            <Route path="/new-game">
              <NewGame />
            </Route>
            <Route path="/player-settings">
              <PlayerSettings />
            </Route>
            <Route path="/game-over">
              <GameOver />
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </GameProvider>
    </div>
  );
}

export default App;
