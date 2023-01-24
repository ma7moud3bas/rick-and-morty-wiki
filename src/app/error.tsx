'use client';
import Text from "@UI/text"
import Button from "@UI/button"
import { useEffect } from "react";
export interface ErrorProps {
    error: Error;
    reset: () => void;
}
export default function Error({ error, reset }: ErrorProps) {
    useEffect(() => {
        // Log the error to an error reporting service like sentry
        console.error(error);
    }, [error]);
    return (
        <section className="container px-8 mx-auto h-hero flex items-center justify-center">
            <div className="mb-12 flex flex-col items-center gap-8">
                <Text as="h1" variant="2xl/bold" >
                    Something went wrong!
                </Text>
                <Button href="/">
                    Go back home
                </Button>
            </div>
        </section>
    )
} 