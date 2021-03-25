import {render, screen} from '@testing-library/react';
import App from './App';
import {MemoryRouter} from "react-router-dom";

test('renders app title', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const headerElement = screen.getByText(/Ligner/i);
  expect(headerElement).toBeInTheDocument();
});
