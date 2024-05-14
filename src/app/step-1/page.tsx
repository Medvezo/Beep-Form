"use client";
// It's not the best practice to have page as a client component because of SEO issues but i neglect that here to not create additional container component for that

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "@/hooks/useFormContext";

export default function Page() {
	const { state, dispatch } = useFormContext();

	const handleChange = (e: any) => {
		dispatch({
			type: "UPDATE_PERSONAL",
			payload: { [e.target.id]: e.target.value },
		});
	};

	return (
		<form className="space-y-5 ">
			<div className="flex flex-col w-full max-w-sm items-start justify-center gap-2">
				<Label htmlFor="firstName" className="font-bold">
					First Name:
				</Label>
				<Input
					placeholder="John"
					id="firstName"
					type="text"
					value={state.personalDetails.firstName}
					onChange={handleChange}
				/>
			</div>
			<div className="flex flex-col w-full max-w-sm items-start justify-center gap-2">
				<Label htmlFor="lastName" className="font-bold">
					Last Name:
				</Label>
				<Input
					placeholder="Doe"
					id="lastName"
					type="text"
					value={state.personalDetails.lastName}
					onChange={handleChange}
				/>
			</div>
			<div className="flex flex-col w-full max-w-sm items-start justify-center gap-2">
				<Label htmlFor="age" className="font-bold">
					Birthdate:
				</Label>
				<Input
					id="age"
					type="date"
					onChange={handleChange}
					value={state.personalDetails.age}
				/>
			</div>
		</form>
	);
}
