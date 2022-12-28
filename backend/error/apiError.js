const constant = require("../utils/Constants")

class ApiError extends Error{
    constructor(status, message) {
        super();
        this.status = status
        this.message = message
    }
    static notFound(message){
        return new ApiError(constant.not_found_error, message)
    }

    static forbidden(message){
        return new ApiError(constant.forbidden_error, message)
    }

    static internal(message){
        return new ApiError(constant.internal_error, message)
    }
}

module.exports = ApiError