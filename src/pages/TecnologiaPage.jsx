import CategoryPage from './CategoryPage';

/**
 * Página de Tecnología
 * --------------------
 * Configura los datos específicos para la categoría de tecnología.
 * Utiliza el componente genérico CategoryPage conectado a la API.
 */
const TecnologiaPage = () => {
  const categoryInfo = {
    name: 'Tecnología',
    icon: 'bi-laptop',
    description: 'Lo último en gadgets, computadoras y dispositivos móviles',
    subcategories: ['Laptops', 'Smartphones', 'Tablets', 'Audio', 'Cámaras']
  };

  return <CategoryPage customSlug="tecnologia" customCategoryInfo={categoryInfo} />;
};

export default TecnologiaPage;