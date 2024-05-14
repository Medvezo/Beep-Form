export interface State {
	personalDetails: {
		firstName: string;
		lastName: string;
		age: string;
	};
	contactInfo: {
		email: string;
		password: string;
		repeatPassword: string;
	};
	usage: {
		use: string;
	};
	validity: {
		step1Valid: boolean;
		step2Valid: boolean;
		step3Valid: boolean;
		[key: string]: boolean; // Allow any string index to return a boolean
	};
}

export type Action =
	| { type: "UPDATE_PERSONAL"; payload: Partial<State["personalDetails"]> }
	| { type: "UPDATE_CONTACT"; payload: Partial<State["contactInfo"]> }
	| { type: "UPDATE_USAGE"; payload: Partial<State["usage"]> };
