import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

/**
 * Componente Offers
 * -----------------
 * Muestra una cuadrícula (grid) con productos en oferta en la página de inicio.
 * Es una vista rápida de descuentos destacados.
 */
const Offers = ({ products = [] }) => {
  // Si no hay productos, no mostramos nada
  if (!products || products.length === 0) return null;

  return (
    <section id="ofertas" className="py-5 bg-light">
      <div className="container-xl">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">
            <i className="bi bi-tag-fill text-danger me-3"></i>
            Ofertas especiales
          </h2>
          <p className="lead text-muted">
            Aprovecha los mejores descuentos en productos seleccionados
          </p>
        </div>

        <div className="row g-4">
          {products.map((product) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-3">
              <ProductCard
                id={product.id}
                image={product.imagenPrincipal || product.image}
                title={product.titulo || product.title}
                price={product.precio || product.price}
                discount={product.precio_original || product.discount}
                badge={product.badge || 'OFERTA'}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/ofertas" className="btn btn-primary btn-lg rounded-pill px-5">
            Ver todas las ofertas
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Offers;
