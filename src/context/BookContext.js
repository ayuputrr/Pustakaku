import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';

const BookContext = createContext();
export const useBooks = () => useContext(BookContext);

const bookReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BOOKS': return action.payload;
    case 'ADD_BOOK': return [...state, action.payload];
    case 'DELETE_BOOK': return state.filter(book => book.id !== action.payload);
    case 'UPDATE_BOOK': return state.map(book => book.id === action.payload.id ? action.payload : book);
    default: return state;
  }
};

export const BookProvider = ({ children }) => {
  const [books, dispatch] = useReducer(bookReducer, []);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [editingBook, setEditingBook] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('books');
    if (stored) dispatch({ type: 'SET_BOOKS', payload: JSON.parse(stored) });
  }, []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const addBook = (book) => dispatch({ type: 'ADD_BOOK', payload: { id: Date.now().toString(), ...book } });
  const deleteBook = (id) => dispatch({ type: 'DELETE_BOOK', payload: id });
  const updateBook = (id, updatedData) => dispatch({ type: 'UPDATE_BOOK', payload: { id, ...updatedData } });

  return (
    <BookContext.Provider value={{
      books, addBook, deleteBook, updateBook,
      search, setSearch, filter, setFilter,
      editingBook, setEditingBook
    }}>
      {children}
    </BookContext.Provider>
  );
};
