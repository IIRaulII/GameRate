// Tipos de acciones
export const GAME_ACTIONS = {
  ADD_GAME: 'add_game',
  TOGGLE_FAVORITE: 'toggle_favorite',
  RATE_GAME: 'rate_game',
  DELETE_GAME: 'delete_game'
};

// Estado inicial con algunos juegos de ejemplo
export const initialState = {
  games: [
    {
      id: '1',
      nombre: 'The last of us',
      descripcion: 'Un juego de supervivencia en un mundo post-apocalíptico.',
      genero: 'Acción',
      precio: 59.99,
      plataforma: 'PS5',
      imagen: 'https://media.game.es/COVERV2/3D_L/205/205516.png',
      puntuacion: 5,
      favorito: true
    },
    {
      id: '2',
      nombre: 'Red Dead Redemption 2',
      descripcion: 'Un épico western ambientado en el salvaje oeste americano donde Arthur Morgan lucha por sobrevivir.',
      genero: 'Acción',
      precio: 49.99,
      plataforma: 'PS4',
      imagen: 'https://media.game.es/COVERV2/3D_L/221/221839.png',
      puntuacion: 4,
      favorito: false
    },
    {
      id: '3',
      nombre: 'The Witcher 3: Wild Hunt',
      descripcion: 'Un juego de rol con una historia épica y un mundo abierto.',
      genero: 'RPG',
      precio: 39.99,
      plataforma: 'PS5',
      imagen: 'https://media.game.es/COVERV2/3D_L/212/212915.png',
      puntuacion: 5,
      favorito: true
    }
  ]
};

// Reducer
export const gameReducer = (state, action) => {
  switch (action.type) {
    case GAME_ACTIONS.ADD_GAME:
      return {
        ...state,
        games: [...state.games, action.payload]
      };
      
    case GAME_ACTIONS.TOGGLE_FAVORITE:
      return {
        ...state,
        games: state.games.map(game => 
          game.id === action.payload
            ? { ...game, favorito: !game.favorito }
            : game
        )
      };
      
    case GAME_ACTIONS.RATE_GAME:
      const { gameId, rating } = action.payload;
      return {
        ...state,
        games: state.games.map(game => 
          game.id === gameId
            ? { ...game, puntuacion: rating }
            : game
        )
      };
      
    case GAME_ACTIONS.DELETE_GAME:
      return {
        ...state,
        games: state.games.filter(game => game.id !== action.payload)
      };
      
    default:
      return state;
  }
}; 