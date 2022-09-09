const Joi = require('joi');
const { joiPassword } = require('joi-password');

export const userSignUpValidator = Joi.object({
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
  password: joiPassword
    .string()
    .min(8)
    .max(20)
    .minOfSpecialCharacters(1)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .messages({
      'string.empty': `Password is not allowed to be empty`,
      'string.min': 'Password should be minimum 8 characters',
      'string.max': 'Password should be maximum 20 characters',
      'password.minOfUppercase':
        'Password should contain at least {#min} uppercase character',
      'password.minOfSpecialCharacters':
        'Password should contain at least {#min} special character',
      'password.minOfLowercase':
        'Password should contain at least {#min} lowercase character',
      'password.minOfNumeric':
        'Password should contain at least {#min} numeric character',
      'password.noWhiteSpaces': 'Password should not contain white spaces',
    })
    .required(),
  rePassword: Joi.ref('password'),
});

export const userLoginValidator = Joi.object({
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
  password: Joi.string()
    .min(8)
    .max(20)
    .messages({
      'string.min': 'Password should be minimum 8 characters',
      'string.max': 'Password should be maximum 20 characters',
    })
    .label('Password'),
});

export const contactDetailsValidator = Joi.object({
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
});

export const employmentDetailsValidator = Joi.object({
  occupation: Joi.string().max(32).allow('').label('Occupation'),
  employer: Joi.string().max(32).allow('').label('Employer'),
  employerCity: Joi.string().max(32).allow('').label('City'),
});

export const passwordResetValidator = Joi.object({
  password: joiPassword
    .string()
    .min(8)
    .max(20)
    .minOfSpecialCharacters(1)
    .minOfLowercase(1)
    .minOfUppercase(1)
    .minOfNumeric(1)
    .noWhiteSpaces()
    .messages({
      'string.empty': `Password is not allowed to be empty`,
      'string.min': 'Password should be minimum 8 characters',
      'string.max': 'Password should be maximum 20 characters',
      'password.minOfUppercase':
        'Password should contain at least {#min} uppercase character',
      'password.minOfSpecialCharacters':
        'Password should contain at least {#min} special character',
      'password.minOfLowercase':
        'Password should contain at least {#min} lowercase character',
      'password.minOfNumeric':
        'Password should contain at least {#min} numeric character',
      'password.noWhiteSpaces': 'Password should not contain white spaces',
    })
    .required(),
  rePassword: Joi.ref('password'),
});
