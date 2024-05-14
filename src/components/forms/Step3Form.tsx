"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { options } from "@/lib/const";
import { useFormContext } from "@/hooks/useFormContext";
import { useEffect } from "react";

export default function Step3Form() {
	const { state, dispatch } = useFormContext();

	const router = useRouter();

	// URL enter prevention
	useEffect(() => {
		if (!state.validity.step2Valid) router.replace("step-2");
	}, [state.validity.step2Valid, router]);

	const handleChange = (e: any) => {
		dispatch({
			type: "UPDATE_USAGE",
			payload: { [e.target.name]: e.target.value },
		});
	};

	return (
		<form className="flex justify-around items-center w-full gap-2 ">
			{options.map((option, _) => (
				<Label
					key={option.use}
					className={`flex flex-col gap-5 font-bold text-lg justify-center items-center w-1/3 border-2 ${
						state.usage.use === option.use
							? "bg-purple-main hover:bg-purple-main"
							: "hover:bg-purple-light"
					} border-violet-500 rounded-lg py-10 px-10  transition-all duration-200 ease-in-out `}
				>
					<Input
						type="radio"
						className="h-0 w-0 border-0"
						name="use"
						value={option.use}
						onChange={handleChange}
					/>
					<option.icon className="h-10 w-10" />
					{option.use}
				</Label>
			))}
		</form>
	);
}
