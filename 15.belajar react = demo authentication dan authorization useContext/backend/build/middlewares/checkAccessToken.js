"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resJson_1 = __importDefault(require("../resJson"));
const mysqlQuery_1 = __importDefault(require("../db/mysqlQuery"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkAccessToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accessToken = req.headers.authorization;
        if (!accessToken) {
            throw new Error("butuh access token");
        }
        const token = accessToken.split(" ");
        if (token[0] != "Bearer") {
            throw new Error("schema login salah");
        }
        const secret = process.env.SECRET_ACCESS;
        if (!secret) {
            return res.status(500).json({
                status: "Internal Server Error",
                message: "terjadi kesalahan diserver",
                errors: ["secret access dibutuhkan"],
                data: [],
            });
        }
        const decoded = jsonwebtoken_1.default.verify(token[1], secret);
        const user = yield (0, mysqlQuery_1.default)("SELECT * FROM users WHERE id = ?", decoded.id);
        if (!user.result.length) {
            throw new Error("silahkan login terlebih dahulu");
        }
        next();
    }
    catch (err) {
        return (0, resJson_1.default)(res, 401, "terjadi kesalahan diclient", [err.message]);
    }
});
exports.default = checkAccessToken;
