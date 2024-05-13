"use client";

import { usePathname } from "next/navigation";
import { CardDescription, CardTitle } from "../ui/card";

export default function HeaderNav() {
	const path = usePathname();

	const isSummary = path === "/summary";

	return (
		<>
			<CardTitle className="lg:text-3xl">
				{isSummary ? "Summary" : "Registration form"}
			</CardTitle>
			<CardDescription>
				{isSummary
					? "Review your credentials before submit"
					: "Enter your credentials below"}
			</CardDescription>
		</>
	);
}
