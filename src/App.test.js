import { render, screen } from '@testing-library/react';
import App from './App';
import { BookProvider } from './context/BookContext';

test('menampilkan judul navbar', () => {
  render(
    <BookProvider>
      <App />
    </BookProvider>
  );

  expect(screen.getByText(/Perpustakaan/i)).toBeInTheDocument();
});
