import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BookProvider } from './context/BookContext';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Stats from './pages/Stats/Stats';
import BookListPage from './pages/BookListPage/BookListPage';
import './index.css';

function App() {
  return (
    <BookProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookListPage />} />
          <Route path="/stats" element={<Stats />} />
        </Routes>
      </Router>
    </BookProvider>
  );
}

export default App;
