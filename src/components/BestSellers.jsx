import { useState } from 'react';
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

/**
 * Componente BestSellers
 * ----------------------
 * Muestra una sección de "Los más vendidos" en la página de inicio.
 * Implementa un carrusel personalizado para navegar entre los productos destacados.
 */
const BestSellers = ({ products = [] }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Si no hay productos, no mostramos nada o mostramos un esqueleto
  if (!products || products.length === 0) return null;

  // Dividimos los productos en chunks de 4 para el carrusel
  const chunkSize = 4;
  const slides = [];
  for (let i = 0; i < products.length; i += chunkSize) {
    slides.push(products.slice(i, i + chunkSize));
  }

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="container-xl">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h3 className="section-title m-0">Más vendidos de la semana</h3>
          <Link className="link-primary" to="/buscar">Ver más</Link>
        </div>

        <div className="custom-carousel-wrapper">
          <div className="custom-carousel">
            {slides.map((slideProducts, slideIndex) => (
              <div
                key={slideIndex}
                className={`custom-carousel-slide ${slideIndex === activeSlide ? 'active' : ''}`}
                style={{ display: slideIndex === activeSlide ? 'block' : 'none' }}
              >
                <div className="row g-4">
                  {slideProducts.map((product) => (
                    <div key={product.id} className="col-6 col-md-3">
                      <ProductCard 
                        id={product.id}
                        image={product.imagenPrincipal || product.image}
                        title={product.titulo || product.title}
                        price={product.precio || product.price}
                        discount={product.precio_original || product.discount}
                        badge={product.badge}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
            
          {slides.length > 1 && (
            <>
              <button 
                className="custom-carousel-control custom-carousel-prev" 
                onClick={prevSlide}
                aria-label="Anterior"
              >
                <i className="bi bi-chevron-left"></i>
              </button>
              
              <button 
                className="custom-carousel-control custom-carousel-next" 
                onClick={nextSlide}
                aria-label="Siguiente"
              >
                <i className="bi bi-chevron-right"></i>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
