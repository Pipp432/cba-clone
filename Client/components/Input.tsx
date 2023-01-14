import { InputType } from "../types";

const Input = (props: InputType) => {
	return (
		<>
			<input
				className={
					props.customStyle
						? props.customStyle
						: "rounded bg-slate-100 border-slate-400 border-2 h-8 w-72 p-2"
				}
				placeholder={props.placeholder}
				type={props.type}
				onChange={props.onChangeHandler}
				disabled={props.disabled}
				value={props.value}
			/>
		</>
	);
};
export default Input;
