# 📚 Pustakaku — Aplikasi Manajemen Buku Pribadi

**Pustakaku** adalah aplikasi web sederhana berbasis **React** yang dirancang untuk mencatat, menyaring, dan mengelola koleksi buku secara personal. Aplikasi ini cocok untuk pengguna yang ingin memantau daftar bacaan mereka, baik fiksi maupun non-fiksi.

---

## 🚀 Fitur Unggulan

- 📘 Menambahkan dan mengedit buku
- 🔍 Fitur filter berdasarkan kategori
- 📊 Statistik buku yang sudah dan belum dibaca
- 🧠 State management dengan Context API
- 💾 Penyimpanan data lokal menggunakan \`localStorage\`
- ✅ Unit testing untuk komponen utama

---

## 🏗️ Struktur Proyek

```bash
Pustakaku-main/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── BookForm/
│   │   ├── BookItem/
│   │   ├── BookList/
│   │   ├── BookFilter/
│   │   └── Navbar/
│   ├── context/           # Context API untuk state global
│   ├── hooks/             # Custom hooks: localStorage, book stats
│   ├── pages/             # Halaman utama aplikasi
│   ├── App.js             # Root component
│   └── index.js           # Entry point
├── package.json
└── README.md
```

---

## 🧑‍💻 Cara Menjalankan Aplikasi

### 1. Clone repository
```bash
git clone https://github.com/username/Pustakaku.git
cd Pustakaku
```

### 2. Install dependencies
```bash
npm install
```

### 3. Jalankan aplikasi
```bash
npm start
```

Aplikasi akan berjalan di
```bash 
http://localhost:3000```

---

## 🧪 Testing

Untuk menjalankan unit test:
```bash
npm test
```

---

## 🛠️ Teknologi yang Digunakan

- React JS
- React Context API
- Custom Hooks
- LocalStorage
- Jest + React Testing Library

---

## 📌 Catatan Pengembangan

- Semua data buku disimpan di browser melalui ```localStorage```
- Aplikasi ini **tidak terhubung ke backend**
- Desain dan arsitektur bersifat modular dan dapat dikembangkan lebih lanjut

---

## 📚 Kontribusi

Pull request dan saran fitur sangat terbuka! Jangan ragu untuk fork proyek ini dan kembangkan versimu sendiri.

---
