import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Página de Vender (SellPage)
 * ---------------------------
 * Permite a los usuarios publicar productos para la venta.
 * Incluye un formulario para ingresar detalles del producto.
 */
const SellPage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      
      <div className="py-5 bg-light" style={{ minHeight: '100vh' }}>
        <div className="container-xl">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-5">
                  <h1 className="display-5 fw-bold mb-4 text-center">Vende tus productos</h1>
                  <p className="lead text-muted text-center mb-5">
                    Publica tus artículos en NeoMarket y llega a miles de compradores.
                  </p>

                  <form>
                    <div className="mb-4">
                      <label htmlFor="productName" className="form-label fw-bold">Nombre del Producto</label>
                      <input type="text" className="form-control form-control-lg" id="productName" placeholder="Ej. iPhone 13 Pro Max" />
                    </div>

                    <div className="row mb-4">
                      <div className="col-md-6">
                        <label htmlFor="category" className="form-label fw-bold">Categoría</label>
                        <select className="form-select form-select-lg" id="category">
                          <option selected>Seleccionar...</option>
                          <option value="gaming">Gaming</option>
                          <option value="tecnologia">Tecnología</option>
                          <option value="supermercado">Supermercado</option>
                          <option value="libros">Libros</option>
                          <option value="otros">Otros</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="price" className="form-label fw-bold">Precio (S/)</label>
                        <input type="number" className="form-control form-control-lg" id="price" placeholder="0.00" />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="description" className="form-label fw-bold">Descripción</label>
                      <textarea className="form-control" id="description" rows="5" placeholder="Describe tu producto..."></textarea>
                    </div>

                    <div className="mb-4">
                      <label className="form-label fw-bold">Fotos del Producto</label>
                      <div className="border rounded p-5 text-center bg-light" style={{ borderStyle: 'dashed !important' }}>
                        <i className="bi bi-cloud-upload fs-1 text-muted mb-3"></i>
                        <p className="mb-0">Arrastra tus fotos aquí o haz clic para subir</p>
                      </div>
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary btn-lg rounded-pill">
                        Publicar Anuncio
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SellPage;
