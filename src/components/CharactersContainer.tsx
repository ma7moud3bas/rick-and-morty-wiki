"use client"

import { Character } from "@/types/character"
import Image from "next/image"
import Text from "@UI/text"
import Link from "@UI/link"
import NextLink from "next/link"
interface Props {
    data: Character[]
    error?: string
    isLoading: boolean
}

export default function CharactersContainer({ data, error, isLoading }: Props) {
    if (isLoading && data.length === 0) {
        return (
            <div>
                loading.................
            </div>
        )
    }
    return (
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {
                data.map((character) => (
                    <NextLink href={`/characters/${character.id}`} key={character.id} className="grid grid-cols-1 md:grid-cols-2 rounded shadow-xl bg-brand-dark">
                        <Image className="rounded object-cover h-full w-full" src={character.image} width="300" height="300" alt={`${character.name} image`} />
                        <div className="flex flex-col justify-center gap-2 px-4 py-3">
                            <Text color="light" as="h1" variant="2xl/bold">{character.name}</Text>
                            <div className="flex gap-2 items-center mt-1">
                                <div className={`h-3 w-3 rounded-full ${character.status === "Alive" ? "bg-brand-green" : "bg-red-400"}`}></div>
                                <Text color="light" as="p" variant="medium/semibold"> {character.status} - {character.species}</Text>
                            </div>
                            <Text color="light" as="p" variant="medium/semibold">
                                Last known location: <Link href={`/locations/${character.location.id}`} className={"font-semibold text-brand-light"}>{character.location.name}</Link>
                            </Text>

                            <Text color="light" as="p" variant="medium/semibold">
                                First seen in: <Link href={`/episodes/${character.episode[0].id}`} className={"font-semibold text-brand-light"}>{character.episode[0].name}</Link>
                            </Text>
                            {
                                character.episode.length !== 1 &&
                                <Text color="light" as="p" variant="medium/semibold">
                                    Last seen in: <Link href={`/episodes/${character.episode[character.episode.length - 1].id}`} className={"font-semibold text-brand-light"}>{character.episode[character.episode.length - 1].name}</Link>
                                </Text>
                            }
                        </div>
                    </NextLink>
                ))
            }
        </section >
    )
}