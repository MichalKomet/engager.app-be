import db from '../../database/dbConnection.js';

export const getItemsQuery = async () => {
  const sql = `SELECT * FROM items`;
  const results = await db.query(sql);

  return results.rows;
};