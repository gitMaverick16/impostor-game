import { useState } from "react";
import "./PlayerCountSetup.css";

interface PlayerCountSetupProps {
  onConfirm: (count: number) => void;
}

export default function PlayerCountSetup({ onConfirm }: PlayerCountSetupProps) {
  const [playerCount, setPlayerCount] = useState(3);

  const handleIncrement = () => {
    setPlayerCount((prev) => Math.min(prev + 1, 10));
  };

  const handleDecrement = () => {
    setPlayerCount((prev) => Math.max(prev - 1, 3));
  };

  return (
    <div className="player-count-setup">
      <h2>👥 ¿Cuántos jugadores?</h2>
      <p className="subtitle">Mínimo 3 jugadores</p>

      <div className="counter-container">
        <button
          className="counter-btn"
          onClick={handleDecrement}
          disabled={playerCount <= 3}
        >
          −
        </button>
        <div className="counter-display">{playerCount}</div>
        <button
          className="counter-btn"
          onClick={handleIncrement}
          disabled={playerCount >= 10}
        >
          +
        </button>
      </div>

      <button
        className="confirm-btn"
        onClick={() => onConfirm(playerCount)}
      >
        Confirmar
      </button>
    </div>
  );
}
