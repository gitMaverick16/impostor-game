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
  const [showWord, setShowWord] = useState(false);

  useEffect(() => {
    setShowWord(false);
    setShowContent(false);
    // Pequeño delay para crear efecto de revelación
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [playerNumber]);

  return (
    <div className="reveal-screen">
      <div className="player-indicator">
        Jugador {playerNumber} de {totalPlayers}
      </div>

      <div className={`reveal-content ${showContent ? "visible" : ""}`}>
        {isImpostor ? (
          <>
            {showWord ? (
              <>
                <div className="impostor-icon">🕵️</div>
                <h1 className="impostor-title">¡ERES EL IMPOSTOR!</h1>
                <h1 className="secret-word">SIN PALABRA</h1>
                <p className="impostor-message">
                  No conoces la palabra secreta. Tu objetivo es mezclarte sin
                  delatarte.
                </p>
              </>
            ) : (
              <>
                <div className="word-icon">🔍</div>
                <h1 className="secret-word hidden-word">
                  {secretWord.split("").map(() => "█").join("")}
                </h1>
                <button className="show-word-btn" onClick={() => setShowWord(true)}>
                  Mostrar palabra
                </button>
              </>
            )}
          </>
        ) : (
          <>
            <div className="word-icon">🔍</div>
            <h1 className={`secret-word ${showWord ? "" : "hidden-word"}`}>
              {showWord ? secretWord : secretWord.split("").map(() => "█").join("")}
            </h1>
            {!showWord && (
              <button className="show-word-btn" onClick={() => setShowWord(true)}>
                Mostrar palabra
              </button>
            )}
            {showWord && (
              <p className="word-message">
                Esta es tu palabra secreta. No la reveles a nadie.
              </p>
            )}
          </>
        )}
      </div>

      <button className="next-btn" onClick={onNext}>
        {playerNumber < totalPlayers ? "Pasar al siguiente" : "Comenzar juego"}
      </button>
    </div>
  );
}
