import type { NextApiRequest, NextApiResponse } from "next";

import connection from "../../../db";

type Data = Array<any>;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { id, password } = req.query;
	if (password) {
		connection.query(
			`SELECT * FROM Employees WHERE ID = '${id}' AND Password = '${password}' `,
			function (err: any, results: Data, fields: any) {
				if (results[0]) {
					return res.status(200).json(results);
				} else {
					return res.status(404).json({});
				}
			}
		);
	} else {
		connection.query(
			`SELECT Firstname, Surname FROM Employees WHERE ID = '${id}'`,
			function (err: any, results: Data, fields: any) {
				if (results[0]) {
					return res.status(200).json(results);
				} else {
					return res.status(404).json({});
				}
			}
		);
	}
}
