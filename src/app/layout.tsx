import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {
	Card,
	CardHeader,
	CardFooter,
	CardContent,
} from "@/components/ui/card";
import Steps from "@/components/layout/Steps";
import FooterNav from "@/components/layout/FooterNav";
import { FormProvider } from "@/components/providers/FormProvider";
import HeaderNav from "@/components/layout/HeaderNav";

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
				<FormProvider>
					<main className="flex flex-col justify-center items-center gap-6 lg:gap-10 min-h-screen ">
						<Steps />
						<Card className="p-3 w-full max-w-96 sm:max-w-md lg:max-w-xl sm:w-[500px] min-h-[434px] relative space-y-3">
							<CardHeader>
								<HeaderNav />
							</CardHeader>
							<CardContent>{children}</CardContent>
							<CardFooter >
								<FooterNav />
							</CardFooter>
						</Card>
					</main>
				</FormProvider>
			</body>
		</html>
	);
}
