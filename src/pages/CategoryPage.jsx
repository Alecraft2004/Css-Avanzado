import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getProductosByCategoria } from '../api/client';
import { getSubcategoryIdByName } from '../utils/categories';

const CategoryPage = ({ customSlug, customCategoryInfo }) => {
  const { slug: paramSlug } = useParams();
  // Usamos el slug pasado por props (para páginas específicas) o el de la URL (para genéricas)
  const slug = customSlug || paramSlug;
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubcategory, setSelectedSubcategory] = useState('Todos');

  // Información por defecto si no se provee customCategoryInfo
  const defaultCategoryInfo = {
    name: slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : 'Categoría',
    description: `Explora nuestros productos de ${slug}`,
    icon: 'bi-grid',
    subcategories: []
  };

  const categoryInfo = customCategoryInfo || defaultCategoryInfo;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProductosByCategoria(slug);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching category products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProducts();
    }
  }, [slug]);

  // Filtrado local por subcategoría (si existen subcategorías definidas)
  const filteredProducts = selectedSubcategory === 'Todos'
    ? products
    : products.filter(product => {
        // 1. Coincidencia directa por nombre (si el backend lo devuelve)
        if (product.subcategoria === selectedSubcategory || product.subcategory === selectedSubcategory) return true;
        
        // 2. Coincidencia por ID
        const targetId = getSubcategoryIdByName(selectedSubcategory);
        const prodSubId = product.subcategoriaId || product.subcategoria_id;
        
        return targetId && prodSubId && parseInt(prodSubId) === parseInt(targetId);
    });

  return (
    <>
      <TopBar />
      <Navbar />
      
      <div className="py-5 bg-light" style={{ minHeight: '100vh' }}>
        <div className="container-xl">
          <div className="mb-5">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Inicio</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{categoryInfo.name}</li>
              </ol>
            </nav>
            
            <h1 className="display-4 fw-bold mb-3">
              {categoryInfo.icon && <i className={`bi ${categoryInfo.icon} text-primary me-3`}></i>}
              {categoryInfo.name}
            </h1>
            {categoryInfo.description && (
              <p className="lead text-muted">{categoryInfo.description}</p>
            )}

            {/* Renderizar botones de subcategorías si existen */}
            {categoryInfo.subcategories && categoryInfo.subcategories.length > 0 && (
              <div className="d-flex gap-3 flex-wrap mt-4">
                <button 
                  className={`btn ${selectedSubcategory === 'Todos' ? 'btn-primary' : 'btn-outline-primary'} rounded-pill`}
                  onClick={() => setSelectedSubcategory('Todos')}
                >
                  Todos
                </button>
                {categoryInfo.subcategories.map((sub, index) => (
                  <button 
                    key={index} 
                    className={`btn ${selectedSubcategory === sub ? 'btn-primary' : 'btn-outline-primary'} rounded-pill`}
                    onClick={() => setSelectedSubcategory(sub)}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            )}
          </div>

          {loading ? (
            <div className="text-center py-5">Cargando productos...</div>
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
                      discount={product.precioOriginal}
                      badge={product.badge}
                    />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center">
                  <p className="text-muted">No se encontraron productos en esta categoría.</p>
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

export default CategoryPage;
