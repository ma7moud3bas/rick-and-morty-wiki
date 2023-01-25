'use client';
import Text from "@UI/text"
import Navbar from "@UI/navbar"
import { useEffect } from "react";
export interface ErrorProps {
    error: Error;
    reset: () => void;
}
export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);
    return (
        <main className="min-h-screen flex flex-col font-satoshi">
            <Navbar />
            <section className="container px-8 mx-auto h-hero flex items-center justify-center">
                <Text as="h1" variant="xl/bold">
                    Something went wrong!
                </Text>
            </section>
        </main>
    )
} 