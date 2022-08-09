const mysql = require("mysql2/promise");

// // create the connection to database

console.log("Creating connection pool...");

const pool = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "quanlytaisan",
  password: "trancongtien",
});

exports = pool.promise();
