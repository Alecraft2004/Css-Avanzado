import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { registerUser } from '../api/client';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const navigate = useNavigate();
  const { loginUser } = useAuth();
  
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    password2: '',
    telefono: '',
    aceptaTerminos: false
  });
  const [error, setError] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (formData.password !== formData.password2) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      // Llamada a la API
      const newUser = await registerUser({
        nombre: formData.nombre,
        apellido: formData.apellido,
        email: formData.email,
        password: formData.password,
        telefono: formData.telefono,
        aceptaTerminos: formData.aceptaTerminos
      });
      
      // Auto login tras registro exitoso
      loginUser(newUser);
      navigate('/');
    } catch (err) {
      console.error(err);
      setError('Error al registrar usuario. Intente nuevamente.');
    }
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
                {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label htmlFor="nombre" className="form-label">Nombre</label>
                      <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" required value={formData.nombre} onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="apellido" className="form-label">Apellido</label>
                      <input type="text" className="form-control" id="apellido" placeholder="Tu apellido" required value={formData.apellido} onChange={handleChange} />
                    </div>
                    <div className="col-12">
                      <label htmlFor="email" className="form-label">Correo electrónico</label>
                      <input type="email" className="form-control" id="email" placeholder="tu@correo.com" required value={formData.email} onChange={handleChange} />
                    </div>
                    <div className="col-12">
                      <label htmlFor="password" className="form-label">Contraseña</label>
                      <input type="password" className="form-control" id="password" placeholder="Mínimo 6 caracteres" required value={formData.password} onChange={handleChange} />
                    </div>
                    <div className="col-12">
                      <label htmlFor="password2" className="form-label">Repetir contraseña</label>
                      <input type="password" className="form-control" id="password2" placeholder="Confirma tu contraseña" required value={formData.password2} onChange={handleChange} />
                    </div>
                    <div className="col-12">
                      <label htmlFor="telefono" className="form-label">Teléfono (opcional)</label>
                      <input type="tel" className="form-control" id="telefono" placeholder="Ej: 999999999" value={formData.telefono} onChange={handleChange} />
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="aceptaTerminos" required checked={formData.aceptaTerminos} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="aceptaTerminos">
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
