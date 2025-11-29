import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { getProductosByUsuario, deleteProducto, updateProducto } from '../api/client';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import { useNavigate } from 'react-router-dom';
import { subcategoriasMap } from '../utils/categories';

const ProfilePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);
  const [availableSubcategories, setAvailableSubcategories] = useState([]);

  // Mapeo de subcategorías importado de utils/categories.js

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
    const categoriaId = product.categoriaId || product.categoria_id;
    const subcategoriaId = product.subcategoriaId || product.subcategoria_id;
    
    setEditingProduct({ 
        ...product,
        categoriaId,
        subcategoriaId
    });

    if (categoriaId) {
        setAvailableSubcategories(subcategoriasMap[categoriaId] || []);
    } else {
        setAvailableSubcategories([]);
    }
  };

  const handleSaveEdit = async (e) => {
    e.preventDefault();
    try {
      await updateProducto(editingProduct.id, {
          ...editingProduct,
          categoriaId: editingProduct.categoriaId,
          subcategoriaId: editingProduct.subcategoriaId,
          usuarioId: user.id
      });
      setEditingProduct(null);
      loadProducts();
      alert('Producto actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar:', error);
      alert('Error al actualizar el producto');
    }
  };

  const handleOffer = (product) => {
     // Si ya tiene precio original, lo mantenemos, si no, el precio actual se convierte en el original
     const originalPrice = product.precio_original || product.precio;
     
     const newPrice = prompt(`El precio original es S/ ${originalPrice}. Ingresa el nuevo precio de oferta:`);
     
     if (newPrice && !isNaN(newPrice)) {
         const newPriceFloat = parseFloat(newPrice);
         
         if (newPriceFloat < parseFloat(originalPrice)) {
             // Convertir a camelCase para el backend
             const payload = {
                 id: product.id,
                 titulo: product.titulo,
                 descripcion: product.descripcion,
                 precio: newPriceFloat,
                 precioOriginal: originalPrice,
                 badge: 'OFERTA',
                 stock: product.stock,
                 estado: product.estado,
                 imagenPrincipal: product.imagenPrincipal || product.imagen_principal,
                 categoriaId: product.categoria_id,
                 subcategoriaId: product.subcategoria_id,
                 usuarioId: user.id
             };
             
             updateProducto(product.id, payload).then(() => {
                 loadProducts();
                 alert('¡Producto puesto en oferta!');
             }).catch(error => {
                 console.error(error);
                 alert('Error al poner en oferta');
             });
         } else {
             alert('El precio de oferta debe ser menor al precio original.');
         }
     }
  };

  const handleResetPrice = async (product) => {
    if (window.confirm(`¿Deseas restablecer el precio a S/ ${product.precio_original}?`)) {
        try {
            const payload = {
                id: product.id,
                titulo: product.titulo,
                descripcion: product.descripcion,
                precio: product.precio_original,
                precioOriginal: null,
                badge: '',
                stock: product.stock,
                estado: product.estado,
                imagenPrincipal: product.imagenPrincipal || product.imagen_principal,
                categoriaId: product.categoria_id,
                subcategoriaId: product.subcategoria_id,
                usuarioId: user.id
            };
            await updateProducto(product.id, payload);
            loadProducts();
            alert('Precio restablecido correctamente');
        } catch (error) {
            console.error('Error al restablecer precio:', error);
            alert('Error al restablecer el precio');
        }
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
                            {product.precio_original && (
                                <div className="text-muted text-decoration-line-through small">S/ {product.precio_original}</div>
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
                            <i className="bi bi-tag-fill me-1"></i> {product.precio_original ? 'Modificar Oferta' : 'Poner en Oferta'}
                        </button>
                        {product.precio_original && (
                            <button className="btn btn-secondary" onClick={() => handleResetPrice(product)}>
                                <i className="bi bi-arrow-counterclockwise me-1"></i> Restablecer
                            </button>
                        )}
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
                            <label className="form-label fw-bold">Categoría</label>
                            <select 
                                className="form-select" 
                                value={editingProduct.categoriaId ? String(editingProduct.categoriaId) : ''} 
                                onChange={e => {
                                    const newCatId = parseInt(e.target.value);
                                    setEditingProduct({
                                        ...editingProduct, 
                                        categoriaId: newCatId,
                                        subcategoriaId: '' 
                                    });
                                    setAvailableSubcategories(subcategoriasMap[newCatId] || []);
                                }}
                                required
                            >
                                <option value="">Seleccionar Categoría</option>
                                <option value="1">Gaming</option>
                                <option value="2">Tecnología</option>
                                <option value="3">Supermercado</option>
                                <option value="4">Libros</option>
                            </select>
                        </div>
                        <div className="col-6 mb-3">
                            <label className="form-label fw-bold">Subcategoría</label>
                            <select 
                                className="form-select" 
                                value={editingProduct.subcategoriaId ? String(editingProduct.subcategoriaId) : ''} 
                                onChange={e => {
                                    const val = e.target.value;
                                    setEditingProduct({
                                        ...editingProduct, 
                                        subcategoriaId: val ? parseInt(val) : ''
                                    });
                                }}
                                disabled={!editingProduct.categoriaId}
                            >
                                <option value="">Seleccionar Subcategoría</option>
                                {availableSubcategories.map(sub => (
                                    <option key={sub.id} value={sub.id}>{sub.nombre}</option>
                                ))}
                            </select>
                        </div>
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