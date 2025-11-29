import { useSearchParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getProductos } from '../api/client';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      try {
        const allProducts = await getProductos();
        // Filtrar por título o categoría
        const results = allProducts.filter(p => 
          p.titulo.toLowerCase().includes(query.toLowerCase()) ||
          (p.categoria && p.categoria.toLowerCase().includes(query.toLowerCase()))
        );
        setProducts(results);
      } catch (error) {
        console.error('Error searching products:', error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchSearchResults();
    } else {
      setProducts([]);
      setLoading(false);
    }
  }, [query]);

  return (
    <>
      <TopBar />
      <Navbar />
      
      <div className="py-5 bg-light" style={{ minHeight: '100vh' }}>
        <div className="container-xl">
          <div className="mb-4">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Búsqueda</li>
              </ol>
            </nav>
            
            <h1 className="h3 fw-bold">
              Resultados para "{query}"
            </h1>
            <p className="text-muted">
              {products.length} resultados encontrados
            </p>
          </div>

          {loading ? (
            <div className="text-center py-5">Buscando...</div>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
              {products.length > 0 ? (
                products.map((product) => (
                  <div key={product.id} className="col">
                    <ProductCard
                      id={product.id}
                      image={product.imagenPrincipal}
                      title={product.titulo}
                      price={product.precio}
                      discount={product.precio_original}
                      badge={product.badge}
                    />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-5">
                  <i className="bi bi-search display-1 text-muted mb-3"></i>
                  <h3>No encontramos lo que buscas</h3>
                  <p className="text-muted">Intenta con otras palabras clave o revisa la ortografía.</p>
                  <Link to="/" className="btn btn-primary rounded-pill px-4 mt-3">
                    Volver al inicio
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SearchPage;
