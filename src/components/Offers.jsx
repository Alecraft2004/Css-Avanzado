import ProductCard from './ProductCard';

/**
 * Componente Offers
 * -----------------
 * Muestra una cuadrícula (grid) con productos en oferta en la página de inicio.
 * Es una vista rápida de descuentos destacados.
 */
const Offers = () => {
  const offerProducts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
      title: 'Auriculares Premium',
      price: '149.90',
      discount: '199.90',
      badge: 'OFERTA'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop',
      title: 'Smartwatch Fitness',
      price: '299.90',
      discount: '399.90',
      badge: 'OFERTA'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop',
      title: 'Gafas de Sol Polarizadas',
      price: '79.90',
      discount: '129.90',
      badge: 'OFERTA'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=800&auto=format&fit=crop',
      title: 'Zapatillas Deportivas',
      price: '189.90',
      discount: '249.90',
      badge: 'OFERTA'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
      title: 'Laptop Ultrabook 14"',
      price: '2499.90',
      discount: '2999.90',
      badge: 'OFERTA'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop',
      title: 'Mouse Gaming RGB',
      price: '89.90',
      discount: '119.90',
      badge: 'OFERTA'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop',
      title: 'Teclado Mecánico',
      price: '199.90',
      discount: '279.90',
      badge: 'OFERTA'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop',
      title: 'Cámara Web 4K',
      price: '159.90',
      discount: '219.90',
      badge: 'OFERTA'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1625758452550-97b4f3c0c3bb?q=80&w=800&auto=format&fit=crop',
      title: 'Monitor LED 24" Full HD',
      price: '449.90',
      discount: '599.90',
      badge: 'OFERTA'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1572635196243-4dd75fbdbd7f?q=80&w=800&auto=format&fit=crop',
      title: 'Mochila Anti-robo USB',
      price: '99.90',
      discount: '149.90',
      badge: 'OFERTA'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=800&auto=format&fit=crop',
      title: 'Tablet 10" 128GB',
      price: '699.90',
      discount: '899.90',
      badge: 'OFERTA'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1572635196184-84e35138cf62?q=80&w=800&auto=format&fit=crop',
      title: 'Parlante Bluetooth 360°',
      price: '129.90',
      discount: '179.90',
      badge: 'OFERTA'
    }
  ];

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
          {offerProducts.map((product) => (
            <div key={product.id} className="col-6 col-md-4 col-lg-3">
              <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                discount={product.discount}
                badge={product.badge}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="btn btn-primary btn-lg rounded-pill px-5">
            Ver todas las ofertas
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
