import { useState, useEffect } from "react";

import Link from "next/link";
import Cookies from "js-cookie";

const Navbar = () => {
	const [openDropDown, setOpenDropDown] = useState(false);
	const [employeeID, setEmployeeID] = useState("");

	const toggleDropdown = () => {
		setOpenDropDown(!openDropDown);
	};
	useEffect(() => {
		setEmployeeID(Cookies.get("ID") as string);

		setOpenDropDown(false);
	}, [Cookies.get("ID")]);

	return (
		<div className=' sticky top-0 bg-slate-100 shadow h-20 text-xl text-slate-500 z-10'>
			<div className='flex flex-row gap-[950px]'>
				<Link href='/'>
					<img
						src='https://uaterp.cbachula.com/public/img/cba-logo.png'
						alt='CBA_logo'
						width={"115px"}
						className='mt-3 ml-36'
					/>
				</Link>

				<button
					className='mt-6 hover:text-slate-600 cursor-pointer'
					onClick={toggleDropdown}
				>
					{employeeID}
				</button>
			</div>
			{openDropDown && (
				<div className='w-36 h-18 bg-slate-300 shadow-lg absolute right-32 text-black text-base z-10'>
					<Link
						href='/'
						onClick={() => {
							setOpenDropDown(false);
						}}
					>
						<ul className='p-2 hover:bg-slate-400'>หน้าแรก</ul>
					</Link>
					<hr />
					<Link
						href='/login'
						onClick={() => {
							setOpenDropDown(false);
							Cookies.set("ID", "");
						}}
					>
						<ul className='p-2 hover:bg-slate-400'>ออกจากระบบ</ul>
					</Link>
				</div>
			)}
		</div>
	);
};
export default Navbar;
