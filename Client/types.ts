import { ChangeEventHandler, Dispatch, TextareaHTMLAttributes } from "react";

export interface InputType {
	customStyle?: string;
	placeholder?: string;
	type?: string;
	onChangeHandler?: any;
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
export interface FormInputType extends FormUserInputType {
	inputStyle?: string;
	value?: string;
	placeholder?: string;
	type?: string;
}
export interface FormSelectType extends FormUserInputType {
	selectStyle?: string;
	options: Array<string>;
}

interface FormUserInputType {
	colSpan: string;
	title?: string;
	disabled?: boolean;
	onChangeHandler?: ChangeEventHandler<HTMLInputElement>;
}
export interface ModalType {
	title: string;
	content: string;
}
