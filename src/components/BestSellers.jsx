import { useState } from 'react';
import ProductCard from './ProductCard';

const BestSellers = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const products = [
    {
      image: 'https://images.unsplash.com/photo-1593640495253-23196b27a87f?q=80&w=400&auto=format&fit=crop',
      title: 'Auriculares Pro X',
      price: '349',
      discount: '450',
      badge: 'OFERTA'
    },
    {
      image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=400&auto=format&fit=crop',
      title: 'Smartwatch Series 8',
      price: '1299',
      discount: '1499'
    },
    {
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=400&auto=format&fit=crop',
      title: 'Gafas de Sol UV',
      price: '159',
      badge: 'NUEVO'
    },
    {
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=400&auto=format&fit=crop',
      title: 'Parlante Bluetooth',
      price: '249',
      discount: '320'
    },
    {
      image: 'https://images.unsplash.com/photo-1598024055266-e772a5f8c128?q=80&w=400&auto=format&fit=crop',
      title: 'Smartwatch Band Plus',
      price: '899',
      discount: '999',
      badge: '10% OFF'
    },
    {
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop',
      title: 'Reloj Clásico',
      price: '499'
    },
    {
      image: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=400&auto=format&fit=crop',
      title: 'Perfume Elegance',
      price: '279',
      badge: 'DESTACADO'
    },
    {
      image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=400&auto=format&fit=crop',
      title: 'Mouse Gamer RGB',
      price: '119',
      discount: '159'
    }
  ];

  const chunk1 = products.slice(0, 4);
  const chunk2 = products.slice(4, 8);
    const slides = [chunk1, chunk2];

    const nextSlide = () => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
      setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

  return (
      <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
      <div className="container-xl">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h3 className="section-title m-0">Más vendidos de la semana</h3>
          <a className="link-primary" href="#">Ver más</a>
        </div>

        <div className="custom-carousel-wrapper">
          <div className="custom-carousel">
            {slides.map((slideProducts, slideIndex) => (
              <div
                key={slideIndex}
                className={`custom-carousel-slide ${slideIndex === activeSlide ? 'active' : ''}`}
                style={{ display: slideIndex === activeSlide ? 'block' : 'none' }}
              >
                <div className="row g-4">
                  {slideProducts.map((product, index) => (
                    <div key={index} className="col-6 col-md-3">
                      <ProductCard {...product} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
            
          <button 
            className="custom-carousel-control custom-carousel-prev" 
            onClick={prevSlide}
            aria-label="Anterior"
          >
            <i className="bi bi-chevron-left"></i>
            </button>
            
          <button 
            className="custom-carousel-control custom-carousel-next" 
            onClick={nextSlide}
            aria-label="Siguiente"
          >
            <i className="bi bi-chevron-right"></i>
            </button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
