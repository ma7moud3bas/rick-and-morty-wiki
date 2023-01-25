import { NextSeo } from "next-seo";

export default function Head() {
    return (
        <>
            <NextSeo
                useAppDir={true}
                title={`Browse Characters | Rick and morty Wiki`}
                description={"Search all Rick and Morty characters"}
                canonical={`https://rick-and-morty-wiki-ma.vercel.app/characters`}
                openGraph={
                    {
                        title: `Browse Characters | Rick and morty Wiki`,
                        description: "Search all Rick and Morty characters",
                        url: `https://rick-and-morty-wiki-ma.vercel.app/characters`,
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