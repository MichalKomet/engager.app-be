import { Router } from "express";
import {
    getItem,
    getAllItems,
    createNewItem,
    updateItem,
    deleteItem,
} from "../controllers/itemsController.js";
import { itemIdValidationRules, itemValidationRules } from "../../validations/itemValidation.js";
import { handleValidationErrors } from "../../validations/handleValidationErrors.js";

const router = Router();

router.get('/', getAllItems);
router.get('/:id', ...itemIdValidationRules, handleValidationErrors, getItem);
router.post('/', ...itemValidationRules, handleValidationErrors, createNewItem);
router.put('/:id', ...itemIdValidationRules, ...itemValidationRules, handleValidationErrors, updateItem);
router.delete('/:id', ...itemIdValidationRules, handleValidationErrors, deleteItem);

export default router;