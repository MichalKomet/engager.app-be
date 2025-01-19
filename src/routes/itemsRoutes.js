import { Router } from "express";
import {
    getAllItems,
    createNewItem
} from "../controllers/itemsController.js";

const router = Router();

router.get('/', getAllItems);
router.post('/', createNewItem);

export default router;