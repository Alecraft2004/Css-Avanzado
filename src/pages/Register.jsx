import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

/**
 * Página de Registro (Register)
 * -----------------------------
 * Muestra el formulario para crear una nueva cuenta de usuario.
 * Incluye campos para nombre, correo y contraseña.
 */
const Register = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de registro aquí
  };

  return (
    <div className="bg-light-subtle d-flex flex-column min-vh-100">
      <div className="topbar text-center small py-1">Crea tu cuenta en NeoMarket</div>
      <main className="container py-5 flex-grow-1">
        <div className="row justify-content-center">
          <div className="col-12 col-md-7 col-lg-6">
            <div className="card shadow-sm border-0 rounded-4">
              <div className="card-body p-4 p-md-5">
                <h1 className="h4 mb-4 text-center fw-bold">Registro</h1>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="nombre" className="form-label">Nombre</label>
                      <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" required />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="apellido" className="form-label">Apellido</label>
                      <input type="text" className="form-control" id="apellido" placeholder="Tu apellido" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Correo electrónico</label>
                      <input type="email" className="form-control" id="email" placeholder="tu@correo.com" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">Contraseña</label>
                      <input type="password" className="form-control" id="password" placeholder="Mínimo 6 caracteres" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="password2" className="form-label">Repetir contraseña</label>
                      <input type="password" className="form-control" id="password2" placeholder="Confirma tu contraseña" required />
                    </div>
                    <div className="col-12">
                      <label htmlFor="telefono" className="form-label">Teléfono (opcional)</label>
                      <input type="tel" className="form-control" id="telefono" placeholder="Ej: 999999999" />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="terminos" required />
                        <label className="form-check-label" htmlFor="terminos">
                          Acepto los <a href="#">términos y condiciones</a>
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100 rounded-pill py-2">Crear cuenta</button>
                    </div>
                  </div>
                </form>
                <p className="text-center mt-4 mb-0 small">
                  ¿Ya tienes cuenta? <Link to="/login">Ingresa</Link>
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

export default Register;
