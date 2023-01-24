"use client"
// normally I would use a query library like react query or maybe use the new React hook "use" with a cache controller, 
// or since I'm using a graphql api I'd use something like Apollo client.
// but the task requested redux or something similar. I'd normally leave redux to a more complex situation. 


import { Dispatch, useReducer, useEffect, useState } from "react"
import SearchBar from "@/components/SearchBar"
import CharactersContainer from "@/components/CharactersContainer"
import Pagination from "@/components/Pagination"
import { getCharacters } from "@/lib/api"

type State = {
    data: any[]
    isLoading: boolean
    error?: string,
    searchKey: string
    pages: number | null
    next: number | null
    prev: number | null
    count: number | null
}

type Action =
    | { type: 'request', }
    | {
        type: 'success', results: {
            info: {
                pages: number
                count: number
                next: number
                prev: number
            }
            results: character[]
        }
    }
    | { type: 'failure', error: string }
    | { type: 'setSearchKey', searchKey: string }
    | { type: "nextPage" }
    | { type: "prevPage" }

type character = {}

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "nextPage": {
            if (state.next) {
                return { ...state, prev: state.prev ? state.prev + 1 : 1, next: state.next === state.pages ? null : state.next + 1 }
            } else {
                return state
            }
        }
        case "prevPage": {
            if (state.prev) {
                return { ...state, prev: state.prev === 1 ? null : state.prev - 1, next: state.next ? state.next - 1 : 2 }
            } else {
                return state
            }
        }
        case "request": {
            return { ...state, isLoading: true }
        };

        case "success": {
            return { ...state, isLoading: false, ...action.results.info, data: action.results.results }
        };

        case "failure": {
            return { ...state, isLoading: false, error: action.error }
        };

        case "setSearchKey": {
            return { ...state, searchKey: action.searchKey, pages: 1, next: null, prev: null, count: null }
        };

        default: {
            throw Error("Unknown Action")
        }
    }
}

const initialState: State = { isLoading: true, data: [], searchKey: "", pages: 0, next: null, prev: null, count: null }



const useLiveSearch = (dispatch: Dispatch<Action>, searchKey: string, page?: number) => {
    useEffect(() => {
        const controller = new AbortController();
        (async function () {
            dispatch({ type: "request" })
            try {
                const { data } = await getCharacters(page || 1, searchKey, controller.signal)
                if (data.characters) {
                    dispatch({ type: "success", results: data.characters })
                }
            } catch (err) {
                console.error(err)
                dispatch({ "type": "failure", error: "Something went wrong" })
            }

        })()
        return () => controller.abort()
    }, [searchKey, page])
}


export default function Page() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { searchKey, data, isLoading, error } = state;
    const [debounceValue, setDebounceValue] = useState("")
    useEffect(() => {
        const timeOut = setTimeout(() => {
            dispatch({ type: "setSearchKey", searchKey: debounceValue })
        }, 400);
        return () => clearTimeout(timeOut)
    }, [debounceValue])

    useLiveSearch(dispatch, searchKey, state.prev ? state.prev + 1 : 1)

    return (
        <section className="container min-h-hero px-8 mx-auto py-12 md:py-20  flex flex-col">
            <div className="max-w-5xl mx-auto w-full gap-y-20 flex flex-col ">
                <SearchBar value={debounceValue} onChange={(key: string) => setDebounceValue(key)} />
                <CharactersContainer {...{ isLoading, data, error }} />
                <Pagination next={state.next} prev={state.prev} count={state.count} pages={state.pages} currentCount={data.length}
                    goForward={() => dispatch({ type: "nextPage" })}
                    goBack={() => dispatch({ type: "prevPage" })}
                />
            </div>
        </section>
    )
}
