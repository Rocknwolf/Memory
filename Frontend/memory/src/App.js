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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
