// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import connection from "../../../db";

// simple query

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const { company_id } = req.query;

	connection.query(
		`SELECT Product_ID,Product_name,Price,Catagory FROM Products INNER JOIN Company ON Products.Company_ID = Company.Company_ID WHERE Company.Company_ID =${company_id}`,
		function (err, results: any, fields) {
			return res.status(200).json(results);
		}
	);
}
