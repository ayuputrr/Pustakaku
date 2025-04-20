import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useBooks } from '../../context/BookContext';

function Navbar() {
  const { search, setSearch, filter, setFilter } = useBooks();
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate('/books');
    }
  };

  return (
    <nav className="navbar" style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      padding: '1rem 2rem',
      backgroundColor: '#1f2937',
      color: 'white'
    }}>
      {/* Kiri: Logo */}
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>
        📚 Perpustakaan
      </div>

      {/* Tengah: Search Bar */}
      <div style={{ flexGrow: 1, maxWidth: '500px', margin: '0 1rem' }}>
        <input
          type="text"
          placeholder="🔍 Cari judul atau penulis..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          className="navbar-search"
          style={{
            width: '100%',
            padding: '0.5rem 0.75rem',
            borderRadius: '4px',
            border: 'none'
          }}
        />
      </div>

      {/* Kanan: Menu Navigasi + Filter */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <NavLink to="/" className="navbar-link" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Beranda</NavLink>
        <NavLink to="/stats" className="navbar-link" style={{ color: 'white', textDecoration: 'none', fontWeight: '500' }}>Statistik</NavLink>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="navbar-filter"
          style={{
            padding: '0.4rem',
            borderRadius: '4px',
            border: 'none',
            fontSize: '0.95rem'
          }}
        >
          <option value="all">📚 Semua</option>
          <option value="milik">✅ Dimiliki</option>
          <option value="baca">📖 Dibaca</option>
          <option value="beli">🛒 Ingin Dibeli</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
