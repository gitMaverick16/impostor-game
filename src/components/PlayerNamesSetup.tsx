import { useState } from "react";
import "./PlayerNamesSetup.css";

interface PlayerNamesSetupProps {
  playerCount: number;
  onConfirm: (names: string[]) => void;
}

export default function PlayerNamesSetup({ playerCount, onConfirm }: PlayerNamesSetupProps) {
  const [playerNames, setPlayerNames] = useState<string[]>(
    Array(playerCount).fill("")
  );

  const handleNameChange = (index: number, value: string) => {
    const newNames = [...playerNames];
    newNames[index] = value;
    setPlayerNames(newNames);
  };

  const handleConfirm = () => {
    // Solo confirmar si todos los nombres están completados
    if (allNamesFilled) {
      onConfirm(playerNames.map(name => name.trim()));
    }
  };

  const allNamesFilled = playerNames.every(name => name.trim().length > 0);

  return (
    <div className="player-names-setup">
      <h2>👤 Ingresa los nombres de los jugadores</h2>
      <p className="subtitle">Cada jugador debe tener un nombre único</p>

      <div className="names-container">
        {playerNames.map((name, index) => (
          <div key={index} className="name-input-wrapper">
            <label className="name-label">Jugador {index + 1}</label>
            <input
              type="text"
              className="name-input"
              value={name}
              onChange={(e) => handleNameChange(index, e.target.value)}
              placeholder={`Jugador ${index + 1}`}
              maxLength={20}
            />
          </div>
        ))}
      </div>

      <button
        className="confirm-btn"
        onClick={handleConfirm}
        disabled={!allNamesFilled}
      >
        Confirmar nombres
      </button>
    </div>
  );
}
