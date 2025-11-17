# NeoMarket — Landing tipo marketplace

Página estática elegante y llamativa inspirada en marketplaces modernos, construida con HTML + CSS + Bootstrap 5, animaciones y compatibilidad multi‑navegador.

## Mapa de archivos
- `index.html`: estructura principal con Navbar, Hero (carrusel), "Más vendidos", Promos y Categorías, y Footer.
- `css/styles.css`: variables, layout base, componentes (hero, product cards, promo banners, categorías), animaciones y utilidades.
- `js/main.js`: inserta año actual y revela elementos al hacer scroll con `IntersectionObserver` (incluye fallback).

## Cómo ejecutar (Windows / PowerShell)
No requiere backend. Puedes abrir `index.html` directamente o usar un servidor local para una experiencia más fiel:

```powershell
# Ir a la carpeta del proyecto
Set-Location "e:\Proyecto Css"

# Servidor simple (si tienes Python)
python -m http.server 8080 ; Start-Process "http://localhost:8080/index.html"
```

## Guía rápida de estilos
- Variables en `:root` (`--brand`, `--brand-2`, `--radius-lg`) centralizan colores y radios.
- Micro‑interacciones: elevación y zoom en `.card.product`, desplazamiento suave en `.category-row`.
- Animaciones: `fadeUp` y clase utilitaria `.reveal` para aparición progresiva en scroll.
- Accesibilidad: `@media (prefers-reduced-motion: reduce)` desactiva animaciones para quien lo prefiera.

## Compatibilidad
- Bootstrap 5 (CDN) para responsive y componentes.
- Prefijos `-webkit-` añadidos en transform/animation donde es útil.
- Fallback si no existe `IntersectionObserver` (los elementos se muestran sin animación).

## Personalización
- Cambia la paleta en `css/styles.css` (sección `:root`).
- Sustituye imágenes (se usan placeholders de Unsplash) por assets propios.
- Ajusta productos/textos en `index.html` o carga datos desde JSON (ver Ideas de mejora).

## Ideas de mejora (opcionales)
- Modo oscuro con toggle guardado en `localStorage`.
- Mini‑carrito con `localStorage` y contador dinámico.
- Cargar productos desde `products.json` y renderizar con JS.

## Licencias de imágenes
Imágenes de Unsplash usadas como placeholders solo con fines de demo. Reemplázalas por contenido propio para producción.
