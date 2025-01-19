import { Router } from "express";
import {
    getAllItems
} from "../controllers/itemsController.js";

const router = Router();

router.get('/', getAllItems);

export default router;