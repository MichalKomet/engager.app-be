import {
    getItemsQuery,
    getItemByIdQuery,
    createItemQuery,
    updateItemQuery,
    deleteItemQuery
} from "../repositories/itemsRepository.js";
import { NotFoundError } from "../../errors/NotFoundError.js";

export const getItems = async () => {
  return getItemsQuery();
};

export const getItemById = async (id) => {
  const item = await getItemByIdQuery(id);

  if (!item) {
      throw new NotFoundError('Item not found');
  }

  return item;
};

export const createItem = async (data) => {
    const { name, completionDate, dueDate } = data;

    const newItem = await createItemQuery({ name, completionDate, dueDate });

    if (!newItem) {
        throw new Error('Item not created');
    }

    return newItem;
};

export const updateItemById = async (id, data) => {
    const { name, completionDate, dueDate } = data;

    const updatedItem = await updateItemQuery(id, { name, completionDate, dueDate } );

    if (!updatedItem) {
        throw new Error('Item not updated');
    }

    return updatedItem;
};

export const deleteItemById = async (id) => {
  const deletedItem = await deleteItemQuery(id);

  if (!deletedItem) {
      throw new NotFoundError('Item not found');
  }

  return deletedItem;
};