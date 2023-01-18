// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
	name: string;
};
import connection from "../../db";

// simple query
connection.query(
	"SELECT * FROM `Employees` WHERE 1",
	function (err, results, fields) {
		console.log(results); // results contains rows returned by server
		console.log(fields); // fields contains extra meta data about results, if available
	}
);

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json({ name: "John Doe" });
}
