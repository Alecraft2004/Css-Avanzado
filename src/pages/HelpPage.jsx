import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * Página de Ayuda (HelpPage)
 * --------------------------
 * Centro de ayuda para usuarios.
 * Incluye preguntas frecuentes (FAQ) y opciones de contacto.
 */
const HelpPage = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      
      <div className="py-5 bg-light" style={{ minHeight: '100vh' }}>
        <div className="container-xl">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">Centro de Ayuda</h1>
            <p className="lead text-muted">
              ¿Cómo podemos ayudarte hoy?
            </p>
            <div className="row justify-content-center mt-4">
              <div className="col-md-6">
                <div className="input-group input-group-lg">
                  <span className="input-group-text bg-white border-end-0">
                    <i className="bi bi-search text-muted"></i>
                  </span>
                  <input type="text" className="form-control border-start-0" placeholder="Buscar en la ayuda..." />
                  <button className="btn btn-primary">Buscar</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4 mb-5">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <i className="bi bi-box-seam fs-1 text-primary mb-3"></i>
                  <h3 className="h5 fw-bold">Envíos y Entregas</h3>
                  <p className="text-muted">Rastrea tu pedido, costos de envío y tiempos de entrega.</p>
                  <a href="#" className="btn btn-outline-primary rounded-pill btn-sm">Ver más</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <i className="bi bi-arrow-repeat fs-1 text-primary mb-3"></i>
                  <h3 className="h5 fw-bold">Devoluciones</h3>
                  <p className="text-muted">Política de devoluciones, reembolsos y cambios.</p>
                  <a href="#" className="btn btn-outline-primary rounded-pill btn-sm">Ver más</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">
                <div className="card-body">
                  <i className="bi bi-person-gear fs-1 text-primary mb-3"></i>
                  <h3 className="h5 fw-bold">Mi Cuenta</h3>
                  <p className="text-muted">Gestionar perfil, direcciones y métodos de pago.</p>
                  <a href="#" className="btn btn-outline-primary rounded-pill btn-sm">Ver más</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm mb-5">
            <div className="card-body p-5">
              <h2 className="h3 fw-bold mb-4">Preguntas Frecuentes</h2>
              <div className="accordion" id="faqAccordion">
                <div className="accordion-item border-0 mb-3 shadow-sm rounded">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                      ¿Cómo puedo rastrear mi pedido?
                    </button>
                  </h2>
                  <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted">
                      Puedes rastrear tu pedido ingresando a "Mis Compras" en tu perfil y seleccionando el pedido que deseas consultar. Allí encontrarás el número de seguimiento.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 shadow-sm rounded">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                      ¿Cuáles son los métodos de pago aceptados?
                    </button>
                  </h2>
                  <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted">
                      Aceptamos tarjetas de crédito y débito (Visa, Mastercard, Amex), PayPal y transferencias bancarias directas.
                    </div>
                  </div>
                </div>
                <div className="accordion-item border-0 mb-3 shadow-sm rounded">
                  <h2 className="accordion-header">
                    <button className="accordion-button collapsed rounded" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                      ¿Cuánto tiempo tengo para devolver un producto?
                    </button>
                  </h2>
                  <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                    <div className="accordion-body text-muted">
                      Tienes hasta 30 días calendario desde la fecha de recepción para solicitar una devolución, siempre que el producto esté en su estado original.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="lead mb-3">¿No encontraste lo que buscabas?</p>
            <button className="btn btn-primary btn-lg rounded-pill px-5">
              <i className="bi bi-chat-dots me-2"></i>
              Contactar Soporte
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HelpPage;
