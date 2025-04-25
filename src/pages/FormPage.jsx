import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../hooks/useForm';
import useGames from '../hooks/useGames';
import './FormPage.css';

const FormPage = () => {
  const navigate = useNavigate();
  const { addGame } = useGames();
  
  const initialValues = {
    nombre: '',
    descripcion: '',
    genero: '',
    precio: '',
    plataforma: '',
    imagen: ''
  };
  
  const validationRules = {
    nombre: { required: true },
    descripcion: { required: true },
    genero: { required: true },
    precio: { required: true, min: 0 },
    plataforma: { required: true },
    imagen: { required: true, isUrl: true, isImageUrl: true }
  };
  
  const { 
    formValues, 
    errors, 
    touched,
    handleChange, 
    handleSubmit,
    resetForm
  } = useForm(initialValues, validationRules);
  
  const onSubmit = useCallback((data) => {
    // Convertir precio a número
    const gameData = {
      ...data,
      precio: parseFloat(data.precio)
    };
    
    addGame(gameData);
    resetForm();
    navigate('/juegos');
  }, [addGame, navigate, resetForm]);
  
  return (
    <section className="form-page">
      <div className="container">
        <h2 className="form-title">Añadir Nuevo Videojuego</h2>
        
        <form className="game-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre del juego</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formValues.nombre}
              onChange={handleChange}
              className={errors.nombre && touched.nombre ? 'input-error' : ''}
            />
            {errors.nombre && touched.nombre && (
              <span className="error-message">{errors.nombre}</span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea
              id="descripcion"
              name="descripcion"
              value={formValues.descripcion}
              onChange={handleChange}
              className={errors.descripcion && touched.descripcion ? 'input-error' : ''}
            ></textarea>
            {errors.descripcion && touched.descripcion && (
              <span className="error-message">{errors.descripcion}</span>
            )}
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="genero">Género</label>
              <select
                id="genero"
                name="genero"
                value={formValues.genero}
                onChange={handleChange}
                className={errors.genero && touched.genero ? 'input-error' : ''}
              >
                <option value="">Selecciona un género</option>
                <option value="Acción">Acción</option>
                <option value="Aventura">Aventura</option>
                <option value="RPG">RPG</option>
                <option value="Estrategia">Estrategia</option>
                <option value="Deportes">Deportes</option>
                <option value="Simulación">Simulación</option>
                <option value="Carreras">Carreras</option>
                <option value="Shooter">Shooter</option>
              </select>
              {errors.genero && touched.genero && (
                <span className="error-message">{errors.genero}</span>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="plataforma">Plataforma</label>
              <select
                id="plataforma"
                name="plataforma"
                value={formValues.plataforma}
                onChange={handleChange}
                className={errors.plataforma && touched.plataforma ? 'input-error' : ''}
              >
                <option value="">Selecciona una plataforma</option>
                <option value="PC">PC</option>
                <option value="PS5">PS5</option>
                <option value="PS4">PS4</option>
                <option value="Xbox Series X/S">Xbox Series X/S</option>
                <option value="Xbox One">Xbox One</option>
                <option value="Nintendo Switch">Nintendo Switch</option>
                <option value="Móvil">Móvil</option>
              </select>
              {errors.plataforma && touched.plataforma && (
                <span className="error-message">{errors.plataforma}</span>
              )}
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="precio">Precio (€)</label>
            <input
              type="number"
              id="precio"
              name="precio"
              value={formValues.precio}
              onChange={handleChange}
              min="0"
              step="0.01"
              className={errors.precio && touched.precio ? 'input-error' : ''}
            />
            {errors.precio && touched.precio && (
              <span className="error-message">{errors.precio}</span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="imagen">URL de la imagen</label>
            <input
              type="url"
              id="imagen"
              name="imagen"
              value={formValues.imagen}
              onChange={handleChange}
              placeholder="https://ejemplo.com/imagen.jpg"
              className={errors.imagen && touched.imagen ? 'input-error' : ''}
            />
            {errors.imagen && touched.imagen && (
              <span className="error-message">{errors.imagen}</span>
            )}
          </div>
          
          <div className="form-actions">
            <button type="button" onClick={resetForm} className="btn-secondary">
              Limpiar
            </button>
            <button type="submit" className="btn-primary">
              Añadir Juego
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormPage; 