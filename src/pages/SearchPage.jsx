import { useSearchParams, Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

/**
 * Página de Búsqueda (SearchPage)
 * -------------------------------
 * Se encarga de mostrar los resultados cuando el usuario busca algo en el Navbar.
 * 
 * Funcionalidad:
 * - Lee el parámetro 'q' de la URL para saber qué buscó el usuario.
 * - Filtra una "base de datos" local de productos buscando coincidencias en el título o categoría.
 * - Muestra los resultados encontrados o un mensaje si no hay coincidencias.
 */
const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // Base de datos simulada de todos los productos
  const allProducts = [
    // Gaming
    { id: 1, image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=800&auto=format&fit=crop', title: 'Silla Gaming Ergonómica', price: '599.90', discount: '799.90', badge: 'NUEVO', category: 'gaming' },
    { id: 2, image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop', title: 'PC Gaming RTX 4070', price: '4999.90', category: 'gaming' },
    { id: 3, image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800&auto=format&fit=crop', title: 'PlayStation 5 Digital', price: '2199.90', discount: '2499.90', badge: 'OFERTA', category: 'gaming' },
    { id: 4, image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop', title: 'Mouse Gaming RGB Pro', price: '149.90', discount: '199.90', badge: 'OFERTA', category: 'gaming' },
    { id: 5, image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop', title: 'Teclado Mecánico RGB', price: '299.90', badge: 'NUEVO', category: 'gaming' },
    
    // Tecnología
    { id: 6, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop', title: 'MacBook Pro 14" M3', price: '6999.90', badge: 'NUEVO', category: 'tecnologia' },
    { id: 7, image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop', title: 'Laptop Dell XPS 15', price: '4499.90', discount: '4999.90', badge: 'OFERTA', category: 'tecnologia' },
    { id: 8, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop', title: 'iPhone 15 Pro Max', price: '4999.90', badge: 'DESTACADO', category: 'tecnologia' },
    { id: 9, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop', title: 'Samsung Galaxy S24 Ultra', price: '4299.90', discount: '4699.90', badge: 'OFERTA', category: 'tecnologia' },
    { id: 10, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop', title: 'AirPods Pro 2', price: '899.90', badge: 'NUEVO', category: 'tecnologia' },
    { id: 11, image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop', title: 'Apple Watch Series 9', price: '1699.90', discount: '1899.90', badge: 'OFERTA', category: 'tecnologia' },
    
    // Supermercado
    { id: 12, image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop', title: 'Café Premium 500g', price: '29.90', discount: '39.90', badge: 'OFERTA', category: 'supermercado' },
    { id: 13, image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800&auto=format&fit=crop', title: 'Pack 12 Vinos Reserva', price: '299.90', discount: '399.90', badge: 'OFERTA', category: 'supermercado' },
    { id: 14, image: 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?q=80&w=800&auto=format&fit=crop', title: 'Detergente Líquido 3L', price: '24.90', category: 'supermercado' },
    
    // Libros
    { id: 15, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop', title: 'El Principito - Edición Especial', price: '49.90', discount: '69.90', badge: 'OFERTA', category: 'libros' },
    { id: 16, image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop', title: 'Cien Años de Soledad', price: '59.90', badge: 'DESTACADO', category: 'libros' },
    { id: 17, image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop', title: 'Harry Potter - Colección Completa', price: '399.90', discount: '499.90', badge: 'OFERTA', category: 'libros' },
    { id: 18, image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop', title: 'Sapiens: De animales a dioses', price: '79.90', discount: '99.90', badge: 'OFERTA', category: 'libros' },
    
    // Audio
    { id: 19, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop', title: 'Auriculares Premium', price: '149.90', discount: '199.90', badge: 'OFERTA', category: 'tecnologia' },
    { id: 20, image: 'https://images.unsplash.com/photo-1572635196184-84e35138cf62?q=80&w=800&auto=format&fit=crop', title: 'Parlante Bluetooth 360°', price: '129.90', discount: '179.90', badge: 'OFERTA', category: 'tecnologia' },
    
    // Más Gaming
    { id: 21, image: 'https://images.unsplash.com/photo-1625758452550-97b4f3c0c3bb?q=80&w=800&auto=format&fit=crop', title: 'Monitor Gaming 144Hz 27"', price: '899.90', badge: 'DESTACADO', category: 'gaming' },
    { id: 22, image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop', title: 'Auriculares Gaming 7.1', price: '249.90', discount: '349.90', badge: 'OFERTA', category: 'gaming' },
    { id: 23, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop', title: 'Cámara Web 4K', price: '159.90', discount: '219.90', badge: 'OFERTA', category: 'tecnologia' },
    { id: 24, image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=800&auto=format&fit=crop', title: 'Tablet 10" 128GB', price: '699.90', discount: '899.90', badge: 'OFERTA', category: 'tecnologia' },
  ];

  // Filtrar productos según la búsqueda
  const filteredProducts = query
    ? allProducts.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase()) ||
        product.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <>
      <TopBar />
      <Navbar />
      
      <div className="py-5 bg-light" style={{ minHeight: '100vh' }}>
        <div className="container-xl">
          {query ? (
            <>
              <div className="mb-5">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Búsqueda</li>
                  </ol>
                </nav>
                
                <h1 className="display-5 fw-bold mb-3">
                  Resultados para: <span className="text-primary">"{query}"</span>
                </h1>
                <p className="lead text-muted">
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="row g-4 mb-5">
                  {filteredProducts.map((product) => (
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
              ) : (
                <div className="text-center py-5">
                  <i className="bi bi-search fs-1 text-muted mb-3 d-block"></i>
                  <h3 className="mb-3">No encontramos resultados para "{query}"</h3>
                  <p className="text-muted mb-4">Intenta con otros términos de búsqueda o explora nuestras categorías</p>
                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <Link to="/categoria/gaming" className="btn btn-outline-primary rounded-pill">Gaming</Link>
                    <Link to="/categoria/tecnologia" className="btn btn-outline-primary rounded-pill">Tecnología</Link>
                    <Link to="/categoria/supermercado" className="btn btn-outline-primary rounded-pill">Supermercado</Link>
                    <Link to="/categoria/libros" className="btn btn-outline-primary rounded-pill">Libros</Link>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-5">
              <i className="bi bi-search fs-1 text-muted mb-3 d-block"></i>
              <h3 className="mb-3">¿Qué estás buscando?</h3>
              <p className="text-muted">Escribe en el buscador para encontrar productos</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SearchPage;
