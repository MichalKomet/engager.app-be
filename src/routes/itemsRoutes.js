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

const validateItemId = [...itemIdValidationRules, handleValidationErrors];
const validateItemBody = [...itemValidationRules, handleValidationErrors];

router.route('/')
    .get(getAllItems)
    .post(validateItemBody, createNewItem);
router.route('/:id')
    .get(validateItemId, getItem)
    .put(validateItemId, validateItemBody, updateItem)
    .delete(validateItemId, deleteItem)

export default router;