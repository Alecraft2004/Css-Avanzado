const pool = require('./db');

async function debugDB() {
  try {
    console.log('--- Checking "productos" table columns ---');
    const columns = await pool.query(`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'productos';
    `);
    console.table(columns.rows);

    console.log('\n--- Checking "subcategorias" table content ---');
    const subs = await pool.query('SELECT * FROM subcategorias ORDER BY id');
    console.table(subs.rows);

  } catch (err) {
    console.error('Error debugging DB:', err);
  } finally {
    pool.end();
  }
}

debugDB();
