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
const validator_1 = __importDefault(require("validator"));
const mysqlQuery_1 = __importDefault(require("../db/mysqlQuery"));
class UserVal {
    constructor(user) {
        this.username = "";
        this.email = "";
        this.password = "";
        this.errors = [];
        this.username = user.username;
        this.email = user.email;
        this.password = user.password;
    }
    get getUsername() {
        return this.username;
    }
    get getEmail() {
        return this.email;
    }
    get getPassword() {
        return this.password;
    }
    checkType() {
        if (typeof this.username != "string") {
            this.errors.push("username harus string");
        }
        if (typeof this.email != "string") {
            this.errors.push("email harus string");
        }
        if (typeof this.password != "string") {
            this.errors.push("password harus string");
        }
    }
    checkIsEmail() {
        if (!validator_1.default.isEmail(this.email)) {
            this.errors.push("masukkan email yang valid");
        }
    }
    checkIsEmailUniq() {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield (0, mysqlQuery_1.default)("SELECT * FROM users WHERE email = ?", this.email);
            if (data.result.length) {
                this.errors.push("email sudah ada");
            }
        });
    }
    get getErrors() {
        return this.errors;
    }
}
exports.default = UserVal;
