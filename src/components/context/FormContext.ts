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
	validity: {
		step1Valid: boolean;
		step2Valid: boolean;
		step3Valid: boolean;
		[key: string]: boolean;  // Allow any string index to return a boolean 
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
	validity: {
		step1Valid: false,
		step2Valid: false,
		step3Valid: false,
	},
};

export function formReducer(state: State, action: Action) {
	switch (action.type) {
		case "UPDATE_PERSONAL":
			const updatedPersonalDetails = {
				...state.personalDetails,
				...action.payload,
			};
			const step1Valid =
				updatedPersonalDetails.firstName !== "" &&
				updatedPersonalDetails.lastName !== "" &&
				updatedPersonalDetails.age !== "";
			return {
				...state,
				personalDetails: updatedPersonalDetails,
				validity: { ...state.validity, step1Valid },
			};

		case "UPDATE_CONTACT":
			const updatedContactInfo = { ...state.contactInfo, ...action.payload };
			const step2Valid =
				updatedContactInfo.email !== "" && updatedContactInfo.password !== "";
			return {
				...state,
				contactInfo: updatedContactInfo,
				validity: { ...state.validity, step2Valid },
			};
		case "UPDATE_USAGE":
			const updatedUsage = { ...state.usage, ...action.payload };
			const step3Valid = updatedUsage.use !== "";
			return {
				...state,
				usage: updatedUsage,
				validity: { ...state.validity, step3Valid },
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
