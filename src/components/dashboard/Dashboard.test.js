import {render, screen} from '@testing-library/react';
import Dashboard from './Dashboard';

test('renders dashboard title', () => {
  render(<Dashboard />);
  const headerElement = screen.getByText(/Your dashboard/i);
  expect(headerElement).toBeInTheDocument();
});
