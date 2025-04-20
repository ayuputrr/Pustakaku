import { render, screen } from '@testing-library/react';
import Stats from './Stats';
import { BookProvider } from '../../context/BookContext';
import { BrowserRouter } from 'react-router-dom';

test('menampilkan judul statistik', () => {
  render(
    <BookProvider>
      <BrowserRouter>
        <Stats />
      </BrowserRouter>
    </BookProvider>
  );

  expect(screen.getByText(/Statistik Buku/i)).toBeInTheDocument();
});
