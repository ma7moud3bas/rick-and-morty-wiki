export interface Character {
    id: string
    name: string
    status: string
    species: string
    image: string
    location: {
        id: string
        name: string
        dimension: string
    }
    episode: {
        id: string
        name: string
    }[]
}