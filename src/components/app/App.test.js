import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const headerElement = screen.getByText(/Ligner/i);
  expect(headerElement).toBeInTheDocument();
});
