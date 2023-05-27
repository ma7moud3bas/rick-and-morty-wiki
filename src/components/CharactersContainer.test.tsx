import { render, screen } from '@testing-library/react';
import CharactersContainer from './CharactersContainer';
import { Character } from '@/types/character';
import charactersMock from '@/lib/mocks/characters-mock';

describe('CharactersContainer', () => {
    const characters = charactersMock;
    it('renders a loading spinner when isLoading is true and data is empty', () => {
        render(<CharactersContainer data={[]} isLoading={true} />);
        const spinner = screen.getByTestId('loader');
        expect(spinner).toBeInTheDocument();
    });

    it('renders a "No results found!" message when isLoading is false and data is empty', () => {
        render(<CharactersContainer data={[]} isLoading={false} />);
        const message = screen.getByText('No results found!');
        expect(message).toBeInTheDocument();
    });

    it('renders a list of characters when data is not empty', () => {
        render(<CharactersContainer data={characters} isLoading={false} />);
        const characterNames = screen.getAllByRole('heading', { level: 1 });
        expect(characterNames).toHaveLength(59);
        expect(characterNames[0]).toHaveTextContent('Rick Sanchez');
        expect(characterNames[1]).toHaveTextContent('Morty Smith');
    });

    it('renders a green dot when character status is "Alive"', () => {
        render(<CharactersContainer data={characters} isLoading={false} />);
        const statusDot = screen.getAllByTestId('status-dot');
        expect(statusDot[0]).toHaveClass('bg-brand-green');
    });

    it('renders a red dot when character status is "Dead"', () => {
        render(<CharactersContainer data={[{ ...characters[0], status: "unknown" }]} isLoading={false} />);
        const statusDot = screen.getByTestId('status-dot');
        expect(statusDot).toHaveClass('bg-red-400');
    });
});