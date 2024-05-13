"use client";
// It's not the best practice to have page as a client component because of SEO issues but i neglect that here to not create additional container component for that

import FormContext from "@/components/context/FormContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext } from "react";

export default function Page() {
	const { state, dispatch } = useContext(FormContext);

	const handleChange = (e: any) => {
		dispatch({
			type: "UPDATE_CONTACT",
			payload: { [e.target.id]: e.target.value },
		});
	};

	return (
		<form className="space-y-5">
			<div className="flex flex-col w-full max-w-sm items-start justify-center gap-2">
				<Label htmlFor="email" className="font-bold">
					E-mail:
				</Label>
				<Input
					type="email"
					id="email"
					placeholder="example@gmail.com"
					value={state.contactInfo.email}
					onChange={handleChange}
				/>
			</div>

			<div className="flex flex-col w-full max-w-sm items-start justify-center gap-2">
				<Label htmlFor="password" className="font-bold">
					Password:
				</Label>
				<Input
					type="password"
					id="password"
					placeholder="***********"
					value={state.contactInfo.password}
					onChange={handleChange}
				/>
			</div>

			<div className="flex flex-col w-full max-w-sm items-start justify-center gap-2">
				<Label htmlFor="repeat-password" className="font-bold">
					Repeat Password:
				</Label>
				<Input type="password" id="repeat-password" placeholder="***********" />
			</div>
		</form>
	);
}
