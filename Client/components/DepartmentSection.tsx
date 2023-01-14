import { DepartmentBtnType, DepartmentType } from "../types";
import MenuBtn from "./MenuBtn";
import { financeBtns, salesBtns } from "../data/department/Fin";

const DepartmentSection = (props: DepartmentType) => {
	return (
		<div className='mt-8 cursor-pointer'>
			<div className='text-black text-2xl font-bold mb-4'>{props.name}</div>
			<div className='grid gap-10 grid-cols-5  '>
				{salesBtns.map((btn: DepartmentBtnType) => (
					<MenuBtn
						imageLink={btn.imageLink}
						label={btn.label}
						href={btn.href}
						key={btn.label}
					/>
				))}
			</div>
		</div>
	);
};
export default DepartmentSection;
