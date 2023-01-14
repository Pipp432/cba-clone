import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const db = require("./db");
let cors = require("cors");

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
let employeeID = "";
app.use(cors());
app.get("/", (req: Request, res: Response) => {
	res.send("Express + TypeScript Server");
});

app.get("/login", (req: Request, res: Response) => {
	let ID = req.query.ID?.toString();
	let password = req.query.password?.toString();

	db.query(
		`SELECT * FROM CBA_Clone.Employees WHERE ID = '${ID}' AND Password = ${password}`,

		(err: Error, result: any) => {
			if (err) {
				console.log(err, ID, password);
			} else {
				employeeID = result[0].ID;
				res.send(result[0].ID);
			}
		}
	);
});
app.get("/getID", (req: Request, res: Response) => {
	res.send({ ID: employeeID });
});
app.get("/getName", (req: Request, res: Response) => {
	let ID = req.query.ID?.toString();
	db.query(
		`SELECT Firstname,Surname FROM CBA_Clone.Employees WHERE ID = '${ID}'`,

		(err: Error, result: any) => {
			if (err) {
				console.log(err, ID);
			} else {
				console.log(result);
				res.send(result);
			}
		}
	);
});
app.get("/getCustomer", (req: Request, res: Response) => {
	let Phone_Number = req.query.No?.toString();
	db.query(
		`SELECT Firstname,Surname,Address FROM CBA_Clone.Customers WHERE Phone_Number = '${Phone_Number}'`,

		(err: Error, result: any) => {
			if (err) {
				console.log(err, Phone_Number);
			} else {
				console.log(result);
				res.send(result);
			}
		}
	);
});
app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
