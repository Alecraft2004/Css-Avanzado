import CategoryPage from './CategoryPage';

/**
 * Página de Gaming
 * ----------------
 * Configura los datos específicos para la categoría de videojuegos.
 * Utiliza el componente genérico CategoryPage conectado a la API.
 */
const GamingPage = () => {
  const categoryInfo = {
    name: 'Gaming',
    icon: 'bi-controller',
    description: 'Todo lo que necesitas para tu setup gaming profesional',
    subcategories: ['PC Gaming', 'Consolas', 'Accesorios', 'Periféricos', 'Sillas']
  };

  return <CategoryPage customSlug="gaming" customCategoryInfo={categoryInfo} />;
};

export default GamingPage;