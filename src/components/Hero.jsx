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
        className="carousel slide"
        data-bs-ride="carousel"
        aria-label="Promociones destacadas"
      >
        <div className="carousel-inner">
          <div
            className="carousel-item active"
             style={{ '--img': "url('https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1400&auto=format&fit=crop')" }}
          >
            <div className="container-xl h-100 d-flex align-items-center">
              <div className="hero-content">
                <h1 className="hero-title">Descubre tu próximo gadget</h1>
                <p className="hero-subtitle">
                  Tecnología premium con envíos ultrarrápidos y precios irresistibles.
                </p>
                <a
                  href="#mas-vendidos"
                  className="btn btn-light btn-lg rounded-pill px-4"
                >
                  Ver productos
                </a>
              </div>
            </div>
          </div>

          <div
            className="carousel-item"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1600&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '500px'
            }}
          >
            <div className="container-xl h-100 d-flex align-items-center">
              <div className="hero-content">
                <h1 className="hero-title">Lecturas que inspiran</h1>
                <p className="hero-subtitle">Novedades y clásicos con descuentos por tiempo limitado.</p>
                <a
                  href="#mas-vendidos"
                  className="btn btn-light btn-lg rounded-pill px-4"
                >
                  Explorar
                </a>
              </div>
            </div>
          </div>

          <div
            className="carousel-item"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1600&auto=format&fit=crop')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '500px'
            }}
          >
            <div className="container-xl h-100 d-flex align-items-center">
              <div className="hero-content">
                <h1 className="hero-title">Audio premium</h1>
                <p className="hero-subtitle">
                  Sumérgete en la mejor calidad de sonido
                </p>
                <a
                  href="#mas-vendidos"
                  className="btn btn-light btn-lg rounded-pill px-4"
                >
                  Comprar ahora
                </a>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </header>
  );
};

export default Hero;
