import React from 'react';
import { useBooks } from '../../context/BookContext';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function BookList({ books }) {
  const { deleteBook, setEditingBook } = useBooks();
  const navigate = useNavigate();

  const handleEdit = (book) => {
    setEditingBook(book);
    navigate('/');
  };

  return (
    <ul className="book-list">
      {books.map(book => (
        <li key={book.id} className="book-item">
          <div>
            <strong>{book.title}</strong>
            <p>Penulis: {book.author}</p>
            <small>Status: {book.status}</small>
          </div>
          <div>
            <button onClick={() => handleEdit(book)}>✏️ Edit</button>
            <button onClick={() => deleteBook(book.id)}>🗑️ Hapus</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

BookList.propTypes = {
  books: PropTypes.array.isRequired
};

export default BookList;
