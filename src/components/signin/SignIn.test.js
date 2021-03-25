import { render, screen } from '@testing-library/react';
import App from './SignIn';

test('renders sign-in title', () => {
  render(<App />);
  const headerElement = screen.getByText(/Sign in/i);
  expect(headerElement).toBeInTheDocument();
});
