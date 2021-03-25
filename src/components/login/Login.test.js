import {render, screen} from '@testing-library/react';
import Login from './Login';
import {MemoryRouter} from 'react-router-dom'

test('renders username input', () => {
  render(<MemoryRouter><Login /></MemoryRouter>);
  const usernameInputElement = screen.getByPlaceholderText(/Username/i);
  expect(usernameInputElement).toBeInTheDocument();
});

test('renders login button', () => {
  render(<MemoryRouter><Login /></MemoryRouter>);
  const loginButtonElement = screen.getByText(/Login/i);
  expect(loginButtonElement).toBeInTheDocument();
});
