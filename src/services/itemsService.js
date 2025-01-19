import { getItemsQuery, createItemQuery } from "../repositories/itemsRepository.js";

export const getItems = async () => {
  return getItemsQuery();
};

export const createItem = async (name, completionDate, dueDate) => {
    const newItem = await createItemQuery(name, completionDate, dueDate);

    if (!newItem) {
        throw new Error('Item not created');
    }

    return newItem;
};