"use client";
// It's not the best practice to have page as a client component because of SEO issues but i neglect that here to not create additional container component for that

import { IoPersonSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMouse } from "react-icons/fa";
import FormContext from "@/components/context/FormContext";
import { useContext } from "react";
import { redirect } from "next/navigation";

export default function Page() {
	const { state } = useContext(FormContext);

	// URL enter prevention
	if (!state.validity.step3Valid) redirect("/step-3");

	return (
		<div className="flex flex-col gap-10  truncate ">
			<section className="flex flex-col gap-2 justify-center items-center">
				<div className="flex gap-2 justify-center items-center">
					<IoPersonSharp className="w-8 h-8 " />
					<h2 className="text-lg font-semibold">Personal Details</h2>
				</div>
				<div className="flex flex-col justify-center items-start gap-5 font-bold w-full text-slate-500 text-lg  border border-violet-500 rounded-lg py-2 px-5">
					<p>First Name: {state.personalDetails.firstName}</p>
					<p>Last Name: {state.personalDetails.lastName}</p>
					<p>Birthdate: {state.personalDetails.age}</p>
				</div>
			</section>

			<section className="flex flex-col gap-2 justify-center items-center">
				<div className="flex gap-2 justify-center items-center">
					<MdEmail className="w-8 h-8" />
					<h2 className="text-lg font-semibold">Contact Information</h2>
				</div>
				<div className="flex flex-col justify-center items-start gap-5 font-bold w-full text-slate-500 text-lg  border border-violet-500 rounded-lg py-2 px-5">
					<p>Email: {state.contactInfo.email}</p>
					<p>Password: {state.contactInfo.password}</p>
				</div>
			</section>

			<section className="flex flex-col gap-2 justify-center items-center">
				<div className="flex gap-2 justify-center items-center">
					<FaMouse className="w-8 h-8" />
					<h2 className="text-lg font-semibold">Usage</h2>
				</div>
				<div className="flex flex-col justify-center items-start gap-5 font-bold w-full text-slate-500 text-lg  border border-violet-500 rounded-lg py-2 px-5">
					<p>Type: {state.usage.use}</p>
				</div>
			</section>
		</div>
	);
}
