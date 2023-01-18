import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const Hello = () => {
	const [id, setId] = useState("");
	useEffect(() => {
		setId(Cookies.get("ID") as string);
	}, []);

	return (
		<div className='w-[100%] h-36 bg-blue-400 text-white flex justify-center align-middle flex-col items-center'>
			<ul className='text-3xl'>สวัสดี, {id} </ul>

			<ul className='text-2xl'>สู้ๆ นะค้าบบบ จาก IS</ul>
		</div>
	);
};
export default Hello;
