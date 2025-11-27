# 🛒 NeoMarket - Tu Tienda Virtual en React

¡Bienvenido a **NeoMarket**! Este proyecto es una simulación completa de una tienda en línea moderna (e-commerce). Está diseñado para ser fácil de entender y demostrar cómo funcionan las aplicaciones web profesionales hoy en día.

## 🌟 ¿Qué hace este proyecto?

Esta aplicación permite a los usuarios vivir una experiencia de compra completa:
- **Explorar Productos**: Navegar por diferentes categorías como Gaming, Tecnología, Supermercado y Libros.
- **Filtrar**: Dentro de cada categoría, puedes filtrar los productos (por ejemplo, ver solo "Consolas" en la sección de Gaming).
- **Buscar**: Una barra de búsqueda funcional que encuentra productos por nombre o categoría.
- **Carrito de Compras**: Puedes agregar productos al carrito. ¡El carrito "recuerda" tus productos incluso si recargas la página!
- **Ofertas**: Una sección especial para productos con descuento.

## 📂 Estructura del Proyecto (Explicada)

El código está organizado de manera lógica. Aquí te explico qué hay en cada carpeta para que no te pierdas:

### `src/` (Código Fuente)
Es donde vive todo el código de la aplicación.

- **`components/` (Componentes)**: Son las "piezas de LEGO" reutilizables de nuestra app.
  - `Navbar.jsx`: La barra de navegación superior.
  - `ProductCard.jsx`: El diseño de la tarjeta que muestra la foto, precio y botón de cada producto.
  - `Footer.jsx`: El pie de página con información de contacto.
  - `Hero.jsx`: El banner grande y llamativo de la página de inicio.

- **`pages/` (Páginas)**: Son las pantallas completas que ve el usuario.
  - `Home.jsx`: La página principal.
  - `CartPage.jsx`: La pantalla del carrito de compras donde ves el total a pagar.
  - `GamingPage.jsx`, `TecnologiaPage.jsx`, etc.: Páginas específicas para cada categoría de productos.
  - `SearchPage.jsx`: La página que muestra los resultados cuando buscas algo.

- **`context/` (El "Cerebro")**:
  - `CartContext.jsx`: Aquí vive la lógica del carrito. Maneja la lista de productos guardados, suma los precios y guarda la información en la memoria del navegador (`localStorage`) para que no se pierda.

- **`App.jsx`**: Es el "mapa" de la aplicación. Define qué página mostrar según la dirección web (URL) en la que estés (por ejemplo, si vas a `/carrito`, muestra `CartPage`).

## 🚀 Funcionalidades Destacadas

### 1. Filtros de Categoría
En páginas como **Tecnología** o **Gaming**, verás botones en la parte superior (ej. "Laptops", "Smartphones"). Al hacer clic, la página se actualiza instantáneamente para mostrar solo esos productos. Esto se logra usando el "estado" de React (`useState`) para filtrar la lista de productos.

### 2. Carrito Persistente
¿Te ha pasado que recargas una página y tu carrito se vacía? ¡Aquí no! Usamos `localStorage` para guardar tu carrito en tu propio navegador.
- **Agregar**: Suma productos o incrementa la cantidad si ya existe.
- **Eliminar**: Quita productos o reduce la cantidad.
- **Cálculos**: Calcula automáticamente el subtotal, impuestos y total.

### 3. Búsqueda Global
La barra de búsqueda en el menú superior te lleva a una página de resultados que busca coincidencias tanto en el nombre del producto como en su categoría.

## 🛠️ Tecnologías Utilizadas

- **React 19**: La biblioteca principal para construir la interfaz.
- **React Router**: Para navegar entre páginas sin recargar el sitio.
- **Bootstrap 5**: Para el diseño visual (columnas, botones, tarjetas) y que se vea bien en móviles.
- **Bootstrap Icons**: Para los iconos de carrito, usuario, búsqueda, etc.
- **Vite**: La herramienta que hace que el entorno de desarrollo sea súper rápido.

## 💻 Cómo ejecutar el proyecto

Si quieres probarlo en tu computadora:

1. **Instalar las dependencias** (las librerías que necesita el proyecto):
   ```powershell
   npm install
   ```

2. **Iniciar el servidor de desarrollo**:
   ```powershell
   npm run dev
   ```
   Esto abrirá una dirección local (normalmente `http://localhost:5173`) donde podrás ver la tienda funcionando.

---
*Desarrollado con ❤️ para aprender React.*

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
