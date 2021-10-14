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

function App() {
  return (
    <div className="App">
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
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
