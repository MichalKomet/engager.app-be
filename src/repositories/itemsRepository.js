import db from '../../database/dbConnection.js';

const dateFormatter = (date) => date instanceof Object ?
    new Date(date).toISOString().split('T')[0]
    : null;

const resMapper = (rows) => rows.map(row => ({
  id: row.id,
  name: row.name,
  completionDate: dateFormatter(row.completion_date),
  dueDate: dateFormatter(row.due_date)
}));

export const getItemsQuery = async () => {
  const sql = `SELECT * FROM items`;
  const { rows } = await db.query(sql);

  return resMapper(rows);
};

export const getItemByIdQuery = async (id) => {
  const sql = `SELECT * FROM items WHERE id = $1`;
  const { rows } = await db.query(sql, [id]);

  const mappedRes = resMapper(rows);

  return mappedRes[0];
};

export const createItemQuery = async ({ name, completionDate, dueDate }) => {
  const sql = `
    INSERT INTO items (name, completion_date, due_date) 
    VALUES ($1, $2, $3)
    RETURNING *`;

  const { rows } = await db.query(sql, [name, completionDate, dueDate]);

  const mappedRes = resMapper(rows);

  return mappedRes[0];
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

  const mappedRes = resMapper(rows);

  return mappedRes[0];
};

export const deleteItemQuery = async (id) => {
  const sql = `
    DELETE FROM items 
    WHERE id = $1 
    RETURNING id`;

  const { rows } = await db.query(sql, [id]);
  return rows[0];
};