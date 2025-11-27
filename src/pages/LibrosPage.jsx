import CategoryPage from './CategoryPage';

/**
 * Página de Libros
 * ----------------
 * Configura los datos específicos para la categoría de lectura.
 * Define la lista de libros y sus géneros (Ficción, No Ficción, etc.)
 * y utiliza el componente genérico CategoryPage para mostrarlos.
 */
const LibrosPage = () => {
  const category = {
    name: 'Libros',
    icon: 'bi-book',
    description: 'Explora nuestra colección de libros y encuentra tu próxima lectura',
    subcategories: ['Ficción', 'No Ficción', 'Educación', 'Infantil', 'Cómics']
  };

  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop',
      title: 'El Principito - Edición Especial',
      price: '49.90',
      discount: '69.90',
      badge: 'OFERTA',
      subcategory: 'Infantil'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop',
      title: 'Cien Años de Soledad',
      price: '59.90',
      discount: null,
      badge: 'DESTACADO',
      subcategory: 'Ficción'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?q=80&w=800&auto=format&fit=crop',
      title: 'Harry Potter - Colección Completa',
      price: '399.90',
      discount: '499.90',
      badge: 'OFERTA',
      subcategory: 'Infantil'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=800&auto=format&fit=crop',
      title: 'El Arte de la Guerra',
      price: '39.90',
      discount: null,
      badge: null,
      subcategory: 'No Ficción'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop',
      title: 'Sapiens: De animales a dioses',
      price: '79.90',
      discount: '99.90',
      badge: 'OFERTA',
      subcategory: 'No Ficción'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=800&auto=format&fit=crop',
      title: 'Don Quijote de la Mancha',
      price: '69.90',
      discount: null,
      badge: 'NUEVO',
      subcategory: 'Ficción'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=800&auto=format&fit=crop',
      title: '1984 - George Orwell',
      price: '44.90',
      discount: '59.90',
      badge: 'OFERTA',
      subcategory: 'Ficción'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop',
      title: 'El Señor de los Anillos - Trilogía',
      price: '199.90',
      discount: null,
      badge: 'DESTACADO',
      subcategory: 'Ficción'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop',
      title: 'Orgullo y Prejuicio',
      price: '49.90',
      discount: '69.90',
      badge: 'OFERTA',
      subcategory: 'Ficción'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=800&auto=format&fit=crop',
      title: 'Crimen y Castigo',
      price: '54.90',
      discount: null,
      badge: null,
      subcategory: 'Ficción'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?q=80&w=800&auto=format&fit=crop',
      title: 'Rayuela - Julio Cortázar',
      price: '59.90',
      discount: '79.90',
      badge: 'OFERTA',
      subcategory: 'Ficción'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop',
      title: 'La Sombra del Viento',
      price: '64.90',
      discount: null,
      badge: 'NUEVO',
      subcategory: 'Ficción'
    }
  ];

  return <CategoryPage category={category} products={products} />;
};

export default LibrosPage;
