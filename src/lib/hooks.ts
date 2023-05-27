import { useEffect } from "react";
import { getCharacters } from "./api";

export const useLiveSearch = (dispatch: Function, searchKey: string, page?: number) => {
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