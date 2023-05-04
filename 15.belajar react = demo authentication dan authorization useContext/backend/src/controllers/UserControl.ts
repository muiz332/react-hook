import { Request, Response } from "express";
import mysqlQuery from "../db/mysqlQuery";
import resJson from "../resJson";
import { User } from "../interface";
import UserVal from "../validations/UserVal";
import hashPassword from "../utlis/hashPassword";
import { ResMsg } from "../interface";

class UserControl {
  static async getAll(req: Request, res: Response<ResMsg>) {
    try {
      const data: any = await mysqlQuery("SELECT * FROM users");
      const user: User[] = data.result;

      return resJson(res, 200, "semua data users", [], user);
    } catch (err: any) {
      return resJson(res, 500, "terjadi kesalahan diserver", err.message, []);
    }
  }

  static async post(req: Request, res: Response<ResMsg>) {
    try {
      const user: UserVal = new UserVal(req.body);
      user.checkType();

      if (user.getErrors.length) {
        return resJson(res, 400, "terjadi kesalahan diclient", user.getErrors);
      }

      user.checkIsEmail();
      if (user.getErrors.length) {
        return resJson(res, 400, "terjadi kesalahan diclient", user.getErrors);
      }

      await user.checkIsEmailUniq();
      if (user.getErrors.length) {
        return resJson(res, 400, "terjadi kesalahan diclient", user.getErrors);
      }

      const pass: string = hashPassword(user.getPassword);

      const data: any = await mysqlQuery(
        "INSERT INTO users (username,email,password) VALUES (?,?,?)",
        [user.getUsername, user.getEmail, pass]
      );

      const getInsert: any = await mysqlQuery(
        `SELECT * FROM users WHERE id = ${data.result.insertId}`
      );

      return resJson(res, 201, "berhasil manambah data", [], getInsert.result);
    } catch (err: any) {
      return resJson(res, 500, "terjadi kesalahan diserver", err.message);
    }
  }
}

export default UserControl;
