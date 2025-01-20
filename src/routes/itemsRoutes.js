import { Router } from "express";
import {
    getAllItems,
    createNewItem,
    updateItem,
    deleteItem
} from "../controllers/itemsController.js";

const router = Router();

router.get('/', getAllItems);
router.post('/', createNewItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;