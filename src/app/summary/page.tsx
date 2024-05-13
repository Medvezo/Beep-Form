"use client";
// It's not the best practice to have page as a client component because of SEO issues but i neglect that here to not create additional container component for that

import FormContext from "@/components/context/FormContext";
import { useContext } from "react";

export default function Page() {
	const { state } = useContext(FormContext);

	return (
		<div className="summary-container">
			<h1>Summary of Your Input</h1>
			<div className="summary-section">
				<h2>Personal Details</h2>
				<p>
					<strong>First Name:</strong> {state.personalDetails.firstName}
				</p>
				<p>
					<strong>Last Name:</strong> {state.personalDetails.lastName}
				</p>
				<p>
					<strong>Age:</strong> {state.personalDetails.age}
				</p>
			</div>
			<div className="summary-section">
				<h2>Contact Information</h2>
				<p>
					<strong>Email:</strong> {state.contactInfo.email}
				</p>
				<p>
					<strong>Password:</strong> {state.contactInfo.password}
				</p>
			</div>
			<div className="summary-section">
				<h2>Usage</h2>
				<p>
					<strong>Type:</strong> {state.usage.use}
				</p>
			</div>
		</div>
	);
}
