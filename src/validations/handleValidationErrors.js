import { validationResult } from 'express-validator';
import { ValidationError } from "../errors/ValidationError.js";

export const globalErrorHandler = ((err, req, res, next) => {
    console.error(err);

    if (err.statusCode) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            ...(err.errors && { errors: err.errors })
        });
    }

    res.status(500).json({
        success: false,
        message: 'Internal Server Error'
    });
});

export const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new ValidationError(errors.array());
    }
    next();
};