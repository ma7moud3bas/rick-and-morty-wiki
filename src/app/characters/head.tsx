import { NextSeo } from "next-seo";

export default function Head() {
    return (
        <>
            <NextSeo
                useAppDir={true}
                title={`Browse Characters | Rick and morty Wiki`}
                description={"Search all Rick and Morty characters"}
                canonical={`https://rick-n-morty-wiki.vercel.app/characters`}
                openGraph={
                    {
                        title: `Browse Characters | Rick and morty Wiki`,
                        description: "Search all Rick and Morty characters",
                        url: `https://rick-n-morty-wiki.vercel.app/characters`,
                        images: [
                            {
                                url: "/OGImage.webp"
                            }
                        ]
                    }
                }
            />
        </>
    )
}