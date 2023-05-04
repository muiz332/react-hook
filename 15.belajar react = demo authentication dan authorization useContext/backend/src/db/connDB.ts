import mysql, { MysqlError } from "mysql";

const mysqlConn: mysql.Connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "",
  database: "muiz",
});

mysqlConn.connect(function (err: MysqlError) {
  if (err) throw err;
  console.log("connecting database success");
});

export default mysqlConn;
