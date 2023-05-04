import { Response, Request } from "express";
import resJson from "../resJson";
import mysqlQuery from "../db/mysqlQuery";
import bcryptjs from "bcryptjs";
import createToken from "../utlis/createToken";
import { ResMsgAuth } from "../interface";

class Auth {
  static async login(req: Request, res: Response<ResMsgAuth>) {
    try {
      const { email, password }: { email: string; password: string } = req.body;

      const user: any = await mysqlQuery(
        "SELECT * FROM users WHERE email = ?",
        email
      );

      if (!user.result.length) {
        return resJson(res, 404, "terjadi kesalahan diclient", [
          "user tidak ditemukan",
        ]);
      }

      const checkPass: boolean = bcryptjs.compareSync(
        password,
        user.result[0].password
      );

      if (!checkPass) {
        return resJson(res, 400, "terjadi kesalahan diclient", [
          "password salah",
        ]);
      }

      const refreshToken: string = createToken(
        user.result[0].id,
        process.env.SECRET_REFRESH
      );
      const accessToken: string = createToken(
        user.result[0].id,
        process.env.SECRET_ACCESS,
        "10m"
      );

      await mysqlQuery("UPDATE users SET refresh_token = ? WHERE id = ?", [
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
    } catch (err: any) {
      return res.status(200).json({
        status: "OK",
        message: "terjadi kesalahan diserver",
        errors: [err.message],
        accessToken: "",
      });
    }
  }
  static async refreshAccessToken(req: Request, res: Response<ResMsgAuth>) {
    try {
      const refreshToken: string | undefined = req.cookies.refresh_token;
      if (!refreshToken) {
        throw new Error("silahkan login terlebih dahulu");
      }

      const user: any = await mysqlQuery(
        "SELECT * FROM users WHERE refresh_token = ?",
        refreshToken
      );

      if (!user.result.length) {
        throw new Error("silahkan login terlebih dahulu");
      }

      const accessToken: string = createToken(
        user.result[0].id,
        process.env.SECRET_ACCESS,
        "10m"
      );

      return res.status(200).json({
        status: "OK",
        message: "berhasil mendapatkan access token",
        errors: [],
        accessToken: accessToken,
      });
    } catch (err: any) {
      return res.status(500).json({
        status: "OK",
        message: "terjadi kesalahan diserver",
        errors: [err.message],
        accessToken: "",
      });
    }
  }

  static async isLogin(req: Request, res: Response) {
    try {
      const refreshToken: string | undefined = req.cookies.refresh_token;
      if (!refreshToken) {
        throw new Error("silahkan login terlebih dahulu");
      }

      const user: any = await mysqlQuery(
        "SELECT * FROM users WHERE refresh_token = ?",
        refreshToken
      );

      if (!user.result.length) {
        throw new Error("silahkan login terlebih dahulu");
      }

      return resJson(res, 200, "sudah login", [], user.result);
    } catch (err: any) {
      return resJson(res, 401, "terjadi kesalahan diserver", [err.message]);
    }
  }
}

export default Auth;
