import Link from "next/link";
import { DepartmentBtnType } from "../types";

const MenuBtn = (props: DepartmentBtnType) => {
	return (
		<Link href={props.href}>
			<div className='rounded-lg bg-cyan-50 w-42 h-32 p-2 hover:bg-cyan-100 hover:shadow-lg hover translate-x-2'>
				<div className='flex items-center justify-center flex-col font-bold'>
					<img src={props.imageLink} width={"70px"} />
					<div className='text-blue-400 mt-2'>{props.label}</div>
				</div>
			</div>
		</Link>
	);
};
export default MenuBtn;
