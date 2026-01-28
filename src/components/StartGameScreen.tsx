import { useState } from "react";
import "./StartGameScreen.css";

interface StartGameScreenProps {
  secretWord: string;
  totalPlayers: number;
  onRestart: () => void;
}

export default function StartGameScreen({
  secretWord,
  totalPlayers,
  onRestart,
}: StartGameScreenProps) {
  const [showWord, setShowWord] = useState(false);

  const hiddenWord = secretWord.split("").map(() => "█").join("");

  return (
    <div className="start-game-screen">
      <h1>🎮 ¡Comienza el juego!</h1>

      <div className="instructions">
        <h2>Instrucciones:</h2>
        <ol>
          <li>
            Cada jugador debe decir una palabra relacionada con la palabra
            secreta
          </li>
          <li>
            Los jugadores reales conocen la palabra secreta:{" "}
            <strong className={showWord ? "" : "hidden-word-text"}>
              {showWord ? secretWord : hiddenWord}
            </strong>
          </li>
          <li>
            El impostor NO conoce la palabra y debe mezclarse sin delatarse
          </li>
          <li>
            Después de las pistas, intenten descubrir quién es el impostor
          </li>
        </ol>
      </div>

      <div className="game-info">
        <div className="info-card">
          <div className="info-label">Jugadores</div>
          <div className="info-value">{totalPlayers}</div>
        </div>
        <div className="info-card">
          <div className="info-label">Palabra secreta</div>
          <div className={`info-value ${showWord ? "" : "hidden-word-text"}`}>
            {showWord ? secretWord : hiddenWord}
          </div>
          {!showWord && (
            <button className="show-word-btn-small" onClick={() => setShowWord(true)}>
              Mostrar palabra
            </button>
          )}
        </div>
      </div>

      <button className="restart-btn" onClick={onRestart}>
        Nueva partida
      </button>
    </div>
  );
}
