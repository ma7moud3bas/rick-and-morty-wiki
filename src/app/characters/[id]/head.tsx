import { getCharacter } from "@/lib/api"
import { NextSeo } from "next-seo"

type Props = {
    params: { id: string }
}
export default async function Head({ params }: Props) {
    const { data } = await getCharacter(params.id)
    if (!data.character) {
        throw Error("Character not found", { cause: "NOT_FOUND" })
    }
    const { name, image, status } = data.character
    return (
        <>
            <NextSeo
                useAppDir={true}
                title={`${name} | Rick and morty Wiki`}
                description={name}
                canonical={`https://rick-n-morty-wiki.vercel.app/characters/${params.id}`}
                openGraph={
                    {
                        title: name,
                        description: `${name} - ${status}`,
                        url: `https://rick-n-morty-wiki.vercel.app/characters/${params.id}`,
                        images: [
                            {
                                url: image
                            }
                        ]
                    }
                }
            />
        </>
    )
}