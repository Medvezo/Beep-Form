"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "@/hooks/useFormContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Step2Form() {
	const { state, dispatch } = useFormContext();

	const router = useRouter();

	// URL enter prevention
	useEffect(() => {
		if (!state.validity.step1Valid) router.replace("step-1");
	}, [state.validity.step1Valid, router]);

	const handleChange = (e: any) => {
		dispatch({
			type: "UPDATE_CONTACT",
			payload: { [e.target.id]: e.target.value },
		});
	};

	return (
		<form className="space-y-5 ">
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
				<Label htmlFor="repeatPassword" className="font-bold">
					Repeat Password:
				</Label>
				<Input
					type="password"
					id="repeatPassword"
					placeholder="***********"
					value={state.contactInfo.repeatPassword}
					onChange={handleChange}
				/>
			</div>
		</form>
	);
}
