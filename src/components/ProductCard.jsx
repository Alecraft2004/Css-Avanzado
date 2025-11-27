import { useCart } from '../context/CartContext';
import { useState } from 'react';

/**
 * Componente ProductCard
 * ----------------------
 * Representa la tarjeta individual de un producto.
 * 
 * Muestra:
 * - Imagen del producto.
 * - Título y precio (incluyendo descuento si existe).
 * - Etiquetas (badges) como "Nuevo" o "Oferta".
 * - Botón para agregar al carrito con feedback visual (animación).
 */
const ProductCard = ({ id, image, title, price, discount, badge }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart({ id, image, title, price, discount, badge });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="card product h-100 border-0 shadow-sm">
      <img src={image} className="card-img-top" alt={title} loading="lazy" />
      <div className="card-body d-flex flex-column">
        <div className="d-flex align-items-center gap-2 mb-2">
          <h5 className="card-title mb-0">{title}</h5>
          {badge && <span className="product-badge-inline">{badge}</span>}
        </div>
        {discount && <p className="text-muted text-decoration-line-through small mb-1">S/ {discount}</p>}
        <p className="fs-4 fw-bold text-primary mb-3">S/ {price}</p>
        <button 
          className={`btn ${added ? 'btn-success' : 'btn-outline-primary'} rounded-pill mt-auto`}
          onClick={handleAddToCart}
          disabled={added}
        >
          {added ? (
            <>
              <i className="bi bi-check-circle me-2"></i>
              Agregado
            </>
          ) : (
            <>
              <i className="bi bi-cart-plus me-2"></i>
              Agregar al carrito
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
