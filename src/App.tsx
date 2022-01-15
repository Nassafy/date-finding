import "./App.css";
import Game from "./components/Game";
import { GameProvider } from "./components/GameState";

function App() {
  return (
    <div className="App">
      <GameProvider>
        <Game />
      </GameProvider>
    </div>
  );
}

export default App;
