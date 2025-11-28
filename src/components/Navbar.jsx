import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);
  const { getItemsCount } = useCart();
  const { user, logoutUser } = useAuth();

  // Base de datos de productos para sugerencias (Mock)
  const allProducts = [
    { id: '1', title: 'Silla Gaming Ergonómica', price: 599.90, image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=400&auto=format&fit=crop', category: 'Gaming' },
    { id: '2', title: 'PC Gaming RTX 4070', price: 4999.90, image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=400&auto=format&fit=crop', category: 'Gaming' },
    // ... más productos mock
  ];

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
          product.title.toLowerCase().includes(value.toLowerCase()) ||
          product.category.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 6);
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

          <form className="d-flex mx-lg-auto my-2 my-lg-0 search-form position-relative" role="search" onSubmit={handleSearch} ref={searchRef}>
            <div className="input-group">
              <span className="input-group-text bg-light border-end-0">
                <i className="bi bi-search text-muted"></i>
              </span>
              <input 
                className="form-control border-start-0 bg-light ps-0" 
                type="search" 
                placeholder="Buscar productos, marcas y más..." 
                aria-label="Buscar"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => searchQuery.trim().length > 0 && setShowSuggestions(true)}
              />
              <button className="btn btn-primary" type="submit">Buscar</button>
            </div>
            
            {showSuggestions && suggestions.length > 0 && (
              <div className="search-suggestions position-absolute w-100 bg-white shadow-sm rounded-bottom mt-1 overflow-hidden" style={{ zIndex: 1000, top: '100%' }}>
                <div className="list-group list-group-flush">
                  {suggestions.map(item => (
                    <button
                      key={item.id}
                      className="list-group-item list-group-item-action d-flex align-items-center gap-2 px-3 py-2"
                      onClick={() => {
                        navigate(`/buscar?q=${encodeURIComponent(item.title)}`);
                        setShowSuggestions(false);
                        setSearchQuery(item.title);
                      }}
                    >
                      <i className="bi bi-search text-muted small"></i>
                      <span className="text-truncate">{item.title}</span>
                      <span className="badge bg-light text-dark ms-auto">{item.category}</span>
                    </button>
                  ))}
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