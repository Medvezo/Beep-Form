"use client";
// It's not the best practice to have page as a client component because of SEO issues but i neglect that here to not create additional container component for that
import { redirect } from 'next/navigation';

export default function Home() {
    redirect("/step-1")
}
