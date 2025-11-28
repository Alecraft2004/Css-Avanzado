import CategoryPage from './CategoryPage';

/**
 * Página de Libros
 * ----------------
 * Configura los datos específicos para la categoría de libros.
 * Utiliza el componente genérico CategoryPage conectado a la API.
 */
const LibrosPage = () => {
  const categoryInfo = {
    name: 'Libros',
    icon: 'bi-book',
    description: 'Sumérgete en nuevas historias y conocimientos',
    subcategories: ['Ficción', 'No Ficción', 'Infantil', 'Educación', 'Comics']
  };

  return <CategoryPage customSlug="libros" customCategoryInfo={categoryInfo} />;
};

export default LibrosPage;