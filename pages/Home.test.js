import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from './Home';

describe('Home', () => {
    it('renders the login form', () => {
        render(<Home />);

        // Assert that the form elements are rendered
        expect(screen.getByLabelText('Username')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    });

    it('handles form submission', async () => {
        render(<Home />);

        // Simulate user input
        fireEvent.change(screen.getByLabelText('Username'), { target: { value: 'testuser' } });
        fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'testpassword' } });

        // Simulate form submission
        fireEvent.click(screen.getByRole('button', { name: 'Login' }));

        // Wait for API response
        await waitFor(() => {
            // Assert that the error message is displayed
            expect(screen.getByText('An error occurred. Please try again later.')).toBeInTheDocument();
        });
    });
});
