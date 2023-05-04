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
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const createToken_1 = __importDefault(require("../utlis/createToken"));
class Auth {
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const user = yield (0, mysqlQuery_1.default)("SELECT * FROM users WHERE email = ?", email);
                if (!user.result.length) {
                    return (0, resJson_1.default)(res, 404, "terjadi kesalahan diclient", [
                        "user tidak ditemukan",
                    ]);
                }
                const checkPass = bcryptjs_1.default.compareSync(password, user.result[0].password);
                if (!checkPass) {
                    return (0, resJson_1.default)(res, 400, "terjadi kesalahan diclient", [
                        "password salah",
                    ]);
                }
                const refreshToken = (0, createToken_1.default)(user.result[0].id, process.env.SECRET_REFRESH);
                const accessToken = (0, createToken_1.default)(user.result[0].id, process.env.SECRET_ACCESS, "10m");
                yield (0, mysqlQuery_1.default)("UPDATE users SET refresh_token = ? WHERE id = ?", [
                    refreshToken,
                    user.result[0].id,
                ]);
                res.cookie("refresh_token", refreshToken, {
                    httpOnly: true,
                    maxAge: 60 * 60 * 24 * 1000,
                    secure: false,
                });
                return res.status(200).json({
                    status: "OK",
                    message: "berhasil login",
                    errors: [],
                    accessToken: accessToken,
                });
            }
            catch (err) {
                return res.status(200).json({
                    status: "OK",
                    message: "terjadi kesalahan diserver",
                    errors: [err.message],
                    accessToken: "",
                });
            }
        });
    }
    static refreshAccessToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const refreshToken = req.cookies.refresh_token;
                if (!refreshToken) {
                    throw new Error("silahkan login terlebih dahulu");
                }
                const user = yield (0, mysqlQuery_1.default)("SELECT * FROM users WHERE refresh_token = ?", refreshToken);
                if (!user.result.length) {
                    throw new Error("silahkan login terlebih dahulu");
                }
                const accessToken = (0, createToken_1.default)(user.result[0].id, process.env.SECRET_ACCESS, "10m");
                return res.status(200).json({
                    status: "OK",
                    message: "berhasil mendapatkan access token",
                    errors: [],
                    accessToken: accessToken,
                });
            }
            catch (err) {
                return res.status(500).json({
                    status: "OK",
                    message: "terjadi kesalahan diserver",
                    errors: [err.message],
                    accessToken: "",
                });
            }
        });
    }
    static isLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const refreshToken = req.cookies.refresh_token;
                if (!refreshToken) {
                    throw new Error("silahkan login terlebih dahulu");
                }
                const user = yield (0, mysqlQuery_1.default)("SELECT * FROM users WHERE refresh_token = ?", refreshToken);
                if (!user.result.length) {
                    throw new Error("silahkan login terlebih dahulu");
                }
                return (0, resJson_1.default)(res, 200, "sudah login", [], user.result);
            }
            catch (err) {
                return (0, resJson_1.default)(res, 401, "terjadi kesalahan diserver", [err.message]);
            }
        });
    }
}
exports.default = Auth;
