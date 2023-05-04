"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connDB_1 = __importDefault(require("./connDB"));
const mysqlQuery = (sql, data) => {
    return new Promise((resolve, reject) => {
        connDB_1.default.query(sql, data, function (err, result, fields) {
            if (err)
                reject(err);
            resolve({ result, fields });
        });
    });
};
exports.default = mysqlQuery;
