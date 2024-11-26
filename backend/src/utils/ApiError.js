class ApiError extends Error {
    constructor(statusCode, message = "something went wrong -- FROM API ERROR", error = [], stack){
        super(message)
        this.statusCode = statusCode
        this.error = error
        this.message = message
        this.data = null 

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }