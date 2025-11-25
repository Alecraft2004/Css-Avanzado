import { useEffect, useState } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="py-5 border-top bg-body-tertiary mt-4">
      <div className="container-xl">
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <h5 className="fw-bold mb-3">NeoMarket</h5>
            <p className="text-body-secondary">Tu marketplace de confianza.</p>
          </div>
          <div className="col-6 col-md-3">
            <h6 className="fw-semibold mb-3">Compra</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#" className="text-body-secondary text-decoration-none">Ofertas</a></li>
              <li className="mb-2"><a href="#" className="text-body-secondary text-decoration-none">Historial</a></li>
              <li className="mb-2"><a href="#" className="text-body-secondary text-decoration-none">Ayuda</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-3">
            <h6 className="fw-semibold mb-3">Vende</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#" className="text-body-secondary text-decoration-none">Publicar</a></li>
              <li className="mb-2"><a href="#" className="text-body-secondary text-decoration-none">Costos</a></li>
              <li className="mb-2"><a href="#" className="text-body-secondary text-decoration-none">Aprende a vender</a></li>
            </ul>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center pt-3 mt-3 border-top">
          <small className="text-body-secondary">© {year} NeoMarket</small>
          <div className="d-flex gap-3">
            <a href="#" className="text-body-secondary"><i className="bi bi-facebook"></i></a>
            <a href="#" className="text-body-secondary"><i className="bi bi-twitter"></i></a>
            <a href="#" className="text-body-secondary"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
