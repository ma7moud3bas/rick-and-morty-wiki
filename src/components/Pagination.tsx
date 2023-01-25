interface Props {
    pages: number | null
    count: number | null
    next: number | null
    prev: number | null
    currentCount: number
    goForward: Function
    goBack: Function
}

const maxPerPage = 20

export default function Example({ pages, count, currentCount, next, prev, goForward, goBack }: Props) {
    console.log({ pages, count, currentCount, next, prev })
    const currentPage = !prev ? 1 : (!next ? pages : prev + 1) || 1
    const currentStart = (currentPage * maxPerPage) - maxPerPage
    const currentEnd = (currentStart + currentCount)
    return (
        <nav
            className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
            aria-label="Pagination"
        >
            <div className="hidden sm:block">
                <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">{currentStart}</span> to <span className="font-medium">{currentEnd}</span> of{' '}
                    <span className="font-medium">{count}</span> results
                </p>
            </div>

            <div className="flex flex-1 justify-between sm:justify-end">
                <button
                    disabled={currentPage === 1}
                    onClick={() => goBack()}
                    className="relative disabled:bg-gray-200 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </button>
                <button
                    disabled={currentPage === pages}
                    onClick={() => goForward()}
                    className="relative disabled:bg-gray-200 ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </button>
            </div>
        </nav>
    )
}