// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import connection from "../../../db";

// simple query

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { id } = req.query;
	console.log(id);

	connection.query(
		`SELECT * FROM Company INNER JOIN Employees ON Company.product_line = Employees.product_line  WHERE ID = 'IS005'`,
		function (err, results: any, fields) {
			return res.status(200).json(results);
		}
	);
}
