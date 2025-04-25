import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import FormPage from './pages/FormPage';
import GamesPage from './pages/GamesPage';
import FavoritesPage from './pages/FavoritesPage';
import NotFoundPage from './pages/NotFoundPage';
import GameProvider from './context/GameContext';
import './styles/global.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <GameProvider>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/juegos" element={<GamesPage />} />
              <Route path="/favoritos" element={<FavoritesPage />} />
              <Route path="/formulario" element={<FormPage />} />
              <Route path="/" element={<Navigate to="/juegos" replace />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <footer className="app-footer">
            <div className="container">
              <p>&copy; {new Date().getFullYear()} GameRate - Catálogo de Videojuegos</p>
      </div>
          </footer>
      </div>
      </GameProvider>
    </BrowserRouter>
  );
}

export default App;
