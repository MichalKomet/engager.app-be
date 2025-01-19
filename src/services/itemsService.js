import { getItemsQuery } from "../repositories/itemsRepository.js";

export const getItems = async () => {
  return getItemsQuery();
};