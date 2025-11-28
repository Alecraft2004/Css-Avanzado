// index.js
const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// ---------- RUTA: REGISTRO DE USUARIO ----------
app.post('/api/usuarios/register', async (req, res) => {
  try {
    const { nombre, apellido, email, password, telefono, aceptaTerminos } = req.body;

    const result = await pool.query(
      `INSERT INTO usuarios (nombre, apellido, email, password_hash, telefono, acepta_terminos)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, nombre, apellido, email`,
      [nombre, apellido, email, password, telefono, aceptaTerminos]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    if (err.code === '23505') {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
});

// ---------- RUTA: LOGIN DE USUARIO ----------
app.post('/api/usuarios/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Buscar al usuario por email
    const result = await pool.query(
      'SELECT * FROM usuarios WHERE email = $1',
      [email]
    );

    if (result.rows.length === 0) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    const user = result.rows[0];

    // 2. Verificar contraseña
    // Nota: Actualmente se compara en texto plano porque así se guarda en el registro.
    // Lo ideal sería usar bcrypt para hashear contraseñas.
    if (user.password_hash !== password) {
      return res.status(400).json({ message: 'Credenciales inválidas' });
    }

    // 3. Responder con éxito
    res.json({
      message: 'Login exitoso',
      user: {
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email
      }
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error en el servidor al iniciar sesión' });
  }
});

// ---------- RUTA: LISTAR PRODUCTOS ----------
app.get('/api/productos', async (req, res) => {
  try {
    const { categoria } = req.query;
    let queryText = `SELECT p.*, p.imagen_principal as "imagenPrincipal" FROM productos p`;
    const queryParams = [];

    if (categoria) {
      queryText += ` JOIN categorias c ON p.categoria_id = c.id WHERE c.slug = $1`;
      queryParams.push(categoria);
    }

    queryText += ` ORDER BY p.id DESC`;

    const result = await pool.query(queryText, queryParams);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener productos', error: err.message });
  }
});

// ---------- RUTA: CREAR PRODUCTO ----------
app.post('/api/productos', async (req, res) => {
  try {
    console.log('POST /api/productos - Body:', req.body);
    const {
      vendedorId,
      categoriaId,
      subcategoriaId,
      titulo,
      descripcion,
      precio,
      precioOriginal,
      badge,
      stock,
      estado,
      imagenPrincipal
    } = req.body;

    const result = await pool.query(
      `INSERT INTO productos
       (vendedor_id, categoria_id, subcategoria_id, titulo, descripcion,
        precio, precio_original, badge, stock, estado, imagen_principal)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
       RETURNING id, titulo, precio`,
      [
        vendedorId,
        categoriaId,
        subcategoriaId,
        titulo,
        descripcion,
        precio,
        precioOriginal,
        badge,
        stock || 1,
        estado || 'Nuevo',
        imagenPrincipal
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al crear producto', error: err.message });
  }
});

// ---------- RUTA: SETUP (CREAR CATEGORÍAS Y COLUMNAS) ----------
app.get('/api/setup', async (req, res) => {
  try {
    // 1. Crear categorías
    await pool.query(`
      INSERT INTO categorias (id, nombre, slug) VALUES 
      (1, 'Gaming', 'gaming'), 
      (2, 'Tecnología', 'tecnologia'), 
      (3, 'Supermercado', 'supermercado'), 
      (4, 'Libros', 'libros'), 
      (5, 'Otros', 'otros') 
      ON CONFLICT (id) DO NOTHING
    `);

    // 2. Crear tabla subcategorias si no existe
    await pool.query(`
      CREATE TABLE IF NOT EXISTS subcategorias (
        id SERIAL PRIMARY KEY,
        categoria_id INTEGER REFERENCES categorias(id),
        nombre VARCHAR(100) NOT NULL
      )
    `);

    // 3. Insertar subcategorías (solo si está vacía para evitar duplicados simples)
    const subCount = await pool.query('SELECT count(*) FROM subcategorias');
    if (parseInt(subCount.rows[0].count) === 0) {
       await pool.query(`INSERT INTO subcategorias (categoria_id, nombre) VALUES 
        (1, 'PC Gaming'), (1, 'Consolas'), (1, 'Accesorios'), (1, 'Periféricos'), (1, 'Sillas'),
        (2, 'Laptops'), (2, 'Smartphones'), (2, 'Tablets'), (2, 'Audio'), (2, 'Cámaras'),
        (3, 'Despensa'), (3, 'Bebidas'), (3, 'Limpieza'), (3, 'Cuidado Personal'), (3, 'Mascotas'),
        (4, 'Ficción'), (4, 'No Ficción'), (4, 'Infantil'), (4, 'Educación'), (4, 'Comics')
      `);
    }

    // 4. Asegurar que existe la columna imagen_principal
    await pool.query(`
      ALTER TABLE productos 
      ADD COLUMN IF NOT EXISTS imagen_principal TEXT
    `);

    res.send('Setup completado: Categorías y Subcategorías creadas.');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error en setup: ' + err.message);
  }
});

// ---------- RUTA: OBTENER PRODUCTOS POR USUARIO ----------
app.get('/api/productos/usuario/:vendedorId', async (req, res) => {
  try {
    const { vendedorId } = req.params;
    const result = await pool.query(
      `SELECT *, imagen_principal as "imagenPrincipal" FROM productos WHERE vendedor_id = $1 ORDER BY id DESC`,
      [vendedorId]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al obtener productos del usuario', error: err.message });
  }
});

// ---------- RUTA: ACTUALIZAR PRODUCTO ----------
app.put('/api/productos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descripcion, precio, precioOriginal, stock, estado, imagenPrincipal, categoriaId, subcategoriaId } = req.body;

    const result = await pool.query(
      `UPDATE productos
       SET titulo = $1, descripcion = $2, precio = $3, precio_original = $4, stock = $5, estado = $6, imagen_principal = $7, categoria_id = $8, subcategoria_id = $9
       WHERE id = $10
       RETURNING *`,
      [titulo, descripcion, precio, precioOriginal, stock, estado, imagenPrincipal, categoriaId, subcategoriaId, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al actualizar producto', error: err.message });
  }
});

// ---------- RUTA: ELIMINAR PRODUCTO ----------
app.delete('/api/productos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM productos WHERE id = $1 RETURNING id', [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    res.json({ message: 'Producto eliminado correctamente' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al eliminar producto', error: err.message });
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
