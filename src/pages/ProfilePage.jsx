import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getProductosByUsuario, deleteProducto, updateProducto } from '../api/client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);

  const loadProducts = async () => {
    if (!user) return;
    try {
      const data = await getProductosByUsuario(user.id);
      setProducts(data);
    } catch (error) {
      console.error('Error al cargar productos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
        navigate('/login');
        return;
    }
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, navigate]);

  const handleDelete = async (id) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      try {
        await deleteProducto(id);
        setProducts(products.filter(p => p.id !== id));
      } catch (error) {
        console.error('Error al eliminar:', error);
        alert('Error al eliminar el producto');
      }
    }
  };

  const handleEdit = (product) => {
    setEditingProduct({ ...product });
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    try {
      await updateProducto(editingProduct.id, editingProduct);
      setEditingProduct(null);
      loadProducts();
      alert('Producto actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar:', error);
      alert('Error al actualizar el producto');
    }
  };

  const handleOffer = (product) => {
     const newPrice = prompt(`El precio actual es S/ ${product.precio}. Ingresa el nuevo precio de oferta:`);
     if (newPrice && !isNaN(newPrice) && parseFloat(newPrice) < parseFloat(product.precio)) {
         const updatedProduct = {
             ...product,
             precioOriginal: product.precio, // Guardamos el precio anterior como original
             precio: parseFloat(newPrice),
             badge: 'OFERTA'
         };
         // Llamar a update
         updateProducto(product.id, updatedProduct).then(() => {
             loadProducts();
             alert('¡Producto puesto en oferta!');
         }).catch(error => {
             console.error(error);
             alert('Error al poner en oferta');
         });
     } else if (newPrice) {
         alert('El precio de oferta debe ser menor al precio actual.');
     }
  };

  if (!user) return null;

  return (
    <>
      <TopBar />
      <Navbar />
      <div className="container py-5" style={{ minHeight: '80vh' }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>Mi Perfil - Mis Productos</h2>
            <button className="btn btn-success" onClick={() => navigate('/vender')}>
                <i className="bi bi-plus-lg me-2"></i>Vender Nuevo
            </button>
        </div>
        
        {loading ? (
          <div className="text-center py-5">
              <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Cargando...</span>
              </div>
          </div>
        ) : products.length === 0 ? (
          <div className="alert alert-info text-center">
              <h4>No has publicado productos aún.</h4>
              <p>¡Empieza a vender hoy mismo!</p>
              <button className="btn btn-primary mt-2" onClick={() => navigate('/vender')}>Publicar mi primer producto</button>
          </div>
        ) : (
          <div className="row g-4">
            {products.map(product => (
              <div key={product.id} className="col-md-6 col-lg-4">
                <div className="card h-100 shadow-sm border-0">
                  <div className="position-relative">
                      <img 
                        src={product.imagenPrincipal || 'https://via.placeholder.com/300'} 
                        className="card-img-top" 
                        alt={product.titulo} 
                        style={{height: '250px', objectFit: 'contain', padding: '1rem'}} 
                      />
                      {product.badge && (
                          <span className="position-absolute top-0 start-0 badge bg-danger m-2">{product.badge}</span>
                      )}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-truncate" title={product.titulo}>{product.titulo}</h5>
                    <p className="card-text text-muted small text-truncate">{product.descripcion}</p>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div>
                            <span className="fw-bold text-primary fs-5">S/ {product.precio}</span>
                            {product.precioOriginal && (
                                <div className="text-muted text-decoration-line-through small">S/ {product.precioOriginal}</div>
                            )}
                        </div>
                        <span className={`badge ${product.stock > 0 ? 'bg-success' : 'bg-secondary'}`}>
                            {product.stock > 0 ? `Stock: ${product.stock}` : 'Agotado'}
                        </span>
                    </div>
                    <div className="d-grid gap-2">
                        <div className="btn-group">
                            <button className="btn btn-outline-primary" onClick={() => handleEdit(product)}>
                                <i className="bi bi-pencil me-1"></i> Editar
                            </button>
                            <button className="btn btn-outline-danger" onClick={() => handleDelete(product.id)}>
                                <i className="bi bi-trash me-1"></i> Eliminar
                            </button>
                        </div>
                        <button className="btn btn-warning text-dark fw-medium" onClick={() => handleOffer(product)}>
                            <i className="bi bi-tag-fill me-1"></i> Poner en Oferta
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal de Edición */}
        {editingProduct && (
          <div className="modal d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Editar Producto</h5>
                  <button type="button" className="btn-close" onClick={() => setEditingProduct(null)}></button>
                </div>
                <form onSubmit={handleSaveEdit}>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label fw-bold">Título</label>
                      <input type="text" className="form-control" value={editingProduct.titulo} onChange={e => setEditingProduct({...editingProduct, titulo: e.target.value})} required />
                    </div>
                    <div className="row">
                        <div className="col-6 mb-3">
                            <label className="form-label fw-bold">Precio (S/)</label>
                            <input type="number" className="form-control" value={editingProduct.precio} onChange={e => setEditingProduct({...editingProduct, precio: e.target.value})} required />
                        </div>
                        <div className="col-6 mb-3">
                            <label className="form-label fw-bold">Stock</label>
                            <input type="number" className="form-control" value={editingProduct.stock} onChange={e => setEditingProduct({...editingProduct, stock: e.target.value})} required />
                        </div>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Descripción</label>
                      <textarea className="form-control" rows="3" value={editingProduct.descripcion || ''} onChange={e => setEditingProduct({...editingProduct, descripcion: e.target.value})}></textarea>
                    </div>
                    <div className="mb-3">
                      <label className="form-label fw-bold">Imagen URL</label>
                      <input type="text" className="form-control" value={editingProduct.imagenPrincipal || ''} onChange={e => setEditingProduct({...editingProduct, imagenPrincipal: e.target.value})} />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setEditingProduct(null)}>Cancelar</button>
                    <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;