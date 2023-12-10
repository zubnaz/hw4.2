import logo from './logo.svg';
import './App.css';
import GameField from './GameField/game-field';
import GameLogo from './GameLogo/game-logo';

function App() {
  return (
    <div className="App">
      <GameLogo />
      <GameField />
    </div>
  );
}

export default App;
