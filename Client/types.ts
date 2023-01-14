import { ChangeEventHandler, Dispatch } from "react";

export interface InputType {
	customStyle?: string;
	placeholder?: string;
	type?: string;
	onChangeHandler?: ChangeEventHandler<HTMLInputElement>;
	disabled?: boolean;
	value?: string;
}
export interface DepartmentType {
	name: string;
}
export interface DepartmentBtnType {
	label: string;
	imageLink: string;
	href: string;
}
export interface ActionType {
	type: string;

	payload?: any;
}
interface GlobalStateKeys {
	[key: string]: any;
}
export interface GlobalContextType {
	global_state: GlobalStateType;
	dispatch: Dispatch<ActionType>;
}

export interface GlobalStateType extends GlobalStateKeys {
	employeeID: string;
}
export interface cardType {
	children?: any;
}
export interface FormInputType {
	colSpan: string;
	inputStyle?: string;
	title?: string;
	disabled?: boolean;
	onChangeHandler?: ChangeEventHandler<HTMLInputElement>;
	value?: string;
}
export interface FormSelectType {
	colSpan: string;
	selectStyle?: string;
	title?: string;
	options: Array<string>;
}
