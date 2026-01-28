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
            <strong>{secretWord}</strong>
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
          <div className="info-value">{secretWord}</div>
        </div>
      </div>

      <button className="restart-btn" onClick={onRestart}>
        Nueva partida
      </button>
    </div>
  );
}
