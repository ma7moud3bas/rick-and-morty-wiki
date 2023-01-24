import Text from "@UI/text"
import Button from "@UI/button"

export default function NotImplemented() {
    return (
        <section className="container px-8 mx-auto h-hero flex items-center justify-center">
            <div className="mb-12 flex flex-col items-center gap-8">
                <Text as="h1" variant="2xl/bold" >
                    This page is not implemented yet!
                </Text>
                <Button href="/">
                    Go back home
                </Button>
            </div>
        </section>
    )
}