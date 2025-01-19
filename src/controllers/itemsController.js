import { getItems } from "../services/itemsService.js";

export const getAllItems = async (req, res, next) => {
    try {
        const items = await getItems();
        return res.json(items);
    } catch (e) {
        next(e);
    }
};