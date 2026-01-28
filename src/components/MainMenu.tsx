import "./MainMenu.css";

interface MainMenuProps {
  onStartGame: () => void;
}

export default function MainMenu({ onStartGame }: MainMenuProps) {
  return (
    <div className="main-menu">
      <div className="menu-content">
        <div className="title-container">
          <span className="emoji-icon">🕵️</span>
          <h1 className="main-title">Impostor</h1>
        </div>
        <p className="menu-subtitle">Juego social de deducción</p>

        <button className="start-btn" onClick={onStartGame}>
          <span className="btn-text">Nueva partida</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>
    </div>
  );
}
