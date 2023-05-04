import { UserBody } from "../interface";
import validator from "validator";
import mysqlQuery from "../db/mysqlQuery";

class UserVal {
  private username: string = "";
  private email: string = "";
  private password: string = "";
  private errors: string[] = [];

  constructor(user: UserBody) {
    this.username = user.username;
    this.email = user.email;
    this.password = user.password;
  }

  public get getUsername() {
    return this.username;
  }
  public get getEmail() {
    return this.email;
  }
  public get getPassword() {
    return this.password;
  }

  public checkType() {
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

  public checkIsEmail() {
    if (!validator.isEmail(this.email)) {
      this.errors.push("masukkan email yang valid");
    }
  }

  public async checkIsEmailUniq() {
    const data: any = await mysqlQuery(
      "SELECT * FROM users WHERE email = ?",
      this.email
    );

    if (data.result.length) {
      this.errors.push("email sudah ada");
    }
  }

  public get getErrors() {
    return this.errors;
  }
}

export default UserVal;
