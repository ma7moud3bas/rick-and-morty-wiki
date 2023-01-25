import { Character } from "@/types/character"

export interface CharacterResponse {
    data: {
        character: Character
    }
}

interface CharactersResponse {
    data: {
        characters: {
            info: {
                pages: number
                count: number
                next: number
                prev: number
            },
            results: Omit<Character, "gender">[]
        }
    }
}

export const getCharacter = async (id: string): Promise<CharacterResponse> => {
    return await fetch(`https://rickandmortyapi.com/graphql`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
            query: `query {
                character(id: ${id}) {
                        name
                        id
                        status
                        species
                        image
                        location {
                            id
                            name
                            dimension
                        }
                        episode {
                            id
                            name
                        }
                        gender
                    }
                }
            `}
        )
    })
        .then(res => res.json())
        .catch(err => { throw err })
}

export const getCharacters = async (page?: number, name?: string, signal?: AbortSignal): Promise<CharactersResponse> => {
    return await fetch(`https://rickandmortyapi.com/graphql`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        signal,
        body: JSON.stringify({
            query: `
            query {
                characters(page: ${page || 1}, filter: { name: "${name}"} ) {
                  info {
                    pages
                    count
                    next
                    prev
                  }
                  results {
                    name
                    id
                    status
                    species
                    image
                    location {
                      id
                      name
                      dimension
                    }
                    episode {
                        id
                        name
                    }
                  }
                }
              }`
        }
        )
    })
        .then(res => res.json())
        .catch(err => {
            if (err.message === "DOMException: The user aborted a request.") {
                console.log("request aborted")
            } else {
                throw err
            }
        })
}

