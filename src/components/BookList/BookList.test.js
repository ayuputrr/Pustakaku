import { render, screen } from '@testing-library/react';
import BookList from './BookList';
import { BrowserRouter } from 'react-router-dom';
import { BookProvider } from '../../context/BookContext';

test('menampilkan item buku jika ada', () => {
  const books = [{ id: '1', title: 'Judul Buku A', author: 'Penulis A', status: 'milik' }];
  render(
    <BookProvider>
      <BrowserRouter>
        <BookList books={books} />
      </BrowserRouter>
    </BookProvider>
  );
  expect(screen.getByText(/Judul Buku A/i)).toBeInTheDocument();
});
