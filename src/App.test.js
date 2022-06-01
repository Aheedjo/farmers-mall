import { render, screen } from '@testing-library/react';
import App from './App';

test('renders agricultural', () => {
  render(<App />);
  const linkElement = screen.getByText(/agricultural/i);
  expect(linkElement).toBeInTheDocument();
});