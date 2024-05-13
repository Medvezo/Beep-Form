"use client";

import { usePathname } from "next/navigation";

export default function Steps() {
	const steps = [
		{ href: "/step-1", num: 1 },
		{ href: "/step-2 ", num: 2 },
		{ href: "/step-3", num: 3 },
	];

	const path = usePathname();
	console.log(path);

	return (
		<section className="flex justify-center items-center gap-5 lg:gap-16">
			{steps.map((step) => (
				<div
					key={step.num}
					className={`${
						step.href == path ? "bg-purple-main" : "bg-purple-light"
					} w-10 h-10 rounded-full p-7 flex justify-center items-center font-bold text-2xl transition-all duration-200 ease-in-out`}
				>
					{step.num}
				</div>
			))}
		</section>
	);
}
