import { useState } from "react";
import PlayerCountSetup from "./components/PlayerCountSetup";
import CategorySelect from "./components/CategorySelect";
import RevealScreen from "./components/RevealScreen";
import StartGameScreen from "./components/StartGameScreen";
import { getRandomWord } from "./data/words";
import "./App.css";

type GameState =
  | "playerCount"
  | "category"
  | "reveal"
  | "game";

export default function App() {
  const [gameState, setGameState] = useState<GameState>("playerCount");
  const [playerCount, setPlayerCount] = useState(0);
  const [category, setCategory] = useState("");
  const [secretWord, setSecretWord] = useState("");
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [impostorIndex, setImpostorIndex] = useState(-1);

  const handlePlayerCountConfirm = (count: number) => {
    setPlayerCount(count);
    setGameState("category");
  };

  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory);
    const word = getRandomWord(selectedCategory);
    setSecretWord(word);
    
    // Seleccionar aleatoriamente quién será el impostor
    const randomImpostor = Math.floor(Math.random() * playerCount) + 1;
    setImpostorIndex(randomImpostor);
    
    setCurrentPlayer(1);
    setGameState("reveal");
  };

  const handleRevealNext = () => {
    if (currentPlayer < playerCount) {
      setCurrentPlayer(currentPlayer + 1);
    } else {
      setGameState("game");
    }
  };

  const handleRestart = () => {
    setGameState("playerCount");
    setPlayerCount(0);
    setCategory("");
    setSecretWord("");
    setCurrentPlayer(1);
    setImpostorIndex(-1);
  };

  return (
    <div className="app">
      {gameState === "playerCount" && (
        <PlayerCountSetup onConfirm={handlePlayerCountConfirm} />
      )}

      {gameState === "category" && (
        <CategorySelect onSelect={handleCategorySelect} />
      )}

      {gameState === "reveal" && (
        <RevealScreen
          playerNumber={currentPlayer}
          totalPlayers={playerCount}
          isImpostor={currentPlayer === impostorIndex}
          secretWord={secretWord}
          onNext={handleRevealNext}
        />
      )}

      {gameState === "game" && (
        <StartGameScreen
          secretWord={secretWord}
          totalPlayers={playerCount}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
