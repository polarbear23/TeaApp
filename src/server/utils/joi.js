const joi = require('joi');

const registerSchema = joi.object({
    email: joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: true }
    }),
    password: joi.string()
        .min(6)
        .required(),
});

const loginSchema = joi.object({
    email: joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: true }
    }),
    password: joi.string()
        .min(6)
        .required(),
});



module.exports = {
    registerSchema,
    loginSchema,
};