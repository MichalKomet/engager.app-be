import { getItems, createItem, deleteItemById } from "../services/itemsService.js";

export const getAllItems = async (req, res, next) => {
    try {
        const items = await getItems();
        return res.json(items);
    } catch (e) {
        next(e);
    }
};

export const createNewItem = async (req, res, next) => {
  try {
      const { name, completion_date, due_date } = req.body;

      const newItem = await createItem(name, completion_date, due_date);

      return res.status(201).json(newItem);
  } catch (e) {
      next(e);
  }
};

export const deleteItem = async (req, res, next) => {
  try {
      const itemId = req.params.id;

      const deletedItem = await deleteItemById(itemId);

      return res.json(deletedItem);
  } catch (e) {
      next(e);
  }
};