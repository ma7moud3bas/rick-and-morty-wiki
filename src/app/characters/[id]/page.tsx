import { getCharacter } from "@/lib/api"
import Image from "next/image"
import Text from "@UI/text"
import Link from "@UI/link"

// revalidate every time
export const revalidate = 0

type Props = {
    params: {
        id: string
    }
}

export default async function Page({ params }: Props) {
    const { data } = await getCharacter(params.id)
    if (!data.character) {
        throw Error("Character not found", { cause: "NOT_FOUND" })
    }
    const { name, image, species, status, location, episode, gender } = data.character
    return (
        <section className="container mx-auto px-8 md:min-h-hero pt-16 md:pb-32 flex items-center md:justify-center">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex gap-4 flex-col">
                    <Image className="rounded" src={image} width="300" height="300" alt={`${name} image`} />
                </div>
                <div className="flex flex-col justify-center gap-3">
                    <Text as="h1" variant="2xl/bold">{name}</Text>

                    <div className="flex gap-2 items-center mt-2">
                        <div className={`h-3 w-3 rounded-full ${status === "Alive" ? "bg-brand-green" : "bg-red-400"}`}></div>
                        <Text as="p" variant="large/semibold"> {status} - {species}</Text>
                    </div>

                    <Text as="h1" variant="large/semibold">Gender: {gender}</Text>

                    <Text as="p" variant="large/semibold">
                        Last known location: <Link href={`/locations/${location.id}`} className={"font-semibold text-lg"}>{location.name}</Link>
                    </Text>

                    <Text as="p" variant="large/semibold">
                        First seen in: <Link href={`/episodes/${episode[0].id}`} className={"font-semibold text-lg "}>{episode[0].name}</Link>
                    </Text>
                    {
                        episode.length !== 1 &&
                        <Text as="p" variant="large/semibold">
                            Last seen in: <Link href={`/episodes/${episode[episode.length - 1].id}`} className={"font-semibold text-lg"}>{episode[episode.length - 1].name}</Link>
                        </Text>
                    }
                </div>
            </div>
        </section>
    )
}