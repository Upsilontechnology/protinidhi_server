const tryCatchAsync = require("../../../tryCatchAsync/tryCatchAsync")
const { createRiderRegistrationService } = require("./registration.service")

const createRiderRegistrationController = tryCatchAsync(
    async (req, res) => {

        const result = await createRiderRegistrationService(req.body)

        res.status(201).json({
            status: result.status,
            success: result.success,
            token: result.token,
            result: result.result,
        })
    }
)


module.exports = {
    createRiderRegistrationController
}