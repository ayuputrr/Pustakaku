import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { db } from '../firebase';
import { ref, onValue, set, remove, push, update } from 'firebase/database';

// Context & Hook
const BookContext = createContext();
export const useBooks = () => useContext(BookContext);

// Reducer
const bookReducer = (state, action) => {
  switch (action.type) {
    case 'SET_BOOKS':
      return action.payload;
    case 'TRIGGER_EDIT':
      return state.map(book =>
        book.id === action.payload.id
          ? { ...book, editing: true }
          : { ...book, editing: false }
      );
    default:
      return state;
  }
};

// Provider
export const BookProvider = ({ children }) => {
  const [books, dispatch] = useReducer(bookReducer, []);

  useEffect(() => {
    const booksRef = ref(db, 'books');
    const unsubscribe = onValue(booksRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loaded = Object.entries(data).map(([id, book]) => ({ id, ...book }));
        dispatch({ type: 'SET_BOOKS', payload: loaded });
      } else {
        dispatch({ type: 'SET_BOOKS', payload: [] });
      }
    });

    return () => unsubscribe();
  }, []);

  const addBook = (book) => {
    const newBookRef = push(ref(db, 'books'));
    set(newBookRef, book);
  };

  const deleteBook = (id) => {
    remove(ref(db, `books/${id}`));
  };

  const updateBook = (id, updatedData) => {
    update(ref(db, `books/${id}`), updatedData);
  };

  return (
    <BookContext.Provider value={{ books, addBook, deleteBook, updateBook, dispatch }}>
      {children}
    </BookContext.Provider>
  );
};
