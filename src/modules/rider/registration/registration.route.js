const { runValidator } = require('../../../joi_validation');
const { createRiderRegistrationController } = require('./registration.controller');
const riderRegistrationSchema = require('./registration.joiValidationSchema');

const riderRegistrationRouter = require('express').Router();

riderRegistrationRouter.post('/create-registration', runValidator(riderRegistrationSchema), createRiderRegistrationController);

module.exports = riderRegistrationRouter

