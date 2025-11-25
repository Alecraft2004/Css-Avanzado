import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BestSellers from '../components/BestSellers';
import PromoCategories from '../components/PromoCategories';
import Footer from '../components/Footer';

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
