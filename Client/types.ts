import {
	ChangeEventHandler,
	Dispatch,
	EventHandler,
	TextareaHTMLAttributes,
} from "react";

export interface InputType {
	id?: string;
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
	id?: string;
	colSpan: string;
	title?: string;
	disabled?: boolean;
	onChangeHandler?: ChangeEventHandler<HTMLInputElement>;
}
export interface ModalType {
	title: string;
	content: string;
	toggler: () => void;
}
export interface ModalMessageType {
	[key: string]: { title: string; content: string };
}
export interface AddCustomerDataType {
	database: string;
	prefix: string;
	firstname: string;
	lastname: string;
	nickname: string;
	province: string;
	zipcode: string;
	phoneNumber: string;
	email: string;
	citizenId: string;
	address: string;
}
