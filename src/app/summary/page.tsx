"use client";
// It's not the best practice to have page as a client component because of SEO issues but i neglect that here to not create additional container component for that
import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMouse } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useFormContext } from "@/hooks/useFormContext";
import { useEffect } from "react";

export default function Page() {
	const { state } = useFormContext();

	const router = useRouter()
	// URL enter prevention
	useEffect(() => {
		if (!state.validity.step3Valid) router.replace("step-3");
	}, [state.validity.step3Valid, router]);
	return (
		<div className="flex flex-col gap-10  truncate ">
			<section className="flex flex-col gap-2 justify-center items-center">
				<div className="flex gap-2 justify-center items-center">
					<IoPersonSharp className="w-8 h-8 " />
					<h2 className="text-lg font-semibold">Personal Details</h2>
				</div>
				<div className="flex flex-col justify-center items-start gap-5 font-bold w-full text-slate-400 text-lg  border border-violet-500 rounded-lg py-2 px-5">
					<p>
						First Name:{" "}
						<strong className="text-slate-950">
							{state.personalDetails.firstName}
						</strong>
					</p>
					<p>
						Last Name:{" "}
						<strong className="text-slate-950">
							{state.personalDetails.lastName}
						</strong>
					</p>
					<p>
						Birthdate:{" "}
						<strong className="text-slate-950">
							{state.personalDetails.age}
						</strong>
					</p>
				</div>
			</section>

			<section className="flex flex-col gap-2 justify-center items-center">
				<div className="flex gap-2 justify-center items-center">
					<MdEmail className="w-8 h-8" />
					<h2 className="text-lg font-semibold">Contact Information</h2>
				</div>
				<div className="flex flex-col justify-center items-start gap-5 font-bold w-full text-slate-400 text-lg  border border-violet-500 rounded-lg py-2 px-5">
					<p>
						Email:{" "}
						<strong className="text-slate-950">
							{state.contactInfo.email}
						</strong>
					</p>
					<p>
						Password:{" "}
						<strong className="text-slate-950">
							{state.contactInfo.password}
						</strong>
					</p>
				</div>
			</section>

			<section className="flex flex-col gap-2 justify-center items-center">
				<div className="flex gap-2 justify-center items-center">
					<FaMouse className="w-8 h-8" />
					<h2 className="text-lg font-semibold">Usage</h2>
				</div>
				<div className="flex flex-col justify-center items-start gap-5 font-bold w-full text-slate-400 text-lg  border border-violet-500 rounded-lg py-2 px-5">
					<p>
						Type: <strong className="text-slate-950">{state.usage.use} </strong>
					</p>
				</div>
			</section>
		</div>
	);
}
