"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const mysqlConn = mysql_1.default.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "muiz",
});
mysqlConn.connect(function (err) {
    if (err)
        throw err;
    console.log("connecting database success");
});
exports.default = mysqlConn;
