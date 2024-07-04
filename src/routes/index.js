const loginRouter = require("../modules/login/login.router");
const registrationRouter = require("../modules/registration/registration.router");
const riderRegistrationRouter = require("../modules/rider/registration/registration.route");

const allRoutes = [
    {
        path: 'registration',
        route: registrationRouter,
    },
    {
        path: 'login',
        route: loginRouter,
    },
    {
        path: 'rider',
        route: riderRegistrationRouter
    }
]

module.exports = allRoutes