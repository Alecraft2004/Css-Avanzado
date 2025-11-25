import CategoryPage from './CategoryPage';

const SupermercadoPage = () => {
  const category = {
    name: 'Supermercado',
    icon: 'bi-cart',
    description: 'Encuentra todo lo que necesitas para tu hogar',
    subcategories: ['Alimentos', 'Bebidas', 'Limpieza', 'Cuidado Personal', 'Mascotas']
  };

  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop',
      title: 'Café Premium 500g',
      price: '29.90',
      discount: '39.90',
      badge: 'OFERTA'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=800&auto=format&fit=crop',
      title: 'Aceite de Oliva Extra Virgen',
      price: '49.90',
      discount: null,
      badge: null
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800&auto=format&fit=crop',
      title: 'Pack 12 Vinos Reserva',
      price: '299.90',
      discount: '399.90',
      badge: 'OFERTA'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600803907087-f56d462fd26b?q=80&w=800&auto=format&fit=crop',
      title: 'Detergente Líquido 3L',
      price: '24.90',
      discount: null,
      badge: null
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1585155967548-c0fa0204fbb0?q=80&w=800&auto=format&fit=crop',
      title: 'Shampoo Profesional 400ml',
      price: '39.90',
      discount: '49.90',
      badge: 'OFERTA'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=800&auto=format&fit=crop',
      title: 'Comida Premium para Perros 15kg',
      price: '189.90',
      discount: null,
      badge: 'NUEVO'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1506617420156-8e4536971650?q=80&w=800&auto=format&fit=crop',
      title: 'Pasta Italiana Pack x6',
      price: '34.90',
      discount: '44.90',
      badge: 'OFERTA'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?q=80&w=800&auto=format&fit=crop',
      title: 'Jugo Natural 100% Pack x12',
      price: '59.90',
      discount: null,
      badge: null
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?q=80&w=800&auto=format&fit=crop',
      title: 'Papel Higiénico Premium x24',
      price: '69.90',
      discount: '89.90',
      badge: 'OFERTA'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop',
      title: 'Arroz Premium 5kg',
      price: '29.90',
      discount: null,
      badge: null
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?q=80&w=800&auto=format&fit=crop',
      title: 'Galletas Artesanales Pack x6',
      price: '24.90',
      discount: '34.90',
      badge: 'OFERTA'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1563865436874-9aef32095fad?q=80&w=800&auto=format&fit=crop',
      title: 'Agua Mineral Pack x12',
      price: '19.90',
      discount: null,
      badge: null
    }
  ];

  return <CategoryPage category={category} products={products} />;
};

export default SupermercadoPage;
