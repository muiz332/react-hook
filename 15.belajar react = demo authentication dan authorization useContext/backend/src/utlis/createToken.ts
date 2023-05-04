import jwt from "jsonwebtoken";

function createToken(id: number, key: any, exp: string | "1d" = "1d"): string {
  return jwt.sign({ id }, key, {
    expiresIn: exp,
  });
}

export default createToken;
