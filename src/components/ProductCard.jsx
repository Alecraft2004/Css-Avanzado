const ProductCard = ({ image, title, price, discount, badge }) => {
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
        <button className="btn btn-outline-primary rounded-pill mt-auto">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ProductCard;
