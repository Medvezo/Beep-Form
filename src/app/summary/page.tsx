import SummaryForm from "@/components/forms/SummaryForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Summary",
};

export default function Page() {
	return <SummaryForm />;
}
