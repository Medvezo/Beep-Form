import { GiPalmTree } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { State } from "./types";

export const options = [
	{ use: "Hobby", icon: GiPalmTree },
	{ use: "Work", icon: MdWork },
	{ use: "Education", icon: FaGraduationCap },
];

export const urls = [
	{ name: "step1", href: "/step-1", next: "/step-2" },
	{ name: "step2", href: "/step-2", next: "/step-3", previous: "/step-1" },
	{ name: "step3", href: "/step-3", next: "/summary", previous: "/step-2" },
	{ name: "summary", href: "/summary", previous: "/step-3" },
];

export const steps = [
	{ href: "/step-1", num: 1 },
	{ href: "/step-2", num: 2 },
	{ href: "/step-3", num: 3 },
];

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
