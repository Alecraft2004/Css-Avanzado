
(function(){
  // año en el footer
  const yearEl = document.getElementById('year');
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  // buscamos todos los elementos con la clase .reveal
  const revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    // observador: muestra el elemento cuando aparece en pantalla
    // Umbral bajo para activar la animación pronto sin ser abrupta
    const io = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { root: null, threshold: 0.12 });
    revealEls.forEach(el=> io.observe(el));
  }else{
    // Fallback: si no hay soporte, mostramos todo sin animación
    revealEls.forEach(el=> el.classList.add('is-visible'));
  }
})();
