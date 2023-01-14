import { createContext } from "react";
import { useReducer } from "react";
import {
	ActionType,
	GlobalContextType,
	GlobalStateType,
} from "../Client/types";

const globalReducer = (state: GlobalStateType, action: ActionType) => {
	const newState = { ...state };
	switch (action.type) {
		case "login":
			return (newState["employeeID"] = action.payload);

		default:
			return newState;
	}
};
const initialGlobalState: GlobalStateType = {
	employeeID: "test",
};
export const GlobalContext = createContext<GlobalContextType>(
	{} as GlobalContextType
);
const GlobalContextComponent = (props: any) => {
	const [state, dispatch] = useReducer(globalReducer, initialGlobalState);

	return (
		<GlobalContext.Provider value={{ global_state: state, dispatch: dispatch }}>
			{props.children}
		</GlobalContext.Provider>
	);
};

export default GlobalContextComponent;
