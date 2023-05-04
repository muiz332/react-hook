"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserControl_1 = __importDefault(require("../controllers/UserControl"));
const Auth_1 = __importDefault(require("../controllers/Auth"));
const checkAccessToken_1 = __importDefault(require("../middlewares/checkAccessToken"));
const user = express_1.default.Router();
user.get("/", checkAccessToken_1.default, UserControl_1.default.getAll);
user.get("/refresh-access-token", Auth_1.default.refreshAccessToken);
user.get("/islogin", Auth_1.default.isLogin);
user.post("/", UserControl_1.default.post);
user.post("/login", Auth_1.default.login);
exports.default = user;
