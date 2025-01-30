import { body, param } from "express-validator";

export const itemValidationRules = [
    body('name')
        .notEmpty().withMessage('Name is required')
        .isLength({ max: 100 }).withMessage('Name cannot exceed 100 characters'),

    body('completionDate')
        .optional({ nullable: true })
        .isDate().withMessage('Completion date must be YYYY-MM-DD format'),

    body('dueDate')
        .optional({ nullable: true })
        .isDate().withMessage('Due date must be YYYY-MM-DD format'),
];

export const itemIdValidationRules = [
    param('id')
        .notEmpty().withMessage('Item id is required')
        .isInt().withMessage('Item id is not valid'),
];