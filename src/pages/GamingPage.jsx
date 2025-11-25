import CategoryPage from './CategoryPage';

const GamingPage = () => {
  const category = {
    name: 'Gaming',
    icon: 'bi-controller',
    description: 'Todo lo que necesitas para tu setup gaming profesional',
    subcategories: ['PC Gaming', 'Consolas', 'Accesorios', 'Periféricos', 'Sillas']
  };

  const products = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=800&auto=format&fit=crop',
      title: 'Silla Gaming Ergonómica',
      price: '599.90',
      discount: '799.90',
      badge: 'NUEVO'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=800&auto=format&fit=crop',
      title: 'PC Gaming RTX 4070',
      price: '4999.90',
      discount: null,
      badge: 'DESTACADO'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=800&auto=format&fit=crop',
      title: 'PlayStation 5 Digital',
      price: '2199.90',
      discount: '2499.90',
      badge: 'OFERTA'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=800&auto=format&fit=crop',
      title: 'Xbox Series X',
      price: '2299.90',
      discount: null,
      badge: null
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800&auto=format&fit=crop',
      title: 'Mouse Gaming RGB Pro',
      price: '149.90',
      discount: '199.90',
      badge: 'OFERTA'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop',
      title: 'Teclado Mecánico RGB',
      price: '299.90',
      discount: null,
      badge: 'NUEVO'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop',
      title: 'Auriculares Gaming 7.1',
      price: '249.90',
      discount: '349.90',
      badge: 'OFERTA'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1625758452550-97b4f3c0c3bb?q=80&w=800&auto=format&fit=crop',
      title: 'Monitor Gaming 144Hz 27"',
      price: '899.90',
      discount: null,
      badge: 'DESTACADO'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=800&auto=format&fit=crop',
      title: 'Cámara Streaming 4K',
      price: '299.90',
      discount: '399.90',
      badge: 'OFERTA'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop',
      title: 'Micrófono USB Profesional',
      price: '199.90',
      discount: null,
      badge: null
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1616588589676-62b3bd4ff6d2?q=80&w=800&auto=format&fit=crop',
      title: 'Pad Gaming XXL',
      price: '49.90',
      discount: '69.90',
      badge: 'OFERTA'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop',
      title: 'Luces LED RGB Setup',
      price: '89.90',
      discount: null,
      badge: 'NUEVO'
    }
  ];

  return <CategoryPage category={category} products={products} />;
};

export default GamingPage;
