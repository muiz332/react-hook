"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const statusMsg = {
    200: "OK",
    201: "Created",
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    500: "Internal Server Error",
};
function resJson(res, status, msg, err, data) {
    const resMsg = {
        status: statusMsg[status],
        message: msg,
        errors: err,
        data: data ? data : [],
    };
    return res.status(status).json(resMsg);
}
exports.default = resJson;
