import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState } from 'react';
import { createProducto } from '../api/client';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Página de Vender (SellPage)
 * ---------------------------
 * Permite a los usuarios publicar productos para la venta.
 * Incluye un formulario para ingresar detalles del producto.
 */
const SellPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    titulo: '',
    categoriaId: '',
    precio: '',
    descripcion: '',
    imagenPrincipal: '',
    stock: 1,
    estado: 'Nuevo'
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      alert('Debes iniciar sesión para vender un producto');
      navigate('/login');
      return;
    }

    try {
      await createProducto({
        ...formData,
        vendedorId: user.id, // ID del usuario autenticado
        precio: parseFloat(formData.precio),
        stock: parseInt(formData.stock),
        categoriaId: parseInt(formData.categoriaId) || 1,
        subcategoriaId: null, // Opcional por ahora
        precioOriginal: null,
        badge: 'NUEVO'
      });
      alert('Producto publicado con éxito');
      navigate('/');
    } catch (error) {
      console.error('Error al crear producto:', error);
      const serverMessage = error.response?.data?.message || error.response?.data?.error || error.message;
      alert(`Error al publicar el producto: ${serverMessage}`);
    }
  };

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

                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="titulo" className="form-label fw-bold">Nombre del Producto</label>
                      <input type="text" className="form-control form-control-lg" id="titulo" placeholder="Ej. iPhone 13 Pro Max" value={formData.titulo} onChange={handleChange} required />
                    </div>

                    <div className="row mb-4">
                      <div className="col-md-6">
                        <label htmlFor="categoriaId" className="form-label fw-bold">Categoría</label>
                        <select className="form-select form-select-lg" id="categoriaId" value={formData.categoriaId} onChange={handleChange}>
                          <option value="">Seleccionar...</option>
                          <option value="1">Gaming</option>
                          <option value="2">Tecnología</option>
                          <option value="3">Supermercado</option>
                          <option value="4">Libros</option>
                          <option value="5">Otros</option>
                        </select>
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="precio" className="form-label fw-bold">Precio (S/)</label>
                        <input type="number" className="form-control form-control-lg" id="precio" placeholder="0.00" value={formData.precio} onChange={handleChange} required />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="description" className="form-label fw-bold">Descripción</label>
                      <textarea className="form-control" id="descripcion" rows="5" placeholder="Describe tu producto..." value={formData.descripcion} onChange={handleChange}></textarea>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="imagenPrincipal" className="form-label fw-bold">URL de la Imagen</label>
                      <input type="text" className="form-control" id="imagenPrincipal" placeholder="https://..." value={formData.imagenPrincipal} onChange={handleChange} />
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
