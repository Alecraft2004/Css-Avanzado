const pool = require('./db');

async function checkConstraints() {
  try {
    console.log('--- Checking constraints on "productos" table ---');
    const res = await pool.query(`
      SELECT conname, pg_get_constraintdef(c.oid)
      FROM pg_constraint c
      JOIN pg_namespace n ON n.oid = c.connamespace
      WHERE conrelid = 'productos'::regclass;
    `);
    console.table(res.rows);
  } catch (err) {
    console.error(err);
  } finally {
    pool.end();
  }
}

checkConstraints();
