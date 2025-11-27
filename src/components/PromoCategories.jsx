import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente PromoCategories
 * --------------------------
 * Muestra tarjetas grandes con las categorías principales (Gaming, Tecnología, etc.).
 * Incluye animaciones de entrada (fade-in) cuando el usuario hace scroll hacia ellas.
 */
const PromoCategories = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    revealRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      revealRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  return (
    <section className="py-5">
      <div className="container-xl">
        <div className="row g-3 mb-4">
          <div className="col-12 col-lg-4">
            <Link 
              ref={addToRefs}
              className="promo-card reveal" 
              to="/categoria/gaming" 
              style={{ '--img': "url('https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=1400&auto=format&fit=crop')" }}
            >
              <div className="promo-content">
                <h4 className="promo-title">Gaming</h4>
                <p className="promo-desc">Todo para gamers</p>
                <span className="promo-link">Explorar →</span>
              </div>
            </Link>
          </div>
          <div className="col-12 col-lg-4">
            <Link 
              ref={addToRefs}
              className="promo-card reveal" 
              to="/categoria/libros" 
              style={{ '--img': "url('https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=1400&auto=format&fit=crop')" }}
            >
              <div className="promo-content">
                <h4 className="promo-title">Libros</h4>
                <p className="promo-desc">Lee sin límites</p>
                <span className="promo-link">Ver colección →</span>
              </div>
            </Link>
          </div>
          <div className="col-12 col-lg-4">
            <Link 
              ref={addToRefs}
              className="promo-card reveal" 
              to="/categoria/supermercado" 
              style={{ '--img': "url('https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=1400&auto=format&fit=crop')" }}
            >
              <div className="promo-content">
                <h4 className="promo-title">Supermercado</h4>
                <p className="promo-desc">Ahorra en tu despensa</p>
                <span className="promo-link">Comprar →</span>
              </div>
            </Link>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="section-title m-0 mb-4">Categorías</h3>
        </div>
        
        <div className="row g-4">
          <div className="col-6 col-md-3">
            <Link ref={addToRefs} className="category-card reveal" to="/categoria/gaming">
              <div className="category-card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600&auto=format&fit=crop')" }}></div>
              <div className="category-card-content">
                <h5 className="category-card-title">Gaming</h5>
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-3">
            <Link ref={addToRefs} className="category-card reveal" to="/categoria/tecnologia">
              <div className="category-card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=600&auto=format&fit=crop')" }}></div>
              <div className="category-card-content">
                <h5 className="category-card-title">Tecnología</h5>
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-3">
            <Link ref={addToRefs} className="category-card reveal" to="/categoria/supermercado">
              <div className="category-card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=600&auto=format&fit=crop')" }}></div>
              <div className="category-card-content">
                <h5 className="category-card-title">Supermercado</h5>
              </div>
            </Link>
          </div>
          <div className="col-6 col-md-3">
            <Link ref={addToRefs} className="category-card reveal" to="/categoria/libros">
              <div className="category-card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1528207776546-365bb710ee93?q=80&w=600&auto=format&fit=crop')" }}></div>
              <div className="category-card-content">
                <h5 className="category-card-title">Libros</h5>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoCategories;
