const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "LowMariaDB!Aqsal123",
  database: "booklist",
});

con.connect((err) => {
  if (err) throw err;
  console.log("connected");
});

module.exports = con;
