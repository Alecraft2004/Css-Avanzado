import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { getProductos } from '../api/client';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const searchRef = useRef(null);
  const { getItemsCount } = useCart();
  const { user, logoutUser } = useAuth();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductos();
        setAllProducts(data);
      } catch (error) {
        console.error('Error loading products for search:', error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.trim().length > 0) {
      const filtered = allProducts
        .filter(product =>
          product.titulo.toLowerCase().includes(value.toLowerCase()) ||
          (product.categoria && product.categoria.toLowerCase().includes(value.toLowerCase()))
        )
        .slice(0, 5); // Limit to 5 suggestions
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(searchQuery.trim())}`);
      setShowSuggestions(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top bg-body shadow-sm">
      <div className="container-xl">
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/" aria-label="Inicio NeoMarket">
          <span className="brand-badge">NM</span>
          <span className="fw-bold">NeoMarket</span>
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNav">
          
          {/* Menú de Categorías */}
          <ul className="navbar-nav me-3">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle fw-medium" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/categoria/gaming"><i className="bi bi-controller me-2"></i>Gaming</Link></li>
                <li><Link className="dropdown-item" to="/categoria/tecnologia"><i className="bi bi-laptop me-2"></i>Tecnología</Link></li>
                <li><Link className="dropdown-item" to="/categoria/supermercado"><i className="bi bi-cart4 me-2"></i>Supermercado</Link></li>
                <li><Link className="dropdown-item" to="/categoria/libros"><i className="bi bi-book me-2"></i>Libros</Link></li>
              </ul>
            </li>
          </ul>

          <form className="d-flex mx-lg-auto my-2 my-lg-0 search-form position-relative" role="search" onSubmit={handleSearch} ref={searchRef} style={{ maxWidth: '500px', width: '100%' }}>
            <div className="input-group shadow-sm rounded-pill overflow-hidden border border-primary-subtle">
              <span className="input-group-text bg-white border-0 ps-3">
                <i className="bi bi-search text-primary"></i>
              </span>
              <input 
                className="form-control border-0 shadow-none" 
                type="search" 
                placeholder="Buscar productos..." 
                aria-label="Buscar"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => searchQuery.trim().length > 0 && setShowSuggestions(true)}
                style={{ fontSize: '0.95rem' }}
              />
              <button className="btn btn-primary px-4 fw-medium" type="submit">Buscar</button>
            </div>
            
            {showSuggestions && suggestions.length > 0 && (
              <div className="search-suggestions position-absolute w-100 bg-white shadow-lg rounded-4 mt-2 overflow-hidden border border-light" style={{ zIndex: 1000, top: '100%' }}>
                <div className="list-group list-group-flush">
                  <div className="px-3 py-2 bg-light text-muted small fw-bold text-uppercase border-bottom">
                    Resultados sugeridos
                  </div>
                  {suggestions.map(item => (
                    <button
                      key={item.id}
                      className="list-group-item list-group-item-action px-3 py-2 border-bottom-0"
                      onClick={() => {
                        navigate(`/buscar?q=${encodeURIComponent(item.titulo)}`);
                        setShowSuggestions(false);
                        setSearchQuery(item.titulo);
                      }}
                    >
                      <div className="d-flex align-items-center gap-3">
                        <div className="bg-light rounded p-1 d-flex align-items-center justify-content-center" style={{width: '48px', height: '48px'}}>
                            <img 
                                src={item.imagenPrincipal || 'https://via.placeholder.com/50'} 
                                alt={item.titulo}
                                className="img-fluid rounded"
                                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                            />
                        </div>
                        <div className="flex-grow-1 text-start overflow-hidden">
                            <h6 className="mb-0 text-truncate text-dark" style={{ fontSize: '0.9rem' }}>{item.titulo}</h6>
                            <div className="d-flex align-items-center gap-2">
                                <span className="text-primary fw-bold small">S/ {item.precio}</span>
                                {item.precio_original && (
                                    <span className="text-muted text-decoration-line-through" style={{ fontSize: '0.75rem' }}>S/ {item.precio_original}</span>
                                )}
                                {item.badge && <span className="badge bg-danger" style={{fontSize: '0.6rem'}}>{item.badge}</span>}
                            </div>
                        </div>
                        <i className="bi bi-chevron-right text-muted small"></i>
                      </div>
                    </button>
                  ))}
                  <button 
                    className="list-group-item list-group-item-action text-center text-primary fw-medium py-2 small bg-light"
                    onClick={handleSearch}
                  >
                    Ver todos los resultados para "{searchQuery}"
                  </button>
                </div>
              </div>
            )}
          </form>

          <ul className="navbar-nav align-items-lg-center gap-2 ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/ofertas">Ofertas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/vender">Vender</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ayuda">Ayuda</Link>
            </li>

            {user ? (
               <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle d-flex align-items-center gap-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="bi bi-person-circle fs-5"></i>
                  <span>{user.nombre}</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/profile">Mi Perfil</Link></li>
                  <li><Link className="dropdown-item" to="/sell">Vender</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><button className="dropdown-item text-danger" onClick={logoutUser}>Cerrar Sesión</button></li>
                </ul>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Crear cuenta</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Ingresar</Link>
                </li>
              </>
            )}
            
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/carrito" aria-label="Carrito de compras">
                <i className="bi bi-cart3 fs-5"></i>
                {getItemsCount() > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{ fontSize: '0.6rem' }}>
                    {getItemsCount()}
                    <span className="visually-hidden">productos en el carrito</span>
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;