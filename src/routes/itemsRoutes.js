import { Router } from "express";
import {
    getAllItems,
    createNewItem, deleteItem
} from "../controllers/itemsController.js";

const router = Router();

router.get('/', getAllItems);
router.post('/', createNewItem);
router.delete('/:id', deleteItem);

export default router;