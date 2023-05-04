import { Response } from "express";
import { StatusMsg, ResMsg, User } from "./interface";

const statusMsg: StatusMsg = {
  200: "OK",
  201: "Created",
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  500: "Internal Server Error",
};

function resJson(
  res: Response,
  status: number,
  msg: string,
  err: string[],
  data?: User[]
) {
  const resMsg: ResMsg = {
    status: statusMsg[status],
    message: msg,
    errors: err,
    data: data ? data : [],
  };

  return res.status(status).json(resMsg);
}

export default resJson;
