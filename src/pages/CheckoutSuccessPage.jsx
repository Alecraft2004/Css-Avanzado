import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';

const CheckoutSuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState(null);
  const [deliveryDate, setDeliveryDate] = useState(null);

  useEffect(() => {
    if (location.state && location.state.orderData) {
      setOrderData(location.state.orderData);
      
      // Calcular fecha de entrega (3 días después de la compra)
      const date = new Date();
      date.setDate(date.getDate() + 3);
      setDeliveryDate(date);
    } else {
      // Si no hay datos de orden (acceso directo), redirigir al inicio
      navigate('/');
    }
  }, [location, navigate]);

  if (!orderData || !deliveryDate) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-PE', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatDeliveryDate = (date) => {
    return date.toLocaleDateString('es-PE', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="bg-light py-5" style={{ minHeight: '80vh' }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    {/* Mensaje de Éxito */}
                    <div className="text-center mb-5">
                        <div className="mb-3">
                            <i className="bi bi-check-circle-fill text-success" style={{ fontSize: '4rem' }}></i>
                        </div>
                        <h1 className="fw-bold">¡Compra realizada correctamente!</h1>
                        <p className="lead text-muted">
                            Gracias por tu preferencia. Hemos enviado los detalles a tu correo.
                        </p>
                        <div className="alert alert-info d-inline-block px-4 py-2 rounded-pill">
                            <i className="bi bi-truck me-2"></i>
                            Fecha estimada de entrega: <strong>{formatDeliveryDate(deliveryDate)}</strong>
                        </div>
                    </div>

                    {/* Boleta de Venta */}
                    <div className="card shadow-sm border-0">
                        <div className="card-header bg-dark text-white py-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="mb-0">Boleta de Venta Electrónica</h5>
                                <span className="badge bg-light text-dark">#{Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}</span>
                            </div>
                        </div>
                        <div className="card-body p-4">
                            {/* Datos del Cliente y Fecha */}
                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <h6 className="text-muted text-uppercase small fw-bold">Datos del Cliente</h6>
                                    <p className="mb-1 fw-bold">{orderData.user.nombre} {orderData.user.apellido || ''}</p>
                                    <p className="mb-0 text-muted">{orderData.user.email}</p>
                                </div>
                                <div className="col-md-6 text-md-end mt-3 mt-md-0">
                                    <h6 className="text-muted text-uppercase small fw-bold">Fecha de Compra</h6>
                                    <p className="mb-0">{formatDate(orderData.date)}</p>
                                </div>
                            </div>

                            <hr />

                            {/* Lista de Productos */}
                            <div className="table-responsive mb-4">
                                <table className="table table-borderless">
                                    <thead className="text-muted small text-uppercase">
                                        <tr>
                                            <th>Producto</th>
                                            <th className="text-center">Cant.</th>
                                            <th className="text-end">Precio Unit.</th>
                                            <th className="text-end">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderData.items.map((item, index) => (
                                            <tr key={index} className="border-bottom">
                                                <td>
                                                    <div className="fw-medium">{item.titulo}</div>
                                                    <small className="text-muted">{item.categoriaId === 1 ? 'Gaming' : 'Tecnología'}</small>
                                                </td>
                                                <td className="text-center align-middle">{item.quantity}</td>
                                                <td className="text-end align-middle">S/ {parseFloat(item.precio).toFixed(2)}</td>
                                                <td className="text-end align-middle fw-bold">S/ {(parseFloat(item.precio) * item.quantity).toFixed(2)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Totales */}
                            <div className="row justify-content-end">
                                <div className="col-md-5">
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="text-muted">Subtotal</span>
                                        <span>S/ {orderData.total.toFixed(2)}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="text-muted">Envío</span>
                                        <span className="text-success">GRATIS</span>
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-between align-items-center">
                                        <span className="fs-5 fw-bold">Total Pagado</span>
                                        <span className="fs-4 fw-bold text-primary">S/ {orderData.total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer bg-light text-center py-3">
                            <small className="text-muted">NeoMarket S.A.C - RUC: 20123456789</small>
                        </div>
                    </div>

                    <div className="d-grid gap-2 d-md-flex justify-content-center mt-5">
                        <Link to="/" className="btn btn-primary btn-lg rounded-pill px-5">
                            Seguir Comprando
                        </Link>
                        <button className="btn btn-outline-secondary btn-lg rounded-pill px-5" onClick={() => window.print()}>
                            <i className="bi bi-printer me-2"></i> Imprimir Boleta
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutSuccessPage;
