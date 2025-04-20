import { render, screen, fireEvent } from '@testing-library/react';
import BookForm from './BookForm';
import { BookProvider } from '../../context/BookContext';

test('menampilkan input judul dan penulis', () => {
  render(<BookProvider><BookForm /></BookProvider>);
  expect(screen.getByPlaceholderText(/Judul/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Penulis/i)).toBeInTheDocument();
});

test('menampilkan error jika input kosong dan tombol ditekan', () => {
  render(<BookProvider><BookForm /></BookProvider>);
  fireEvent.click(screen.getByText(/Tambah Buku/i));
  expect(screen.getByText(/Judul dan Penulis wajib diisi!/i)).toBeInTheDocument();
});
