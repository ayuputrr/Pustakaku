import React from 'react';
import { useBooks } from '../../context/BookContext';
import useBookStats from '../../hooks/useBookStats';
import { Link } from 'react-router-dom';
import './Stats.css'; // Pastikan file ini ada dan terhubung

function Stats() {
  const { books } = useBooks();
  const stats = useBookStats(books);

  return (
    <div className="stats-container">
      <div className="stats-content">
        <h1 className="stats-title">📊 Statistik Buku</h1>

        <ul className="stats-list">
          <li>📚 <strong>Total Buku:</strong> {stats.total}</li>
          <li>✅ <strong>Dimiliki:</strong> {stats.milik}</li>
          <li>📖 <strong>Dibaca:</strong> {stats.baca}</li>
          <li>🛒 <strong>Ingin Dibeli:</strong> {stats.beli}</li>
        </ul>

        <Link to="/" className="stats-back-button">← Kembali ke Beranda</Link>
      </div>
    </div>
  );
}

export default Stats;
