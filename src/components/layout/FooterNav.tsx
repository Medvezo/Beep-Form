"use client";

import { useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";
import FormContext from "../context/FormContext";
import { urls } from "@/lib/const";

export default function FooterNav() {
	const { state } = useContext(FormContext);

	const router = useRouter(); // for redirecting
	const path = usePathname(); // for getting url

	const currentStep = urls.find((url) => url.href === path);

	function navigate(url: string) {
		url ? router.push(url) : "";
	}

	const isSummary = path === "/summary";
	let isValid = state.validity[`${currentStep?.name}Valid`];

	return (
		<footer className="w-full px-5 flex justify-between items-center absolute left-0 bottom-2">
			{currentStep && currentStep.previous ? (
				<Button onClick={() => navigate(currentStep.previous)}>
					{"<"} Previous
				</Button>
			) : (
				<div></div> // so that second button place would not shift
			)}

			{currentStep && currentStep.next ? (
				<Button disabled={!isValid} onClick={() => navigate(currentStep.next)}>
					{currentStep.href === "step-3" ? "Finish" : "Next"}
					{" > "}
				</Button>
			) : (
				!isSummary && <div></div> // so that second button place would not shift
			)}

			{isSummary && (
				<Button variant={"secondary"} disabled>
					Submit
				</Button>
			)}
		</footer>
	);
}
