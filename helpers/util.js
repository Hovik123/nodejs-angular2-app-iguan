module.exports = {
    parseRequest: parseRequest
};
function parseRequest(req, field, required, errorMessage) {


    if (req == "undefined" || req.param(field) == "undefined") {
        throw new IsNotDefined;
    }

    if (required && !req.param(field)) {

        throw new RequiredParam(errorMessage);
    } else {
        return req.param(field);
    }

}

/**
 * @return {string}
 */
function IsNotDefined() {
    return "BAD REQUEST";
}
/**
 * RequiredParam Instance
 * @param message
 * @constructor
 */
function RequiredParam(message) {
    return "Required param:" + message || "";
}