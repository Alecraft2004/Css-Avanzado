import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PromoCategories from '../components/PromoCategories';
import Footer from '../components/Footer';
import BestSellers from '../components/BestSellers';
import { useEffect, useState } from 'react';
import { getProductos } from '../api/client';

/**
 * Página de Inicio (Home)
 * -----------------------
 * Es la página principal de la aplicación.
 * Actúa como un contenedor que organiza los componentes principales:
 * - Hero (Banner principal)
 * - BestSellers (Carrusel de más vendidos)
 * - PromoCategories (Accesos directos a categorías)
 * - Offers (Sección de ofertas)
 */
const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProductos();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filtramos productos para BestSellers (simulamos que son los primeros 8)
  const bestSellers = products.slice(0, 8);

  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      
      {loading ? (
        <div className="text-center py-5">Cargando contenido...</div>
      ) : (
        <>
          <BestSellers products={bestSellers} />
          <PromoCategories />
        </>
      )}

      <Footer />
    </>
  );
};

export default Home;
