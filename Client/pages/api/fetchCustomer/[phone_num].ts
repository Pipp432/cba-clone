import type { NextApiRequest, NextApiResponse } from "next";

import connection from "../../../db";

type Data = Array<any>;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { phone_num } = req.query;
	if (phone_num) {
		connection.query(
			`SELECT Firstname, Surname, Address FROM Customers WHERE Phone_Number = '${phone_num}'  `,
			function (err: any, results: Data, fields: any) {
				try {
					if (results[0]) {
						return res.status(200).json(results);
					} else {
						return res.status(404).json({});
					}
				} catch {
					console.log("error");
				}
			}
		);
	}
}
