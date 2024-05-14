import FormContext from "@/components/context/FormContext";
import { useContext } from "react";

export function useFormContext() {
	const context = useContext(FormContext);
    
	if (context === undefined) {
		throw new Error("useFormContext is not inside of FormProvider");
	}
	return context;
}
