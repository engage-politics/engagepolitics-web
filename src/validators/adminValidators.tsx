import Joi from 'joi';

export const candidateFormValidator = Joi.object({
  firstName: Joi.string()
    .min(2)
    .max(20)
    .pattern(/^[a-zA-Z ]{2,20}$/)
    .required()
    .label('First Name')
    .messages({
      'string.empty': `First Name is not allowed to be empty`,
      'string.min': 'First Name should be minimum 2 characters',
      'string.max': 'First Name should be maximum 20 characters',
      'string.pattern.base': `First Name should only contain alphabets`,
    }),
  lastName: Joi.string()
    .min(2)
    .max(20)
    .pattern(/^[a-zA-Z ]{2,20}$/)
    .required()
    .label('Last Name')
    .messages({
      'string.empty': `Last Name is not allowed to be empty`,
      'string.min': 'Last Name should be minimum 2 characters',
      'string.max': 'Last Name should be maximum 20 characters',
      'string.pattern.base': `Last Name should only contain alphabets`,
    }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: false },
    })
    .required()
    .label('Email')
    .messages({
      'string.empty': `Email is not allowed to be empty`,
      'string.email': `Email entered must be a valid email`,
    }),
});

export const userFormValidator = Joi.object({
  firstName: Joi.string()
    .min(2)
    .max(20)
    .pattern(/^[a-zA-Z]{2,20}$/)
    .required()
    .label('First Name')
    .messages({
      'string.empty': `First Name is not allowed to be empty`,
      'string.min': 'First Name should be minimum 2 characters',
      'string.max': 'First Name should be maximum 20 characters',
      'string.pattern.base': `First Name should only contain alphabets`,
    }),
  lastName: Joi.string()
    .min(2)
    .max(20)
    .pattern(/^[a-zA-Z]{2,20}$/)
    .required()
    .label('Last Name')
    .messages({
      'string.empty': `Last Name is not allowed to be empty`,
      'string.min': 'Last Name should be minimum 2 characters',
      'string.max': 'Last Name should be maximum 20 characters',
      'string.pattern.base': `Last Name should only contain alphabets`,
    }),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ['com', 'net'] },
    })
    .required()
    .label('Email')
    .messages({
      'string.empty': `Email is not allowed to be empty`,
      'string.email': `Email entered must be a valid email`,
    }),
  phone: Joi.string().min(10).max(15).allow('').label('Phone'),
  address1: Joi.string().max(64).allow('').label('Address 1'),
  address2: Joi.string().max(64).allow('').label('Address 2'),
  city: Joi.string().max(32).allow('').label('City'),
  state: Joi.string().max(32).allow('').label('State'),
  zipCode: Joi.string().max(5).allow('').label('ZIP Code'),
  occupation: Joi.string().max(32).allow('').label('Occupation'),
  employer: Joi.string().max(32).allow('').label('Employer'),
  employerCity: Joi.string().max(32).allow('').label('City'),
});
