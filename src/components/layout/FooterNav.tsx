"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function FooterNav() {
	const urls = [
		{ href: "/step-1", next: "/step-2" },
		{ href: "/step-2", next: "/step-3", previous: "/step-1" },
		{ href: "/step-3", next: "/summary", previous: "/step-2" },
		{ href: "/summary", previous: "/step-3" },
	];

	const router = useRouter(); // for redirecting
	const path = usePathname(); // for getting url

	const currentStep = urls.find((url) => url.href === path);

	function navigate(url: string) {
		url ? router.push(url) : "";
	}
    console.log(currentStep)

	return (
		<footer className="w-full flex justify-between items-center ">
			{currentStep && currentStep.previous ? (
				<Button onClick={() => navigate(currentStep.previous)}>
					{"<"} Previous
				</Button>
			) : (
				<div></div> // so that second button place would not shift
			)}

			{currentStep && currentStep.next ? (
				<Button onClick={() => navigate(currentStep.next)}>
					{currentStep.href === "step-3" ? "Finish" : "Next"}
					{" > "}
				</Button>
			) : (
				<div></div> // so that second button place would not shift
			)}
		</footer>
	);
}