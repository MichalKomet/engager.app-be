import db from '../../database/dbConnection.js';

export const getItemsQuery = async () => {
  const sql = `SELECT * FROM items`;
  const { rows } = await db.query(sql);

  return rows;
};

export const getItemByIdQuery = async (id) => {
  const sql = `SELECT * FROM items WHERE id = $1`;
  const { rows } = await db.query(sql, [id]);

  return rows[0];
};

export const createItemQuery = async ({ name, completionDate, dueDate }) => {
  const sql = `
    INSERT INTO items (name, completion_date, due_date) 
    VALUES ($1, $2, $3)
    RETURNING *`;

  const { rows } = await db.query(sql, [name, completionDate, dueDate]);
  return rows[0];
};

export const updateItemQuery = async (id, { name, completionDate, dueDate }) => {
  const sql = `
    UPDATE items 
    SET 
        name = $2, 
        completion_date = $3, 
        due_date = $4
    WHERE id = $1    
    RETURNING *`;

  const { rows } = await db.query(sql, [id, name, completionDate, dueDate]);
  return rows[0];
};

export const deleteItemQuery = async (id) => {
  const sql = `
    DELETE FROM items 
    WHERE id = $1 
    RETURNING id`;

  const { rows } = await db.query(sql, [id]);
  return rows[0];
};