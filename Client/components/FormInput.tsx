import { FormInputType } from "../types";
import Input from "./Input";

const FormInput = (props: FormInputType) => {
	return (
		<div className={props.colSpan}>
			<div className='mb-2'>{props.title}</div>
			<Input
				customStyle={props.inputStyle}
				disabled={props.disabled}
				onChangeHandler={props.onChangeHandler}
				value={props.value}
				type={props.type}
				placeholder={props.placeholder}
			/>
		</div>
	);
};
export default FormInput;
