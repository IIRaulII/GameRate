import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <section className="not-found-page">
      <div className="container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">Página no encontrada</h2>
          <p className="not-found-message">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
          <Link to="/juegos" className="not-found-link">
            Volver a la página principal
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage; 