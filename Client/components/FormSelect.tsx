import { FormSelectType } from "../types";

const FormSelect = (props: FormSelectType) => {
	return (
		<div className={props.colSpan}>
			<div className='mb-2'>{props.title}</div>
			<select className={props.selectStyle}>
				{props.options.map((option: string) => {
					return <option key={option}>{option}</option>;
				})}
			</select>
		</div>
	);
};
export default FormSelect;
