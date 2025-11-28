import CategoryPage from './CategoryPage';

/**
 * Página de Supermercado
 * ----------------------
 * Configura los datos específicos para la categoría de supermercado.
 * Utiliza el componente genérico CategoryPage conectado a la API.
 */
const SupermercadoPage = () => {
  const categoryInfo = {
    name: 'Supermercado',
    icon: 'bi-cart4',
    description: 'Productos esenciales para tu hogar al mejor precio',
    subcategories: ['Despensa', 'Bebidas', 'Limpieza', 'Cuidado Personal', 'Mascotas']
  };

  return <CategoryPage customSlug="supermercado" customCategoryInfo={categoryInfo} />;
};

export default SupermercadoPage;