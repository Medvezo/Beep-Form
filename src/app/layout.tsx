import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Card, CardHeader } from "@/components/ui/card";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Beep Form",
	description: "Task #1 Multi-step Form (UI/UX focused)",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<main className="flex justify-center items-center min-h-screen ">
					<Card className="p-5 lg:w-[500px] min-h-96">
						<CardHeader className="text-3xl lg:text-4xl font-bold ">Registration form</CardHeader>
						{children}
					</Card>
				</main>
			</body>
		</html>
	);
}
