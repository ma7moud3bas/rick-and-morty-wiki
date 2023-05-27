import { render, screen, fireEvent } from '@testing-library/react';
import Pagination from './Pagination';

describe.only('Pagination', () => {
    const props = {
        pages: 5,
        count: 100,
        currentCount: 20,
        next: 2,
        prev: null,
        goForward: jest.fn(),
        goBack: jest.fn(),
    };

    it('renders the correct page information', () => {
        render(<Pagination  {...props} />);
        expect(screen.getByTestId('pagination').textContent).toBe('Showing 1 to 20 of 100 results')
    });

    it('disables the "Previous" button on the first page', () => {
        render(<Pagination {...props} prev={null} />);
        const prevButton = screen.getByRole('button', { name: /previous/i });
        expect(prevButton).toBeDisabled();
    });

    it('disables the "Next" button on the last page', () => {
        render(<Pagination {...props} next={null} />);
        const nextButton = screen.getByRole('button', { name: /next/i });
        expect(nextButton).toBeDisabled();
    });

    it('calls the goBack function when the "Previous" button is clicked', () => {
        render(<Pagination {...props} next={3} prev={1} />);
        const prevButton = screen.getByRole('button', { name: /previous/i });
        fireEvent.click(prevButton);
        expect(props.goBack).toHaveBeenCalled();
    });

    it('calls the goForward function when the "Next" button is clicked', () => {
        render(<Pagination {...props} />);
        const nextButton = screen.getByRole('button', { name: /next/i });
        fireEvent.click(nextButton);
        expect(props.goForward).toHaveBeenCalled();
    });
});