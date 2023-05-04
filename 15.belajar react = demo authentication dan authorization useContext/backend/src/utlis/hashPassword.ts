import bcryptjs from "bcryptjs";

function hashPassword(s: string): string {
  const salt = bcryptjs.genSaltSync(10);
  const result: string = bcryptjs.hashSync(s, salt);

  return result;
}

export default hashPassword;
