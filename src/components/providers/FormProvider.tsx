"use client";

import  { useReducer } from 'react';
import FormContext, { formReducer, initialState } from "../context/FormContext";

export function FormProvider({ children }: { children: React.ReactNode }) {
    const [state, dispatch] = useReducer(formReducer, initialState);

    const value = { state, dispatch };

    return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
