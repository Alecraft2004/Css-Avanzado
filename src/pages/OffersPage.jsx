import { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getProductos } from '../api/client';

const OffersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const allProducts = await getProductos();
        // Filtrar productos que tengan precio_original (indicando oferta)
        // y que precio_original sea mayor que precio actual
        const offers = allProducts.filter(p => 
          p.precio_original && 
          parseFloat(p.precio_original) > parseFloat(p.precio)
        );
        setProducts(offers);
      } catch (error) {
        console.error('Error fetching offers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  const filteredProducts = selectedCategory === 'Todas'
    ? products
    : products.filter(product => product.categoria === selectedCategory);

  // Obtener categorías únicas de los productos en oferta
  const categories = ['Todas', ...new Set(products.map(p => p.categoria).filter(Boolean))];

  return (
    <>
      <TopBar />
      <Navbar />
      
      <div className="py-5 bg-light" style={{ minHeight: '100vh' }}>
        <div className="container-xl">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-3">
              <i className="bi bi-tag-fill text-danger me-3"></i>
              Ofertas Relámpago
            </h1>
            <p className="lead text-muted">Aprovecha los mejores descuentos por tiempo limitado</p>
            
            <div className="d-flex justify-content-center gap-3 flex-wrap mt-4">
              {categories.map(cat => (
                <button 
                  key={cat}
                  className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-outline-primary'} rounded-pill`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="text-center py-5">Cargando ofertas...</div>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className="col">
                    <ProductCard
                      id={product.id}
                      image={product.imagenPrincipal}
                      title={product.titulo}
                      price={product.precio}
                      discount={product.precio_original}
                      badge={product.badge || 'OFERTA'}
                    />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center">
                  <p className="text-muted">No hay ofertas disponibles en este momento.</p>
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

export default OffersPage;
