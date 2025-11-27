import { useState } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

/**
 * Página Genérica de Categoría (CategoryPage)
 * -------------------------------------------
 * Este es un componente "plantilla" reutilizable para todas las páginas de categorías
 * (Gaming, Tecnología, etc.).
 * 
 * Recibe como 'props':
 * - category: Información de la categoría (nombre, icono, descripción, subcategorías).
 * - products: La lista de productos a mostrar.
 * 
 * Funcionalidad clave:
 * - Implementa el filtrado de productos por subcategoría usando el estado 'selectedCategory'.
 */
const CategoryPage = ({ category, products }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredProducts = selectedCategory === 'Todos'
    ? products
    : products.filter(product => product.subcategory === selectedCategory);

  return (
    <>
      <TopBar />
      <Navbar />
      
      <div className="py-5 bg-light" style={{ minHeight: '100vh' }}>
        <div className="container-xl">
          <div className="mb-5">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                <li className="breadcrumb-item active" aria-current="page">{category.name}</li>
              </ol>
            </nav>
            
            <h1 className="display-4 fw-bold mb-3">
              <i className={`bi ${category.icon} text-primary me-3`}></i>
              {category.name}
            </h1>
            <p className="lead text-muted">{category.description}</p>
            
            <div className="d-flex gap-3 flex-wrap mt-4">
              <button 
                className={`btn ${selectedCategory === 'Todos' ? 'btn-primary' : 'btn-outline-primary'} rounded-pill`}
                onClick={() => setSelectedCategory('Todos')}
              >
                Todos
              </button>
              {category.subcategories?.map((sub, index) => (
                <button 
                  key={index} 
                  className={`btn ${selectedCategory === sub ? 'btn-primary' : 'btn-outline-primary'} rounded-pill`}
                  onClick={() => setSelectedCategory(sub)}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>

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

          <div className="text-center">
            <button className="btn btn-primary btn-lg rounded-pill px-5">
              Ver más productos
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default CategoryPage;
