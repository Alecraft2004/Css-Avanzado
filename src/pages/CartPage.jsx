import { Link, useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

/**
 * Página del Carrito (CartPage)
 * -----------------------------
 * Muestra el resumen de la compra del usuario.
 * 
 * Funcionalidades:
 * - Lista los productos agregados con su imagen, nombre y precio.
 * - Permite aumentar o disminuir la cantidad de cada producto.
 * - Permite eliminar productos del carrito.
 * - Muestra el desglose de precios (subtotal, impuestos, total).
 * - Persiste la información gracias al CartContext.
 */
const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    setIsProcessing(true);
    
    // Datos de la orden para la boleta
    const orderData = {
        items: [...cart],
        total: getCartTotal(),
        date: new Date().toISOString(),
        user: user || { nombre: 'Invitado', email: 'invitado@example.com' } // Fallback si no hay usuario logueado
    };

    // Simular proceso de pago
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate('/checkout-success', { state: { orderData } });
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <>
        <TopBar />
        <Navbar />
        
        <div className="py-5 bg-light" style={{ minHeight: '100vh' }}>
          <div className="container-xl">
            <div className="text-center py-5">
              <i className="bi bi-cart-x display-1 text-muted mb-4"></i>
              <h2 className="mb-3">Tu carrito está vacío</h2>
              <p className="text-muted mb-4">Descubre nuestros productos y empieza a llenar tu carrito</p>
              <Link to="/" className="btn btn-primary btn-lg rounded-pill px-5">
                Ir a la tienda
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }

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
                <li className="breadcrumb-item active" aria-current="page">Carrito</li>
              </ol>
            </nav>
            
            <h1 className="display-5 fw-bold mb-3">
              <i className="bi bi-cart3 text-primary me-3"></i>
              Mi Carrito
            </h1>
          </div>

          <div className="row g-4">
            <div className="col-lg-8">
              <div className="card shadow-sm border-0 mb-3">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h5 className="card-title mb-0">Productos ({cart.length})</h5>
                    <button 
                      className="btn btn-sm btn-outline-danger rounded-pill"
                      onClick={clearCart}
                    >
                      <i className="bi bi-trash me-2"></i>
                      Vaciar carrito
                    </button>
                  </div>

                  {cart.map((item) => (
                    <div key={item.id} className="border-bottom py-3">
                      <div className="row align-items-center">
                        <div className="col-md-2 col-3">
                          <img 
                            src={item.imagenPrincipal} 
                            alt={item.titulo} 
                            className="img-fluid rounded"
                            style={{ objectFit: 'cover', height: '80px' }}
                          />
                        </div>
                        
                        <div className="col-md-4 col-9">
                          <h6 className="mb-1">{item.titulo}</h6>
                          {item.precio_original && (
                            <small className="text-muted text-decoration-line-through">
                              S/ {item.precio_original}
                            </small>
                          )}
                          {item.badge && (
                            <span className="badge bg-danger ms-2">{item.badge}</span>
                          )}
                        </div>

                        <div className="col-md-2 col-4 mt-2 mt-md-0">
                          <div className="input-group input-group-sm">
                            <button 
                              className="btn btn-outline-secondary"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            >
                              <i className="bi bi-dash"></i>
                            </button>
                            <input 
                              type="number" 
                              className="form-control text-center" 
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                              min="1"
                              style={{ maxWidth: '60px' }}
                            />
                            <button 
                              className="btn btn-outline-secondary"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              <i className="bi bi-plus"></i>
                            </button>
                          </div>
                        </div>

                        <div className="col-md-2 col-4 mt-2 mt-md-0 text-center">
                          <span className="fw-bold text-primary fs-5">
                            S/ {(parseFloat(item.precio) * item.quantity).toFixed(2)}
                          </span>
                        </div>

                        <div className="col-md-2 col-4 mt-2 mt-md-0 text-end">
                          <button 
                            className="btn btn-sm btn-outline-danger rounded-pill"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/" className="btn btn-outline-primary rounded-pill">
                <i className="bi bi-arrow-left me-2"></i>
                Seguir comprando
              </Link>
            </div>

            <div className="col-lg-4">
              <div className="card shadow-sm border-0 sticky-top" style={{ top: '100px' }}>
                <div className="card-body">
                  <h5 className="card-title mb-4">Resumen del pedido</h5>
                  
                  <div className="d-flex justify-content-between mb-2">
                    <span>Subtotal ({cart.reduce((sum, item) => sum + item.quantity, 0)} productos)</span>
                    <span className="fw-semibold">S/ {getCartTotal().toFixed(2)}</span>
                  </div>
                  
                  <div className="d-flex justify-content-between mb-2">
                    <span>Envío</span>
                    <span className="text-success fw-semibold">GRATIS</span>
                  </div>
                  
                  <hr />
                  
                  <div className="d-flex justify-content-between mb-4">
                    <span className="fs-5 fw-bold">Total</span>
                    <span className="fs-4 fw-bold text-primary">S/ {getCartTotal().toFixed(2)}</span>
                  </div>

                  <button 
                    className="btn btn-primary w-100 rounded-pill py-3 mb-3"
                    onClick={handleCheckout}
                    disabled={isProcessing}
                  >
                    {isProcessing ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Procesando...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-credit-card me-2"></i>
                        Proceder al pago
                      </>
                    )}
                  </button>

                  <div className="text-center text-muted small">
                    <i className="bi bi-shield-check me-1"></i>
                    Compra 100% segura
                  </div>

                  <div className="alert alert-success mt-3 mb-0" role="alert">
                    <i className="bi bi-truck me-2"></i>
                    <small>Envío gratis en compras desde S/ 99</small>
                  </div>
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

export default CartPage;
