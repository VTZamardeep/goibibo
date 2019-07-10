const mysql = require("mysql");

module.exports.con= mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "goibibo",
    password: "netzwelt"
});