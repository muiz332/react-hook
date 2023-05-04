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
const onlyLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const refreshToken = req.cookies.refresh_token;
        if (!refreshToken) {
            throw new Error("silahkan login terlebih dahulu");
        }
        const user = yield (0, mysqlQuery_1.default)("SELECT * FROM users WHERE refresh_token = ?", refreshToken);
        if (!user.result.length) {
            throw new Error("silahkan login terlebih dahulu");
        }
        next();
    }
    catch (err) {
        return (0, resJson_1.default)(res, 401, "terjadi kesalahan diclient", [err.message]);
    }
});
exports.default = onlyLogin;
