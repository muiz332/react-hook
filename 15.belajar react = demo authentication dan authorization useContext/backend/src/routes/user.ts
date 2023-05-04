import express from "express";
import UserControl from "../controllers/UserControl";
import Auth from "../controllers/Auth";
import checkAccessToken from "../middlewares/checkAccessToken";
const user: express.Router = express.Router();

user.get("/", checkAccessToken, UserControl.getAll);
user.get("/refresh-access-token", Auth.refreshAccessToken);
user.get("/islogin", Auth.isLogin);
user.post("/", UserControl.post);
user.post("/login", Auth.login);

export default user;
