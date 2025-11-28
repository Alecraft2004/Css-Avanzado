const pool = require('./db');

async function fix() {
  try {
    console.log('Intentando agregar columna imagen_principal...');
    await pool.query(`
      ALTER TABLE productos 
      ADD COLUMN IF NOT EXISTS imagen_principal TEXT
    `);
    console.log('Columna agregada (o ya existía).');
    process.exit(0);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(1);
  }
}

fix();