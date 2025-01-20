import {
    getItemsQuery,
    createItemQuery,
    getItemByIdQuery, deleteItemQuery
} from "../repositories/itemsRepository.js";

export const getItems = async () => {
  return getItemsQuery();
};

export const getItemById = async (id) => {
  const item = await getItemByIdQuery(id);

  if (!item) {
      throw new Error('Item not found');
  }

  return item;
};

export const createItem = async (name, completionDate, dueDate) => {
    const newItem = await createItemQuery(name, completionDate, dueDate);

    if (!newItem) {
        throw new Error('Item not created');
    }

    return newItem;
};

export const deleteItemById = async (id) => {
  const deletedItem = await deleteItemQuery(id);

  if (!deletedItem) {
      throw new Error('Item not found');
  }

  return deletedItem;
};