import Step1Form from "@/components/forms/Step1Form";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Step 1",
};

export default function Page() {
	return <Step1Form />;
}
