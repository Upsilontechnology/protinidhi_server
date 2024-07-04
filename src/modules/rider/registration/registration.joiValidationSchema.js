const Joi = require('joi');

const riderRegistrationSchema = Joi.object({
    fullName: Joi.string().required(),
    location: Joi.string().required(),
    presentLocation: Joi.string().required(),
    deliveryLocation: Joi.string().required(),
    password: Joi.string().required(),
    isEighteen: Joi.boolean().required(),
    riderVehicle: Joi.string().required(),
    gender: Joi.string().valid('male', 'female').required(),
    yourImg: Joi.string().uri().required(),
    nid: Joi.number().required(),
    nidfrontImg: Joi.string().uri().required(),
    nidBackImg: Joi.string().uri().required(),
    nomineeImg: Joi.string().uri().required()
});

module.exports = riderRegistrationSchema;
