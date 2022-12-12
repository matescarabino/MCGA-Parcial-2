import Joi from 'joi';

export const productSchema = Joi.object({
    name: Joi.string()
        .required()
        .pattern(/^([A-Za-z0-9]+ )+[A-Za-z0-9]+$|^[A-Za-z0-9]+$/u)
        .min(3)
        .messages({
            'string.empty': 'Name is required.',
            'any.required': 'Name is required.',
            'string.pattern.base': 'Must contain at least 1 letter or number',
            'string.min': 'Name minimum length is 3.'
        }),
    description: Joi.string()
        .required()
        .pattern(/^([A-Za-z0-9]+ )+[A-Za-z0-9]+$|^[A-Za-z0-9]+$/u)
        .min(10)
        .max(200)
        .messages({
            'string.empty': 'Description is required.',
            'any.required': 'Description is required.',
            'string.pattern.base': 'Must contain at least 1 letter or number',
            'string.min': 'Description minimum length is 10.',
            'string.max': 'Description maximum length is 200.'
        }),
    price: Joi.number().min(1).required(),
    stock: Joi.number().integer().min(1).required(),
});
