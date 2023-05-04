"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
function hashPassword(s) {
    const salt = bcryptjs_1.default.genSaltSync(10);
    const result = bcryptjs_1.default.hashSync(s, salt);
    return result;
}
exports.default = hashPassword;
