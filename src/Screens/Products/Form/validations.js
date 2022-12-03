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
    price: Joi.number().min(1).max(10000),
    stock: Joi.number().integer().min(1).max(10000).required(),
});
