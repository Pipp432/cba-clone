"use strict";
const mysql = require("mysql");
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "6338057721",
    database: "CBA_Clone",
    port: "3306",
});
module.exports = db;
