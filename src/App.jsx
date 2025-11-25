import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import OffersPage from './pages/OffersPage';
import SearchPage from './pages/SearchPage';
import GamingPage from './pages/GamingPage';
import TecnologiaPage from './pages/TecnologiaPage';
import SupermercadoPage from './pages/SupermercadoPage';
import LibrosPage from './pages/LibrosPage';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buscar" element={<SearchPage />} />
        <Route path="/ofertas" element={<OffersPage />} />
        <Route path="/categoria/gaming" element={<GamingPage />} />
        <Route path="/categoria/tecnologia" element={<TecnologiaPage />} />
        <Route path="/categoria/supermercado" element={<SupermercadoPage />} />
        <Route path="/categoria/libros" element={<LibrosPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
