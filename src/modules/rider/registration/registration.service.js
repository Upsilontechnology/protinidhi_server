const createRiderRegistrationService = async (payload) => {

    const result = {
        status: 'success',
        success: true,
        token: 'not generated yet',
        result: payload
    }

    return result;
}


module.exports = {
    createRiderRegistrationService
}