import db from '../../database/dbConnection.js';

export const getItemsQuery = async () => {
  const sql = `SELECT * FROM items`;
  const results = await db.query(sql);

  return results.rows;
};

export const getItemByIdQuery = async (id) => {
  const sql = `SELECT * FROM items WHERE id = $1`;
  const results = await db.query(sql, [id]);

  return results.rows[0];
};

export const createItemQuery = async (name, completionDate, dueDate) => {
  const sql = `
    INSERT INTO items (name, completion_date, due_date) 
    VALUES ($1, $2, $3)
    RETURNING *`;

  const results = await db.query(sql, [name, completionDate, dueDate]);
  return results.rows[0];
};