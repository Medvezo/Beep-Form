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
				<main className="flex flex-col justify-center items-center gap-6 lg:gap-10 min-h-screen ">
					<FormProvider>
						<Steps />
						<Card className="p-5 lg:w-[500px] min-h-96 relative">
							<CardHeader>
								<HeaderNav />
							</CardHeader>
							<CardContent>{children}</CardContent>
							<CardFooter>
								<FooterNav />
							</CardFooter>
						</Card>
					</FormProvider>
				</main>
			</body>
		</html>
	);
}
