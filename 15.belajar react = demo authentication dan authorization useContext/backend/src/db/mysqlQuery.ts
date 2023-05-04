import mysqlConn from "./connDB";

const mysqlQuery = (sql: string, data?: any) => {
  return new Promise((resolve, reject) => {
    mysqlConn.query(sql, data, function (err, result, fields) {
      if (err) reject(err);
      resolve({ result, fields });
    });
  });
};

export default mysqlQuery;
