import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders username input', () => {
  render(<Login />);
  const usernameInputElement = screen.getByPlaceholderText(/Username/i);
  expect(usernameInputElement).toBeInTheDocument();
});

test('renders login button', () => {
  render(<Login />);
  const loginButtonElement = screen.getByText(/Login/i);
  expect(loginButtonElement).toBeInTheDocument();
});
