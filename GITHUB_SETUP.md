# 📤 Instrucciones para subir a GitHub

## Opción 1: Usando GitHub CLI (recomendado)

Si tienes GitHub CLI instalado, ejecuta:

```bash
gh repo create impostor-game --public --source=. --remote=origin --push
```

## Opción 2: Crear repositorio manualmente

1. Ve a [GitHub](https://github.com/new) y crea un nuevo repositorio
2. Nombre sugerido: `impostor-game`
3. **NO** inicialices con README, .gitignore o licencia (ya los tenemos)
4. Copia la URL del repositorio (ej: `https://github.com/tu-usuario/impostor-game.git`)

Luego ejecuta estos comandos:

```bash
git remote add origin https://github.com/tu-usuario/impostor-game.git
git branch -M main
git push -u origin main
```

## Verificación

Después de subir, verifica que todo esté correcto:

```bash
git remote -v
git status
```
