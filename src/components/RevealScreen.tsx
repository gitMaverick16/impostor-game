import { useEffect, useState } from "react";
import "./RevealScreen.css";

interface RevealScreenProps {
  playerNumber: number;
  totalPlayers: number;
  isImpostor: boolean;
  secretWord: string;
  onNext: () => void;
}

export default function RevealScreen({
  playerNumber,
  totalPlayers,
  isImpostor,
  secretWord,
  onNext,
}: RevealScreenProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Pequeño delay para crear efecto de revelación
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="reveal-screen">
      <div className="player-indicator">
        Jugador {playerNumber} de {totalPlayers}
      </div>

      <div className={`reveal-content ${showContent ? "visible" : ""}`}>
        {isImpostor ? (
          <>
            <div className="impostor-icon">🕵️</div>
            <h1 className="impostor-title">¡ERES EL IMPOSTOR!</h1>
            <p className="impostor-message">
              No conozcas la palabra secreta. Tu objetivo es mezclarte sin
              delatarte.
            </p>
          </>
        ) : (
          <>
            <div className="word-icon">🔍</div>
            <h1 className="secret-word">{secretWord}</h1>
            <p className="word-message">
              Esta es tu palabra secreta. No la reveles a nadie.
            </p>
          </>
        )}
      </div>

      <button className="next-btn" onClick={onNext}>
        {playerNumber < totalPlayers ? "Pasar al siguiente" : "Comenzar juego"}
      </button>
    </div>
  );
}
