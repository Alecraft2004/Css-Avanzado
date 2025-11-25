import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const OffersPage = () => {
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
    },
    {
      id: 13,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=800&auto=format&fit=crop',
      title: 'Laptop Gaming 15.6"',
      price: '3299.90',
      discount: '3999.90',
      badge: 'OFERTA'
    },
    {
      id: 14,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
      title: 'MacBook Pro 13"',
      price: '4499.90',
      discount: '4999.90',
      badge: 'OFERTA'
    },
    {
      id: 15,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
      title: 'iPhone 14 Pro 256GB',
      price: '3799.90',
      discount: '4299.90',
      badge: 'OFERTA'
    },
    {
      id: 16,
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop',
      title: 'Samsung Galaxy S23',
      price: '2999.90',
      discount: '3499.90',
      badge: 'OFERTA'
    }
  ];

  return (
    <>
      <TopBar />
      <Navbar />
      
      <div className="py-5 bg-light" style={{ minHeight: '100vh' }}>
        <div className="container-xl">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3">
              <i className="bi bi-tag-fill text-danger me-3"></i>
              Ofertas especiales
            </h1>
            <p className="lead text-muted">
              Encuentra los mejores descuentos en productos seleccionados
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
              <button className="btn btn-outline-primary rounded-pill">Todas</button>
              <button className="btn btn-outline-primary rounded-pill">Electrónica</button>
              <button className="btn btn-outline-primary rounded-pill">Moda</button>
              <button className="btn btn-outline-primary rounded-pill">Deportes</button>
              <button className="btn btn-outline-primary rounded-pill">Hogar</button>
            </div>
          </div>

          <div className="row g-4 mb-5">
            {offerProducts.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-3">
                <ProductCard
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  discount={product.discount}
                  badge={product.badge}
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="btn btn-primary btn-lg rounded-pill px-5">
              Cargar más ofertas
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default OffersPage;
