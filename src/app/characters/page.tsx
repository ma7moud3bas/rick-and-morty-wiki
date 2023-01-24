"use client"
// normally I would use a query library like react query or maybe use the new React hook "use" with a cache controller, 
// or since I'm using a graphql api I'd use something like Apollo client.
// but the task requested redux or something similar. I'd normally leave redux to a more complex situation. 


import { Dispatch, useReducer, useEffect, useState } from "react"
import SearchBar from "@/components/SearchBar"
import CharactersContainer from "@/components/CharactersContainer"
import { getCharacters } from "@/lib/api"
import { flushSync } from 'react-dom';

type State = {
    data: any[]
    isLoading: boolean
    error?: string,
    searchKey: string
}

type Action =
    | { type: 'request', }
    | { type: 'success', results: character[] }
    | { type: 'failure', error: string }
    | { type: 'setSearchKey', searchKey: string }

type character = {}

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "request": {
            return { ...state, isLoading: true }
        };

        case "success": {
            return { ...state, isLoading: false, data: action.results }
        };

        case "failure": {
            return { ...state, isLoading: false, error: action.error }
        };

        case "setSearchKey": {
            return { ...state, searchKey: action.searchKey }
        };

        default: {
            throw Error("Unknown Action")
        }
    }
}

const initialState = { isLoading: true, data: [], searchKey: "" }



const useLiveSearch = (dispatch: Dispatch<Action>, searchKey: string, page?: number) => {
    useEffect(() => {
        const controller = new AbortController();
        (async function () {
            try {
                const { data } = await getCharacters(page || 1, searchKey, controller.signal)
                if (data.characters) {
                    dispatch({ type: "success", results: data.characters.results })
                }
            } catch (err) {
                console.error(err)
                dispatch({ "type": "failure", error: "Something went wrong" })
            }

        })()
        return () => controller.abort()
    }, [searchKey])
}


export default function Page() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { searchKey, data, isLoading, error } = state;
    const [debounceValue, setDebounceValue] = useState("")
    useEffect(() => {
        const timeOut = setTimeout(() => {
            dispatch({ type: "setSearchKey", searchKey: debounceValue })
            flushSync(() => {
                dispatch({ type: "request" })
            });
        }, 300);
        return () => clearTimeout(timeOut)
    }, [debounceValue])

    useLiveSearch(dispatch, searchKey)

    return (
        <section className="container min-h-hero px-8 mx-auto py-12 md:py-20  flex flex-col">
            <div className="max-w-5xl mx-auto w-full gap-y-20 flex flex-col ">
                <SearchBar value={debounceValue} onChange={(key: string) => setDebounceValue(key)} />
                <CharactersContainer {...{ isLoading, data, error }} />
            </div>
        </section>
    )
}
