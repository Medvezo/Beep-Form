import { Dispatch, createContext } from "react";

interface State {
	personalDetails: {
		firstName: string;
		lastName: string;
		age: string;
	};
	contactInfo: {
		email: string;
		password: string;
	};
	usage: {
		use: string;
	};
}
type Action =
	| { type: "UPDATE_PERSONAL"; payload: Partial<State["personalDetails"]> }
	| { type: "UPDATE_CONTACT"; payload: Partial<State["contactInfo"]> }
	| { type: "UPDATE_USAGE"; payload: Partial<State["usage"]> };

export const initialState: State = {
	personalDetails: {
		firstName: "",
		lastName: "",
		age: "",
	},
	contactInfo: {
		email: "",
		password: "",
	},
	usage: {
		use: "",
	},
};

export function formReducer(state: State, action: Action) {
	switch (action.type) {
		case "UPDATE_PERSONAL":
			return {
				...state,
				personalDetails: { ...state.personalDetails, ...action.payload },
			};
		case "UPDATE_CONTACT":
			return {
				...state,
				contactInfo: { ...state.contactInfo, ...action.payload },
			};
		case "UPDATE_USAGE":
			return {
				...state,
				usage: { ...state.usage, ...action.payload },
			};
		default:
			throw new Error(`Unhandled action type: ${action}`);
	}
}

const FormContext = createContext<{ state: State; dispatch: Dispatch<Action> }>(
	{
		state: initialState,
		dispatch: () => undefined,
	}
);

export default FormContext;
