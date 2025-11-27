import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

/**
 * Página de Inicio de Sesión (Login)
 * ----------------------------------
 * Muestra el formulario para que los usuarios ingresen a su cuenta.
 * (Actualmente es una interfaz visual, no conecta con un backend real).
 */
const Login = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de login aquí
  };

  return (
    <div className="bg-light-subtle d-flex flex-column min-vh-100">
      <div className="topbar text-center small py-1">Bienvenido a NeoMarket</div>
      <main className="container py-5 flex-grow-1">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 col-lg-5">
            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body p-4 p-md-5">
                <h1 className="h4 mb-4 text-center fw-bold">Iniciar sesión</h1>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo electrónico</label>
                    <input type="email" className="form-control" id="email" placeholder="tu@correo.com" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="password" placeholder="••••••" required />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="recordar" />
                      <label className="form-check-label" htmlFor="recordar">Recordarme</label>
                    </div>
                    <a href="#" className="small">¿Olvidaste tu contraseña?</a>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 rounded-pill py-2">Ingresar</button>
                </form>
                <p className="text-center mt-4 mb-0 small">
                  ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
                </p>
                <div className="text-center mt-3">
                  <Link to="/" className="small">← Volver al inicio</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-4 text-center small text-body-secondary">
        © {year} NeoMarket
      </footer>
    </div>
  );
};

export default Login;
