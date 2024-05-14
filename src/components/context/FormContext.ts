import { Dispatch, createContext } from "react";
import { State, Action } from "@/lib/types";

export const initialState: State = {
	personalDetails: {
		firstName: "",
		lastName: "",
		age: "",
	},
	contactInfo: {
		email: "",
		password: "",
		repeatPassword: "",
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

// it's more preferrable i would say to have another "store" for this reducer
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
				updatedContactInfo.email !== "" &&
				updatedContactInfo.password !== "" &&
				updatedContactInfo.repeatPassword !== "" &&
				updatedContactInfo.repeatPassword === updatedContactInfo.password;
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
