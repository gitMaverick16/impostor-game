import { categories } from "../data/words";
import "./CategorySelect.css";

interface CategorySelectProps {
  onSelect: (category: string) => void;
}

export default function CategorySelect({ onSelect }: CategorySelectProps) {
  return (
    <div className="category-select">
      <h2>📂 Elige una categoría</h2>
      <p className="subtitle">Selecciona el tema para la palabra secreta</p>

      <div className="categories-grid">
        {categories.map((category) => (
          <button
            key={category.name}
            className="category-card"
            onClick={() => onSelect(category.name)}
          >
            <div className="category-icon">
              {category.name === "Deportes" && "⚽"}
              {category.name === "Famosos" && "⭐"}
              {category.name === "Lugares" && "🌍"}
              {category.name === "Fiesta" && "🎉"}
              {category.name === "Jugadores de Fútbol" && "👟"}
              {category.name === "Películas" && "🎬"}
            </div>
            <div className="category-name">{category.name}</div>
            <div className="category-count">{category.words.length} palabras</div>
          </button>
        ))}
      </div>
    </div>
  );
}
