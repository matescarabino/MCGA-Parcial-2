import Joi from 'joi';

export const productSchema = Joi.object({
    name: Joi.string()
        .required()
        .pattern(/(^$)|[a-zA-Z0-9]/)
        .min(3)
        .messages({
            'string.empty': 'Name is required.',
            'any.required': 'Name is required.',
            'string.pattern.base': 'All characters must be letters.',
            'string.min': 'Name minimum length is 3.'
        }),
    description: Joi.string()
        .required()
        .pattern(/(^$)|[a-zA-Z0-9]/)
        .min(3)
        .messages({
            'string.empty': 'Desciption is required.',
            'any.required': 'Desciption is required.',
            'string.pattern.base': 'All characters must be letters.',
            'string.min': 'Desciption minimum length is 3.'
        }),
    price: Joi.string()
        .required()
        .pattern(/^[0-9]+$/)
        .min(1)
        .max(15)
        .messages({
            'string.empty': 'Price is required.',
            'any.required': 'Price is required.',
            'string.pattern.base': 'All characters must be digits.',
            'string.min': 'Price minimum length is 1.',
            'string.max': 'Price maximum length is 15.'
        }),
    stock: Joi.string()
        .required()
        .pattern(/^[0-9]+$/)
        .min(1)
        .max(6)
        .messages({
            'string.empty': 'Stock is required.',
            'any.required': 'Stock is required.',
            'string.pattern.base': 'All characters must be digits.',
            'string.min': 'Stock minimum length is 1.',
            'string.max': 'Stock maximum length is 15.'
        })
});
