import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import { BookProvider } from '../../context/BookContext';

test('menampilkan input pencarian', () => {
  render(
    <BookProvider>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </BookProvider>
  );
  expect(screen.getByPlaceholderText(/Cari judul atau penulis/i)).toBeInTheDocument();
});
