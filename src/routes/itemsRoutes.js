import { Router } from "express";
import {
    getItem,
    getAllItems,
    createNewItem,
    updateItem,
    deleteItem,
} from "../controllers/itemsController.js";

const router = Router();

router.get('/', getAllItems);
router.get('/:id', getItem);
router.post('/', createNewItem);
router.put('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;