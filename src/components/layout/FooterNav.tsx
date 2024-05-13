"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function FooterNav() {
	const urls = [
		{ herf: "/step-1", next: "/step-2", previous: "" },
		{ href: "/step-2", next: "step-3", previous: "/step-1" },
		{ href: "/step-3", next: "/summary", previous: "/step-2" },
		{ href: "/summary", next: "", previous: "/step-3" },
	];

	const router = useRouter(); // for redirecting
	const path = usePathname(); // for getting url

	return (
		<footer className="w-full flex justify-between items-center ">
			{path == "/step-1" ? (
				""
			) : (
				<Button onClick={() => router.back()}>{"<"} Previous</Button>
			)}

			<Button onClick={() => router.push("step-2")}>
				{path == "step-3" ? "Finish" : "Next"}
				{" > "}
			</Button>
		</footer>
	);
}
