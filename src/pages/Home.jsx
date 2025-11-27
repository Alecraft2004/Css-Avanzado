import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BestSellers from '../components/BestSellers';
import PromoCategories from '../components/PromoCategories';
import Footer from '../components/Footer';

/**
 * Página de Inicio (Home)
 * -----------------------
 * Es la página principal de la aplicación.
 * Actúa como un contenedor que organiza los componentes principales:
 * - Hero (Banner principal)
 * - BestSellers (Carrusel de más vendidos)
 * - PromoCategories (Accesos directos a categorías)
 */
const Home = () => {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <BestSellers />
      <PromoCategories />
      <Footer />
    </>
  );
};

export default Home;
