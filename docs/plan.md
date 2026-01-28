# 🕵️ Juego Web tipo "Impostor" – Plan de Implementación (MVP)

## 📌 Objetivo
Construir una **aplicación web** que permita jugar un juego social tipo *Impostor*, usando **un solo dispositivo** (celular o PC), donde:
- Todos los jugadores comparten una palabra secreta
- Uno de ellos es el impostor y no conoce la palabra
- La app solo gestiona la lógica y el flujo, el juego ocurre en la vida real

El MVP será **100% frontend**, sin backend.

---

## 🧱 Stack Tecnológico
- **Frontend:** React
- **Bundler:** Vite
- **Lenguaje:** JavaScript o TypeScript
- **Estilos:** CSS simple o Tailwind
- **Hosting:** Vercel
- **Estado:** En memoria del navegador (no persistente)

---

## 🌐 Plataforma
- Aplicación web
- Compatible con:
  - Navegador móvil
  - Navegador de escritorio
- No requiere login ni cuentas

---

## 🧠 Conceptos Clave del Juego

### Reglas básicas
- Mínimo 3 jugadores
- Se selecciona una categoría
- Se elige una palabra secreta
- Un jugador es asignado como **impostor**
- Cada jugador ve su rol **de forma privada**
- Luego comienza la ronda hablada entre los jugadores

---

## 🗂️ Estructura de Carpetas Sugerida

```txt
src/
 ├── components/
 │    ├── PlayerCountSetup.tsx
 │    ├── CategorySelect.tsx
 │    ├── RevealScreen.tsx
 │    ├── StartGameScreen.tsx
 │
 ├── data/
 │    └── words.ts
 │
 ├── game/
 │    └── gameReducer.ts
 │
 ├── App.tsx
 └── main.tsx
