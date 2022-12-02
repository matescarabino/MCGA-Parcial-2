import Joi from 'joi';

export const loginSchema = Joi.object({
    email: Joi.string()
    .required()
    .email({ minDomainSegments: 2, tlds: { allow: false } })
    .messages({
      'string.empty': 'Email is required.',
      'any.required': 'Email is required.',
      'string.pattern.base': 'Insert a valid email.'
    }),
  password: Joi.string()
    .required()
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .messages({
      'string.empty': 'Password is required.',
      'any.required': 'Password is required.',
      'string.pattern.base': 'Must contain letters, numbers and at least 8 characters long.'
    }),
});
