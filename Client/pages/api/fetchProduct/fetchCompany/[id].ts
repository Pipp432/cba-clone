import type { NextApiRequest, NextApiResponse } from "next";

import connection from "../../../../db";

type Data = Array<any>;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { id } = req.query;

	connection.query(
		`SELECT Company.company_id, Company.name FROM Company INNER JOIN Employees ON Company.product_line = Employees.product_line WHERE ID = '${id}'`,
		function (err: any, results: Data, fields: any) {
			if (results) {
				return res.status(200).json(results);
			} else {
				return res.status(404).json({});
			}
		}
	);
}
