import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);
  const { getCartCount } = useCart();

  // Base de datos de productos para sugerencias
  const allProducts = [
    { id: 1, title: 'Silla Gaming Ergonómica', price: '599.90', image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=400&auto=format&fit=crop', category: 'Gaming' },
    { id: 2, title: 'PC Gaming RTX 4070', price: '4999.90', image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=400&auto=format&fit=crop', category: 'Gaming' },
    { id: 3, title: 'PlayStation 5 Digital', price: '2199.90', image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=400&auto=format&fit=crop', category: 'Gaming' },
    { id: 4, title: 'Mouse Gaming RGB Pro', price: '149.90', image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=400&auto=format&fit=crop', category: 'Gaming' },
    { id: 5, title: 'Teclado Mecánico RGB', price: '299.90', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=400&auto=format&fit=crop', category: 'Gaming' },
    { id: 6, title: 'MacBook Pro 14" M3', price: '6999.90', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=400&auto=format&fit=crop', category: 'Tecnología' },
    { id: 7, title: 'Laptop Dell XPS 15', price: '4499.90', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=400&auto=format&fit=crop', category: 'Tecnología' },
    { id: 8, title: 'iPhone 15 Pro Max', price: '4999.90', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=400&auto=format&fit=crop', category: 'Tecnología' },
    { id: 9, title: 'Samsung Galaxy S24 Ultra', price: '4299.90', image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=400&auto=format&fit=crop', category: 'Tecnología' },
    { id: 10, title: 'AirPods Pro 2', price: '899.90', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop', category: 'Tecnología' },
    { id: 11, title: 'Apple Watch Series 9', price: '1699.90', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=400&auto=format&fit=crop', category: 'Tecnología' },
    { id: 12, title: 'Café Premium 500g', price: '29.90', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=400&auto=format&fit=crop', category: 'Supermercado' },
    { id: 13, title: 'Pack 12 Vinos Reserva', price: '299.90', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=400&auto=format&fit=crop', category: 'Supermercado' },
    { id: 14, title: 'El Principito - Edición Especial', price: '49.90', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=400&auto=format&fit=crop', category: 'Libros' },
    { id: 15, title: 'Cien Años de Soledad', price: '59.90', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=400&auto=format&fit=crop', category: 'Libros' },
    { id: 16, title: 'Harry Potter - Colección Completa', price: '399.90', image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=400&auto=format&fit=crop', category: 'Libros' },
    { id: 17, title: 'Auriculares Premium', price: '149.90', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop', category: 'Tecnología' },
    { id: 18, title: 'Monitor Gaming 144Hz 27"', price: '899.90', image: 'https://images.unsplash.com/photo-1625758452550-97b4f3c0c3bb?q=80&w=400&auto=format&fit=crop', category: 'Gaming' },
    { id: 19, title: 'Tablet 10" 128GB', price: '699.90', image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=400&auto=format&fit=crop', category: 'Tecnología' },
    { id: 20, title: 'Sapiens: De animales a dioses', price: '79.90', image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=400&auto=format&fit=crop', category: 'Libros' },
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

  const handleSuggestionClick = () => {
    setShowSuggestions(false);
    setSearchQuery('');
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
          <ul className="navbar-nav me-3 mt-2 mt-lg-0">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/categoria/gaming">Gaming</Link></li>
                <li><Link className="dropdown-item" to="/categoria/tecnologia">Tecnología</Link></li>
                <li><Link className="dropdown-item" to="/categoria/supermercado">Supermercado</Link></li>
                <li><Link className="dropdown-item" to="/categoria/libros">Libros</Link></li>
              </ul>
            </li>
          </ul>

          <div className="flex-grow-1 me-lg-3 position-relative" ref={searchRef}>
            <form className="d-flex" role="search" aria-label="Buscador general" onSubmit={handleSearch}>
              <input 
                className="form-control form-control-lg me-2 rounded-pill search-input" 
                type="search" 
                placeholder="Buscar productos, marcas y más…" 
                aria-label="Buscar"
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={() => searchQuery && setShowSuggestions(true)}
              />
              <button className="btn btn-primary rounded-pill px-4" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>

            {showSuggestions && suggestions.length > 0 && (
              <div className="search-suggestions position-absolute w-100 bg-white rounded shadow-lg mt-2" style={{ zIndex: 1050, maxHeight: '400px', overflowY: 'auto' }}>
                {suggestions.map((product) => (
                  <Link
                    key={product.id}
                    to={`/buscar?q=${encodeURIComponent(product.title)}`}
                    className="d-flex align-items-center p-3 text-decoration-none text-dark border-bottom search-suggestion-item"
                    onClick={handleSuggestionClick}
                    style={{ transition: 'background-color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                  >
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="rounded me-3"
                      style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                    />
                    <div className="flex-grow-1">
                      <div className="fw-semibold mb-1">{product.title}</div>
                      <div className="d-flex align-items-center gap-2">
                        <span className="text-primary fw-bold">S/ {product.price}</span>
                        <span className="badge bg-light text-dark">{product.category}</span>
                      </div>
                    </div>
                    <i className="bi bi-arrow-right text-muted"></i>
                  </Link>
                ))}
                <Link
                  to={`/buscar?q=${encodeURIComponent(searchQuery)}`}
                  className="d-block p-3 text-center text-primary text-decoration-none fw-semibold"
                  onClick={handleSuggestionClick}
                  style={{ transition: 'background-color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  Ver todos los resultados para "{searchQuery}" <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            )}
          </div>

          <ul className="navbar-nav align-items-lg-center gap-lg-2">
            <li className="nav-item"><Link className="nav-link" to="/ofertas">Ofertas</Link></li>
            <li className="nav-item"><a className="nav-link" href="#">Vender</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Ayuda</a></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Ingresa</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register">Registrar</Link></li>
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/carrito" aria-label="Carrito de compras">
                <i className="bi bi-cart3 fs-5"></i>
                {getCartCount() > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {getCartCount()}
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
