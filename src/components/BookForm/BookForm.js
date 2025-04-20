import React, { useEffect, useState } from 'react';
import { useBooks } from '../../context/BookContext';

const initial = { title: '', author: '', status: 'milik' };

function BookForm() {
  const { addBook, updateBook, editingBook, setEditingBook } = useBooks();
  const [form, setForm] = useState(initial);
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingBook) {
      setForm(editingBook);
    }
  }, [editingBook]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi kosong
    if (!form.title.trim() || !form.author.trim()) {
      setError('Judul dan Penulis wajib diisi!');
      return;
    }

    if (editingBook) {
      updateBook(editingBook.id, form);
      setEditingBook(null);
    } else {
      addBook(form);
    }

    setForm(initial);
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        name="title"
        placeholder="Judul"
        value={form.title}
        onChange={handleChange}
      />
      <input
        name="author"
        placeholder="Penulis"
        value={form.author}
        onChange={handleChange}
      />
      <select name="status" value={form.status} onChange={handleChange}>
        <option value="milik">Dimiliki</option>
        <option value="baca">Sedang Dibaca</option>
        <option value="beli">Ingin Dibeli</option>
      </select>

      <button type="submit">
        {editingBook ? 'Simpan Perubahan' : 'Tambah Buku'}
      </button>

      {error && <p className="form-error">{error}</p>}
    </form>
  );
}

export default BookForm;
