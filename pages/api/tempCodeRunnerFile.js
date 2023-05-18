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
