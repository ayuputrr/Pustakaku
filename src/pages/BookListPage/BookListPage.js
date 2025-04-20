import React, { useEffect } from 'react';
import { useBooks } from '../../context/BookContext';
import BookList from '../../components/BookList/BookList';
import { Link } from 'react-router-dom';

function BooksPage() {
  const { books, search, setSearch, filter } = useBooks();

  // Jika pencarian kosong, tampilkan semua
  const filteredBooks = books.filter(book =>
    (filter === 'all' || book.status === filter) &&
    (
      search.trim() === '' ||
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
    )
  );

  // Bisa reset search saat masuk ke halaman jika perlu
  useEffect(() => {
    if (search === null) setSearch('');
  }, [search, setSearch]);

  return (
    <div className="main-container">
      <div className="content-box">
        <h1 className="text-2xl font-bold text-center mb-4">📄 Daftar Buku</h1>

        {filteredBooks.length === 0 ? (
          <p className="text-center text-gray-500">Tidak ada buku yang cocok dengan pencarian.</p>
        ) : (
          <BookList books={filteredBooks} />
        )}

        <Link to="/" className="back-button mt-6 text-blue-600 hover:underline block text-center">
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

export default BooksPage;
