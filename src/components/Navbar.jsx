import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(searchQuery.trim())}`);
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

          <form className="d-flex flex-grow-1 me-lg-3" role="search" aria-label="Buscador general" onSubmit={handleSearch}>
            <input 
              className="form-control form-control-lg me-2 rounded-pill search-input" 
              type="search" 
              placeholder="Buscar productos, marcas y más…" 
              aria-label="Buscar"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-primary rounded-pill px-4" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          <ul className="navbar-nav align-items-lg-center gap-lg-2">
            <li className="nav-item"><Link className="nav-link" to="/ofertas">Ofertas</Link></li>
            <li className="nav-item"><a className="nav-link" href="#">Vender</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Ayuda</a></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Ingresa</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/register">Registrar</Link></li>
            <li className="nav-item">
              <a className="nav-link position-relative" href="#" aria-label="Carrito de compras">
                <i className="bi bi-cart3 fs-5"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">0</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
