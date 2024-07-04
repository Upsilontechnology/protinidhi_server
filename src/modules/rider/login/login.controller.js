const tryCatchAsync = require("../../../tryCatchAsync/tryCatchAsync");
const { createRiderService } = require("./login.service");


const createRiderController = tryCatchAsync(
    async (req, res) => {

        const result = await createRiderService()

        res.status(201).json({
            status: result.status,
            success: result.success,
            token: result.token && result.token,
            result: result.result,
            email: result.email
        })
    }
)

module.exports = {
    createRiderController
}