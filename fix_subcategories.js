const pool = require('./db');

async function fixSubcategories() {
  try {
    console.log('Cleaning subcategorias table...');
    await pool.query('TRUNCATE TABLE subcategorias RESTART IDENTITY CASCADE');

    console.log('Inserting subcategories with explicit IDs...');
    const query = `
      INSERT INTO subcategorias (id, categoria_id, nombre) VALUES
      (1, 1, 'PC Gaming'), (2, 1, 'Consolas'), (3, 1, 'Accesorios'), (4, 1, 'Periféricos'), (5, 1, 'Sillas'),
      (6, 2, 'Laptops'), (7, 2, 'Smartphones'), (8, 2, 'Tablets'), (9, 2, 'Audio'), (10, 2, 'Cámaras'),
      (11, 3, 'Despensa'), (12, 3, 'Bebidas'), (13, 3, 'Limpieza'), (14, 3, 'Cuidado Personal'), (15, 3, 'Mascotas'),
      (16, 4, 'Ficción'), (17, 4, 'No Ficción'), (18, 4, 'Infantil'), (19, 4, 'Educación'), (20, 4, 'Comics')
      ON CONFLICT (id) DO UPDATE SET nombre = EXCLUDED.nombre;
    `;
    
    await pool.query(query);
    console.log('Subcategories inserted successfully.');

    // Update sequence just in case
    await pool.query("SELECT setval('subcategorias_id_seq', (SELECT MAX(id) FROM subcategorias))");
    console.log('Sequence updated.');

  } catch (err) {
    console.error('Error fixing subcategories:', err);
  } finally {
    pool.end();
  }
}

fixSubcategories();
