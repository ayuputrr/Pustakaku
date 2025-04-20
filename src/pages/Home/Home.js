import React from 'react';
import BookForm from '../../components/BookForm/BookForm';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="main-container">
      <div className="content-box">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 flex items-center justify-center gap-2">
          📚 Tambah Buku
        </h1>

        <BookForm />

        {/* Tombol menuju daftar buku */}
        <div className="flex justify-center mt-6">
          <Link to="/books" className="back-button">
            📄 Lihat Semua Buku
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
