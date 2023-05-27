import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';
import Page from './page';
import { act } from 'react-dom/test-utils';
import charactersMock from '@/lib/mocks/characters-mock';

const getCharacters = jest.fn()

    .mockResolvedValueOnce({
        data: {
            characters: {
                info: {
                    pages: 3,
                    count: 59,
                    next: null,
                    prev: 2,
                },
                results: charactersMock.slice(40, 59)
            },
        },
    })
    .mockResolvedValueOnce({
        data: {
            characters: {
                info: {
                    pages: 3,
                    count: 59,
                    next: null,
                    prev: 2,
                },
                results: charactersMock.slice(40, 59)
            },
        },
    })
    .mockResolvedValueOnce({
        data: {
            characters: {
                info: {
                    pages: 3,
                    count: 59,
                    next: 2,
                    prev: null,
                },
                results: charactersMock.slice(0, 20)
            },
        },
    })
    .mockResolvedValueOnce({
        data: {
            characters: {
                info: {
                    pages: 3,
                    count: 59,
                    next: 3,
                    prev: 1,
                },
                results: charactersMock.slice(20, 40),
            },
        },
    })
    .mockResolvedValue({
        data: {
            characters: {
                info: {
                    pages: 3,
                    count: 59,
                    next: 2,
                    prev: null,
                },
                results: charactersMock.slice(0, 20),
            },
        },
    })
jest.mock('@/lib/api', () => {
    return {
        getCharacters: () => getCharacters(),
    }
});

describe('Page component', () => {
    test('does not update the page number when the "next" button is clicked on the last page', async () => {
        render(<Page />);
        const nextButton = screen.getByRole('button', { name: /next/i });
        await waitFor(() => expect(screen.getByTestId('pagination').textContent).toBe('Showing 41 to 59 of 59 results'), { timeout: 1000 })
        expect(nextButton).toBeDisabled();
        nextButton.click();
        await waitFor(() => expect(screen.getByTestId('pagination').textContent).toBe('Showing 41 to 59 of 59 results'), { timeout: 1000 })
    });

    test('does not update the page number when the "previous" button is clicked on the first page', async () => {
        render(<Page />);
        const prevButton = screen.getByRole('button', { name: /previous/i });
        userEvent.click(prevButton);
        await waitFor(() => expect(screen.getByTestId('pagination').textContent).toBe('Showing 1 to 20 of 59 results'), { timeout: 1000 })
    });

    test('updates the page number when the "next" button is clicked', async () => {
        render(<Page />);
        const nextButton = screen.getByRole('button', { name: /next/i });
        userEvent.click(nextButton);
        await waitFor(() => expect(screen.getByTestId('pagination').textContent).toBe('Showing 21 to 40 of 59 results'), { timeout: 1000 });
    });

    test('updates the page number when the "previous" button is clicked', async () => {
        render(<Page />);
        const nextButton = screen.getByRole('button', { name: /next/i });
        userEvent.click(nextButton);
        const prevButton = screen.getByRole('button', { name: /previous/i });
        userEvent.click(prevButton);
        await waitFor(() => expect(screen.getByTestId('pagination').textContent).toBe('Showing 1 to 20 of 59 results'), { timeout: 1000 });
    });


    test('renders the search bar', () => {
        render(<Page />);
        const searchBar = screen.getByTestId('searchbox');
        expect(searchBar).toBeInTheDocument();
    });

    test('renders the characters container', () => {
        render(<Page />);
        const charactersContainer = screen.getByRole('list');
        expect(charactersContainer).toBeInTheDocument();
    });

    test('renders the pagination component', () => {
        render(<Page />);
        const pagination = screen.getByRole('navigation');
        expect(pagination).toBeInTheDocument();
    });

    test('displays the characters returned by the API', async () => {
        render(<Page />);
        const searchBox = screen.getByTestId('searchbox');
        act(() => {
            userEvent.type(searchBox, 'rick');
        })
        await waitFor(() => expect(screen.getByText('Rick Sanchez')).toBeInTheDocument());
    });

    test('updates the search results when the search key is changed', async () => {
        render(<Page />);
        const searchBox = screen.getByTestId('searchbox');
        userEvent.type(searchBox, 'rick');
        await waitFor(() => expect(screen.getByText('Rick Sanchez')).toBeInTheDocument());
        userEvent.clear(searchBox);
        userEvent.type(searchBox, 'morty');
        await waitFor(() => expect(screen.getByText('Morty Smith')).toBeInTheDocument());
    });

    test('does not update the search results when the search key is less than 3 characters', async () => {
        render(<Page />);
        const searchBox = screen.getByTestId('searchbox');
        userEvent.type(searchBox, 'ri');
        await waitFor(() => expect(screen.queryByText('Rick Sanchez')).not.toBeInTheDocument(), { timeout: 1000 });
    });
});