import CategoryPage from './CategoryPage';

/**
 * Página de Tecnología
 * --------------------
 * Configura los datos específicos para la categoría de gadgets y dispositivos.
 * Define la lista de productos y sus subcategorías (Laptops, Smartphones, etc.)
 * y utiliza el componente genérico CategoryPage para mostrarlos.
 */
const TecnologiaPage = () => {
  const category = {
    name: 'Tecnología',
    icon: 'bi-laptop',
    description: 'Los mejores dispositivos tecnológicos para tu día a día',
    subcategories: ['Laptops', 'Smartphones', 'Tablets', 'Audio', 'Smart Home', 'Cámaras', 'Wearables', 'Accesorios']
  };

  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop',
      title: 'MacBook Pro 14" M3',
      price: '6999.90',
      discount: null,
      badge: 'NUEVO',
      subcategory: 'Laptops'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop',
      title: 'Laptop Dell XPS 15',
      price: '4499.90',
      discount: '4999.90',
      badge: 'OFERTA',
      subcategory: 'Laptops'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop',
      title: 'iPhone 15 Pro Max',
      price: '4999.90',
      discount: null,
      badge: 'DESTACADO',
      subcategory: 'Smartphones'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop',
      title: 'Samsung Galaxy S24 Ultra',
      price: '4299.90',
      discount: '4699.90',
      badge: 'OFERTA',
      subcategory: 'Smartphones'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=800&auto=format&fit=crop',
      title: 'iPad Pro 12.9"',
      price: '3999.90',
      discount: null,
      badge: null,
      subcategory: 'Tablets'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?q=80&w=800&auto=format&fit=crop',
      title: 'Samsung Galaxy Tab S9',
      price: '2499.90',
      discount: '2899.90',
      badge: 'OFERTA',
      subcategory: 'Tablets'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
      title: 'AirPods Pro 2',
      price: '899.90',
      discount: null,
      badge: 'NUEVO',
      subcategory: 'Audio'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop',
      title: 'Apple Watch Series 9',
      price: '1699.90',
      discount: '1899.90',
      badge: 'OFERTA',
      subcategory: 'Wearables'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1572635196184-84e35138cf62?q=80&w=800&auto=format&fit=crop',
      title: 'Speaker Inteligente Alexa',
      price: '299.90',
      discount: null,
      badge: null,
      subcategory: 'Smart Home'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop',
      title: 'Cámara Deportiva 4K',
      price: '899.90',
      discount: '1099.90',
      badge: 'OFERTA',
      subcategory: 'Cámaras'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1585790050230-5dd28404f398?q=80&w=800&auto=format&fit=crop',
      title: 'Drone con Cámara 4K',
      price: '1499.90',
      discount: null,
      badge: 'DESTACADO',
      subcategory: 'Cámaras'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop',
      title: 'Power Bank 20000mAh',
      price: '129.90',
      discount: '179.90',
      badge: 'OFERTA',
      subcategory: 'Accesorios'
    }
  ];

  return <CategoryPage category={category} products={products} />;
};

export default TecnologiaPage;
