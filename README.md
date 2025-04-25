# GameRate - Catálogo de Videojuegos

Proyecto para el curso de React Avanzado donde he creado una aplicación para gestionar un catálogo de videojuegos. Los usuarios pueden ver, añadir, valorar y marcar como favoritos diferentes videojuegos.

## Características

- Listado de videojuegos con información detallada
- Posibilidad de marcar juegos como favoritos
- Sistema de puntuación con estrellas
- Formulario para añadir nuevos juegos
- Vista dedicada para juegos favoritos
- Diseño totalmente responsive

## Tecnologías utilizadas

- React 19
- React Router
- Context API para la gestión del estado
- Hooks avanzados (useReducer, useCallback, useMemo)
- CSS puro

## Estructura del proyecto

- `src/components`: Componentes reutilizables (GameCard, Navbar, StarRating)
- `src/pages`: Páginas principales (GamesPage, FavoritesPage, FormPage)
- `src/context`: Contexto para la gestión del estado global
- `src/reducers`: Reducer para las acciones del estado
- `src/hooks`: Hooks personalizados (useGames, useForm)

## Cómo ejecutar el proyecto

1. Clona el repositorio
2. Instala las dependencias:
```
npm install
```
3. Inicia el servidor de desarrollo:
```
npm run dev
```
4. Abre http://localhost:5173 en tu navegador

## Lo que he aprendido

Durante este proyecto he aprendido:
- Cómo optimizar el rendimiento con React
- A prevenir renderizaciones innecesarias
- A gestionar el estado de manera eficiente con useReducer
- A crear hooks personalizados
- A implementar formularios con validación

## Mejoras futuras

- Añadir persistencia de datos con localStorage
- Implementar filtrado y búsqueda de juegos
- Añadir página de detalle para cada juego 