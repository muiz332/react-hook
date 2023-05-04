import express from "express";
import user from "./routes/user";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

const app: express.Application = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(cookieParser());
app.use(express.json());
app.use("/user", user);

app.listen(8080, function () {
  console.log("server is running");
});
