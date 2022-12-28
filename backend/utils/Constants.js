const FORBIDDEN_ERROR = 403;
const NOT_FOUND_ERROR = 404;
const INTERNAL_ERROR = 500;

class Constant{
    static get forbidden_error(){
        return FORBIDDEN_ERROR;
    }
    static get not_found_error(){
        return NOT_FOUND_ERROR;
    }
    static get internal_error(){
        return INTERNAL_ERROR;
    }
}

module.exports = Constant
