import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "6338057721",
	database: "CBA_Clone",
	port: 3306,
});
export default connection;
