Document 3: System Design Specification (SDS)

1. Arsitektur Sistem
   Sistem dibangun menggunakan pendekatan Modular Monolith yang dimodernisasi, berfokus pada kecepatan, skalabilitas, dan efisiensi biaya.

Frontend (Client): React.js dengan Vite (untuk build yang sangat cepat), di-styling menggunakan Tailwind CSS untuk mencapai desain responsif yang konsisten. Di-hosting melalui Vercel untuk Global Edge CDN.

Backend & Database: Supabase (PostgreSQL) sebagai basis data utama, memanfaatkan Row Level Security (RLS) untuk memisahkan hak akses antara Pelanggan Umum, Reseller, dan Admin.

Caching Layer: Redis (untuk menangani hitung mundur Flash Sale dan pencarian katalog berkecepatan tinggi tanpa membebani basis data utama).

Media Storage: Supabase Storage dengan kompresi gambar otomatis (WebP) untuk banner, aset produk, dan thumbnail video.

2. Desain Skema Database (PostgreSQL / ERD)

SQL
-- TABEL: users (Ekstensi dari Supabase Auth)
id (UUID) PK
role (Enum: 'guest', 'customer', 'reseller', 'admin')
full_name (Varchar)
phone_number (Varchar)
created_at (Timestamp)

-- TABEL: branches (Data Lokasi Fisik Toko)
id (UUID) PK
branch_name (Varchar)
address (Text)
latitude (Decimal)
longitude (Decimal)

-- TABEL: products (Katalog Barang)
id (UUID) PK
sku (Varchar) UNIQUE
title (Varchar)
slug (Varchar) UNIQUE
base_price (Decimal)
discount_percentage (Int)
category_id (UUID) FK
is_viral_video (Boolean)
created_at (Timestamp)

-- TABEL: branch_inventory (Stok per Cabang)
id (UUID) PK
product_id (UUID) FK -> products.id
branch_id (UUID) FK -> branches.id
stock_qty (Int)
last_synced (Timestamp)

-- TABEL: flash_sales (Manajemen Promo Waktu Terbatas)
id (UUID) PK
product_id (UUID) FK -> products.id
promo_price (Decimal)
start_time (Timestamp)
end_time (Timestamp)
allocated_stock (Int) 3. Spesifikasi API Endpoint Utama

Pencarian Produk Cepat (Katalog)

GET /rest/v1/products?select=id,title,base_price,discount_percentage&title=ilike._{query}_

Fungsi: Mengambil data produk berdasarkan keyword. Menggunakan indeks Full-Text Search di PostgreSQL untuk latensi di bawah 100ms.

Pengecekan Stok Cabang (Omnichannel)

GET /rest/v1/branch_inventory?product_id=eq.{id}&stock_qty=gt.0

Fungsi: Mengembalikan daftar cabang (ID dan Nama) yang memiliki stok > 0 untuk produk tertentu. Ditampilkan di UI sebagai "Tersedia di {N} lokasi".

Katalog Flash Sale Aktif

GET /rest/v1/flash_sales?end_time=gte.now()&start_time=lte.now()

Fungsi: Mengambil produk yang sedang dalam masa Flash Sale. Frontend (React) akan menggunakan end_time untuk merender komponen countdown timer secara lokal.

4. Keamanan & Performa

Authentication: Menggunakan JWT token (via Supabase Auth).

Offline Support: Mengimplementasikan Service Worker (PWA) dan IndexedDB agar katalog yang sudah diakses atau cart tetap tersimpan secara lokal (offline caching), memastikan pengguna dengan sinyal tidak stabil tetap bisa melakukan browsing dasar.

Security: Proteksi CORS ketat dari domain Kadaionline, sanitasi input untuk mencegah SQL Injection, dan pembatasan rate-limit pada endpoint checkout untuk mencegah serangan bot scalper saat promo 11.11.
