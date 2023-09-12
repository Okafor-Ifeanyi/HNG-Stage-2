const joi = require("joi");

// Joi Validation schema used to verify req data
const RegisterSchema = joi.object().keys({
  name: joi.string().required(),
  age: joi.number(),
  phone_number: joi.string().max(12)
});

module.exports = RegisterSchema