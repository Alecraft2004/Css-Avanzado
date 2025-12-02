import { Link } from 'react-router-dom';

/**
 * Componente Hero
 * ---------------
 * Es el banner principal o "escaparate" de la página de inicio.
 * Utiliza un carrusel de Bootstrap para mostrar imágenes grandes
 * y llamativas con las promociones más importantes del momento.
 */
const Hero = () => {
  return (
    <header className="hero">
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
        aria-label="Promociones destacadas"
      >
        <div className="carousel-inner">
          {/* Slide 1: Tecnología */}
          <div className="carousel-item active">
            <img 
              src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1920&auto=format&fit=crop" 
              className="d-block w-100 h-100" 
              alt="Gadgets y Tecnología"
              style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
            />
            <div className="container h-100 d-flex align-items-center justify-content-center position-relative" style={{ zIndex: 2 }}>
              <div className="hero-content text-center text-white">
                <span className="badge bg-primary mb-3 px-3 py-2 rounded-pill text-uppercase shadow-sm" style={{ letterSpacing: '2px' }}>Novedades</span>
                <h1 className="hero-title display-3 fw-bolder mb-3">El Futuro en tus Manos</h1>
                <p className="hero-subtitle lead mb-4 px-md-5 opacity-75">
                  Descubre la última generación de gadgets con envíos ultrarrápidos.
                </p>
                <div className="d-flex gap-3 justify-content-center">
                  <Link to="/categoria/tecnologia" className="btn btn-light btn-lg rounded-pill px-5 fw-bold shadow-lg transform-hover">
                    Ver Colección
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2: Libros */}
          <div className="carousel-item">
            <img 
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1920&auto=format&fit=crop" 
              className="d-block w-100 h-100" 
              alt="Libros"
              style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
            />
            <div className="container h-100 d-flex align-items-center justify-content-center position-relative" style={{ zIndex: 2 }}>
              <div className="hero-content text-center text-white">
                <span className="badge bg-warning text-dark mb-3 px-3 py-2 rounded-pill text-uppercase shadow-sm" style={{ letterSpacing: '2px' }}>Oferta Especial</span>
                <h1 className="hero-title display-3 fw-bolder mb-3">Historias que Inspiran</h1>
                <p className="hero-subtitle lead mb-4 px-md-5 opacity-75">
                  Los best-sellers del momento con descuentos exclusivos.
                </p>
                <Link to="/categoria/libros" className="btn btn-light btn-lg rounded-pill px-5 fw-bold shadow-lg transform-hover">
                  Explorar Librería
                </Link>
              </div>
            </div>
          </div>

          {/* Slide 3: Audio */}
          <div className="carousel-item">
            <img 
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1920&auto=format&fit=crop" 
              className="d-block w-100 h-100" 
              alt="Audio Premium"
              style={{ objectFit: 'cover', position: 'absolute', top: 0, left: 0, zIndex: 0 }}
            />
            <div className="container h-100 d-flex align-items-center justify-content-center position-relative" style={{ zIndex: 2 }}>
              <div className="hero-content text-center text-white">
                <span className="badge bg-info text-dark mb-3 px-3 py-2 rounded-pill text-uppercase shadow-sm" style={{ letterSpacing: '2px' }}>Sonido Premium</span>
                <h1 className="hero-title display-3 fw-bolder mb-3">Siente la Música</h1>
                <p className="hero-subtitle lead mb-4 px-md-5 opacity-75">
                  Auriculares de alta fidelidad para una experiencia inmersiva.
                </p>
                <Link to="/categoria/tecnologia" className="btn btn-light btn-lg rounded-pill px-5 fw-bold shadow-lg transform-hover">
                  Comprar Ahora
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </header>
  );
};

export default Hero;
