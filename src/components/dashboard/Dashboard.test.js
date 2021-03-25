import { render, screen } from '@testing-library/react';
import App from './Dashboard';

test('renders dashboard title', () => {
  render(<App />);
  const headerElement = screen.getByText(/Your dashboard/i);
  expect(headerElement).toBeInTheDocument();
});
