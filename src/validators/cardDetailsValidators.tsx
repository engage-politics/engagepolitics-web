const Joi = require('joi');

export const cardDetailsValidator = Joi.object({
  name_on_card: Joi.string()
    .min(2)
    .max(20)
    .pattern(/^[a-z *A-Z]{2,20}$/)
    .required()
    .label('Name on the Card')
    .messages({
      'string.empty': `Name on the Card is not allowed to be empty`,
      'string.min': 'Name on the Card should be minimum 2 characters',
      'string.max': 'Name on the Card should be maximum 20 characters',
      'string.pattern.base': `Name on the Card should only contain alphabets`,
    }),
  card_number: Joi.string()
    .min(12)
    .max(19)
    .required()
    .label('Card Number')
    .messages({
      'string.empty': `Card Number is not allowed to be empty`,
      'string.min': 'Card Number should be minimum 12 characters',
      'string.max': 'Card Number should be maximum 19 characters',
      'string.pattern.base': `Card Number should only contain numbers`,
    }),
  card_exp_month: Joi.string()
    .min(2)
    .max(2)
    .required()
    .label('Expiration Date Month')
    .messages({
      'string.empty': `Expiration Date Month is not allowed to be empty`,
      'string.min': 'Expiration Date Month should be minimum 2 characters',
      'string.max': 'Expiration Date Month should be maximum 2 characters',
      'string.pattern.base': `Expiration Date Month should only contain numbers`,
    }),
  card_exp_year: Joi.string()
    .min(2)
    .max(2)
    .required()
    .label('Expiration Date Year')
    .messages({
      'string.empty': `Expiration Date Year is not allowed to be empty`,
      'string.min': 'Expiration Date Year should be minimum 2 characters',
      'string.max': 'Expiration Date Year should be maximum 2 characters',
      'string.pattern.base': `Expiration Date Year should only contain numbers`,
    }),
  card_exp: Joi.string()
    .required()
    .label('Expiration Date')
    .messages({ 'string.empty': `Expiration Date is not allowed to be empty` }),
  cvc: Joi.string().min(3).max(4).required().label('CCV').messages({
    'string.empty': `CCV is not allowed to be empty`,
    'string.min': 'CCV should be minimum 3 characters',
    'string.max': 'CCV should be maximum 4 characters',
    'string.pattern.base': `CCV should only contain numbers`,
  }),
  line1: Joi.string().max(64).label('Address'),
  city: Joi.string().max(32).required().label('City'),
  state: Joi.string().max(32).label('State'),
  postal_code: Joi.string().max(5).label('ZIP'),
  country: Joi.string().min(2).max(2).label('Country').messages({
    'string.empty': `Country code is not allowed to be empty`,
    'string.min': 'Country code should be minimum 2 characters',
    'string.max': 'Country code should be maximum 2 characters',
    'string.pattern.base': `Country code should only contain alphabets`,
  }),
}).options({ abortEarly: false });
