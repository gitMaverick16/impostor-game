export interface WordCategory {
  name: string;
  words: string[];
}

export const categories: WordCategory[] = [
  {
    name: "Deportes",
    words: [
      "Messi",
      "Cristiano Ronaldo",
      "Pelé",
      "Maradona",
      "Fútbol",
      "Básquetbol",
      "Tenis",
      "Natación",
      "Ciclismo",
      "Boxeo",
      "Voleibol",
      "Rugby",
      "Golf",
      "Atletismo",
      "Hockey",
    ],
  },
  {
    name: "Famosos",
    words: [
      "Brad Pitt",
      "Leonardo DiCaprio",
      "Taylor Swift",
      "Beyoncé",
      "Elon Musk",
      "Oprah Winfrey",
      "Tom Cruise",
      "Jennifer Lawrence",
      "Will Smith",
      "Emma Watson",
      "Robert Downey Jr",
      "Scarlett Johansson",
      "Dwayne Johnson",
      "Adele",
      "Justin Bieber",
    ],
  },
  {
    name: "Lugares",
    words: [
      "París",
      "Tokio",
      "Nueva York",
      "Londres",
      "Roma",
      "Barcelona",
      "Buenos Aires",
      "Dubái",
      "Sídney",
      "Río de Janeiro",
      "Machu Picchu",
      "Torre Eiffel",
      "Gran Muralla China",
      "Estados Unidos",
      "España",
    ],
  },
  {
    name: "Fiesta",
    words: [
      "Cumpleaños",
      "Boda",
      "Graduación",
      "Año Nuevo",
      "Navidad",
      "Halloween",
      "Carnaval",
      "Despedida de soltero",
      "Baby Shower",
      "Fiesta de disfraces",
      "Fiesta temática",
      "Brindis",
      "Torta",
      "Globos",
      "Música",
    ],
  },
];

export function getRandomWord(categoryName: string): string {
  const category = categories.find((cat) => cat.name === categoryName);
  if (!category || category.words.length === 0) {
    return "Palabra";
  }
  const randomIndex = Math.floor(Math.random() * category.words.length);
  return category.words[randomIndex];
}
