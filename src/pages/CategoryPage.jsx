import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const CategoryPage = ({ category, products }) => {
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
              <button className="btn btn-outline-primary rounded-pill">Todos</button>
              {category.subcategories?.map((sub, index) => (
                <button key={index} className="btn btn-outline-primary rounded-pill">{sub}</button>
              ))}
            </div>
          </div>

          <div className="row g-4 mb-5">
            {products.map((product) => (
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
