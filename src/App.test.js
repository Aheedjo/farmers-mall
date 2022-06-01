import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Fagge', () => {
  render(<App />);
  const linkElement = screen.getByText(/Fagge/i);
  expect(linkElement).toBeInTheDocument();
});