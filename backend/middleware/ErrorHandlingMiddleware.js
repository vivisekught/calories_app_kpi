const apiError = require('../error/apiError')
const constant = require("../utils/Constants");

module.exports = function (err, req, res, next){//error, request, result, next (passing to the next middleware chain)
    if (err instanceof apiError){
        return res.status(err.status).json({message: err.message})
    }
    return res.status(constant.internal_error).json({message: "Unexpected error"})
}