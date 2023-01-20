import type { NextApiRequest, NextApiResponse } from "next";
import { AddCustomerDataType } from "../../types";
import connection from "../../db";
export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const data: AddCustomerDataType = req.body;
	const fullAddress = `${data.address} ${data.province} ${data.zipcode}`;

	console.log(data);
	if (data) {
		// connection.query(
		// 	`INSERT INTO Customers (Firstname,Surname,Phone_Number,Address) VALUES ('${data.firstname}','${data.lastname}','${data.phoneNumber}','${fullAddress}')`
		// );
		res.status(200).json({ msg: "Posted data" });
	} else res.status(404).json({ msg: "No data" });
}
