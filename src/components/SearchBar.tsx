"use client"

import { KeyboardEvent, useEffect, useRef } from "react"

interface Props {
    value: string
    onChange(key: string): void
}

export default function SearchBar({ onChange, value }: Props) {
    const InputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (!event.ctrlKey && !event.metaKey) {
                return
            }
            if (event.key === "k") {
                event.preventDefault()
                InputRef.current?.focus()
            }
        }
        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [])

    return (
        <div className="relative mt-1 flex items-center h-12 border border-gray-400 rounded w-full">
            <input
                ref={InputRef}
                type="text"
                name="search"
                id="search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="block w-full h-full rounded-md border-gray-300 pl-4 text-lg font-medium text-brand-dark pr-12 shadow-sm focus:outline-brand-dark focus:ring-brand-green "
            />
            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                <kbd className="inline-flex items-center rounded border border-gray-400 px-2 font-sans text-sm font-medium text-gray-400">
                    ⌘K
                </kbd>
            </div>
        </div>
    )
}