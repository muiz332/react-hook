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
const mysqlQuery_1 = __importDefault(require("../db/mysqlQuery"));
const resJson_1 = __importDefault(require("../resJson"));
const UserVal_1 = __importDefault(require("../validations/UserVal"));
const hashPassword_1 = __importDefault(require("../utlis/hashPassword"));
class UserControl {
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield (0, mysqlQuery_1.default)("SELECT * FROM users");
                const user = data.result;
                return (0, resJson_1.default)(res, 200, "semua data users", [], user);
            }
            catch (err) {
                return (0, resJson_1.default)(res, 500, "terjadi kesalahan diserver", err.message, []);
            }
        });
    }
    static post(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = new UserVal_1.default(req.body);
                user.checkType();
                if (user.getErrors.length) {
                    return (0, resJson_1.default)(res, 400, "terjadi kesalahan diclient", user.getErrors);
                }
                user.checkIsEmail();
                if (user.getErrors.length) {
                    return (0, resJson_1.default)(res, 400, "terjadi kesalahan diclient", user.getErrors);
                }
                yield user.checkIsEmailUniq();
                if (user.getErrors.length) {
                    return (0, resJson_1.default)(res, 400, "terjadi kesalahan diclient", user.getErrors);
                }
                const pass = (0, hashPassword_1.default)(user.getPassword);
                const data = yield (0, mysqlQuery_1.default)("INSERT INTO users (username,email,password) VALUES (?,?,?)", [user.getUsername, user.getEmail, pass]);
                const getInsert = yield (0, mysqlQuery_1.default)(`SELECT * FROM users WHERE id = ${data.result.insertId}`);
                return (0, resJson_1.default)(res, 201, "berhasil manambah data", [], getInsert.result);
            }
            catch (err) {
                return (0, resJson_1.default)(res, 500, "terjadi kesalahan diserver", err.message);
            }
        });
    }
}
exports.default = UserControl;
