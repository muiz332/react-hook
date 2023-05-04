import { Request, Response, NextFunction } from "express";
import { ResMsg } from "../interface";
import resJson from "../resJson";
import mysqlQuery from "../db/mysqlQuery";
import jwt, { JwtPayload } from "jsonwebtoken";

const checkAccessToken = async (
  req: Request,
  res: Response<ResMsg>,
  next: NextFunction
) => {
  try {
    const accessToken: string | undefined = req.headers.authorization;
    if (!accessToken) {
      throw new Error("butuh access token");
    }

    const token: string[] = accessToken.split(" ");

    if (token[0] != "Bearer") {
      throw new Error("schema login salah");
    }

    const secret: string | undefined = process.env.SECRET_ACCESS;
    if (!secret) {
      return res.status(500).json({
        status: "Internal Server Error",
        message: "terjadi kesalahan diserver",
        errors: ["secret access dibutuhkan"],
        data: [],
      });
    }

    const decoded = jwt.verify(token[1], secret) as JwtPayload;

    const user: any = await mysqlQuery(
      "SELECT * FROM users WHERE id = ?",
      decoded.id
    );

    if (!user.result.length) {
      throw new Error("silahkan login terlebih dahulu");
    }

    next();
  } catch (err: any) {
    return resJson(res, 401, "terjadi kesalahan diclient", [err.message]);
  }
};

export default checkAccessToken;
