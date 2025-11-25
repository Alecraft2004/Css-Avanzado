# NeoMarket - React Version

Implementación en React de la landing page tipo marketplace NeoMarket, utilizando React Router para la navegación entre páginas.

## 🚀 Tecnologías

- **React 19** - Biblioteca de JavaScript para construir interfaces de usuario
- **React Router DOM** - Enrutamiento para aplicaciones React
- **Bootstrap 5** - Framework CSS para diseño responsivo
- **Bootstrap Icons** - Iconos oficiales de Bootstrap
- **Vite** - Herramienta de compilación rápida

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── TopBar.jsx      # Barra superior con mensaje promocional
│   ├── Navbar.jsx      # Barra de navegación principal
│   ├── Footer.jsx      # Pie de página con enlaces
│   ├── Hero.jsx        # Carrusel principal de promociones
│   ├── ProductCard.jsx # Tarjeta de producto
│   ├── BestSellers.jsx # Sección de productos más vendidos
│   └── PromoCategories.jsx # Promociones y categorías
├── pages/              # Páginas principales
│   ├── Home.jsx       # Página de inicio
│   ├── Login.jsx      # Página de inicio de sesión
│   └── Register.jsx   # Página de registro
├── App.jsx            # Configuración de rutas
├── main.jsx          # Punto de entrada de la aplicación
└── styles.css        # Estilos globales personalizados
```

## 🛠️ Instalación y Uso

### Requisitos previos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

```powershell
# Navegar al directorio del proyecto
cd "c:\workspace\css avanzado\Css React\Css React"

# Instalar dependencias (ya instaladas)
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El servidor estará disponible en `http://localhost:5173` (o el siguiente puerto disponible).

### Scripts disponibles

```powershell
# Desarrollo
npm run dev

# Compilar para producción
npm run build

# Vista previa de la compilación
npm run preview

# Linting
npm run lint
```

## ✨ Características Implementadas

### Navegación
- ✅ React Router con 3 rutas: `/`, `/login`, `/register`
- ✅ Navegación entre páginas sin recargar
- ✅ Links activos en el Navbar

### Componentes
- ✅ TopBar con mensaje promocional
- ✅ Navbar sticky con búsqueda y carrito
- ✅ Hero con carrusel de Bootstrap
- ✅ Tarjetas de productos con badges y hover effects
- ✅ Sección de más vendidos con carrusel
- ✅ Tarjetas promocionales grandes
- ✅ Categorías con scroll horizontal
- ✅ Footer con año dinámico

### Estilos y Animaciones
- ✅ Variables CSS personalizadas
- ✅ Gradientes y sombras modernas
- ✅ Animaciones de scroll reveal usando IntersectionObserver
- ✅ Hover effects en tarjetas y botones
- ✅ Diseño responsive
- ✅ Soporte para prefers-reduced-motion

### Páginas
- ✅ **Home**: Landing completa con todos los componentes
- ✅ **Login**: Formulario de inicio de sesión
- ✅ **Register**: Formulario de registro con validación HTML5

## 🎨 Personalización

### Colores
Los colores principales se definen en `src/styles.css`:

```css
:root {
  --brand: #5a67d8;        /* Color primario */
  --brand-2: #434190;      /* Color secundario */
  --accent: #f56565;       /* Color de acento */
  --text: #2d3748;         /* Color de texto */
  --text-muted: #718096;   /* Texto secundario */
  --bg-light: #f7fafc;     /* Fondo claro */
}
```

### Imágenes
Las imágenes actualmente usan placeholders de Unsplash. Para usar imágenes propias:

1. Coloca tus imágenes en `public/images/`
2. Actualiza las URLs en los componentes
3. Ejemplo: `image="/images/producto1.jpg"`

## 🔧 Próximas Mejoras

- [ ] Implementar modo oscuro con toggle
- [ ] Agregar funcionalidad al carrito de compras
- [ ] Cargar productos desde un archivo JSON o API
- [ ] Agregar paginación a los productos
- [ ] Implementar búsqueda funcional
- [ ] Agregar autenticación real
- [ ] Agregar animaciones con Framer Motion

## 📝 Notas

- Los formularios de Login y Register no tienen backend conectado aún
- El carrito muestra un contador en 0 (funcionalidad pendiente)
- Las búsquedas y filtros son decorativos por ahora
- Todos los enlaces de categorías son anclas (#)

---

**Desarrollado con ❤️ usando React + Vite**
