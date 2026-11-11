Document 1: Product Requirement Document (PRD)

1. Informasi Proyek

Nama Proyek: Platform E-Commerce Omnichannel Kadaionline

Visi Produk: Menjadi pusat belanja online terpadu dan terpercaya untuk barang unik, gadget, elektronik, dan perlengkapan harian dengan harga termurah, yang mengintegrasikan pengalaman belanja online dengan ketersediaan stok fisik di berbagai cabang.

Target Pengguna (User Personas):

End-Consumer (B2C): Pelanggan retail yang mencari barang unik, perlengkapan harian, dan promo flash sale.

Reseller (B2B): Pelanggan yang membeli dalam jumlah banyak untuk dijual kembali demi margin keuntungan.

Admin Cabang: Staf di toko fisik yang mengelola pesanan pickup dan memonitor stok lokal.

Super Admin: Manajemen pusat yang mengatur pricing, kampanye promo (seperti 11.11), dan artikel blog.

2. Fitur Utama & Kebutuhan Fungsional (Functional Requirements)

2.1. Manajemen Katalog & Pencarian Pintar

Search Engine: Pencarian dinamis (autocomplete) berdasarkan nama produk, SKU, atau kategori.

Kategorisasi Mendalam: Mendukung multi-level category (misal: Olahraga & Outdoor -> Bersepeda -> Aksesoris Sepeda).

Labeling & Badges: Sistem tagging otomatis untuk produk "Just Arrived", "What's New", "Flash Sale", dan "Viral/Video Shopping".

2.2. Sistem Inventaris Omnichannel (Multi-Gudang/Cabang)

Visibilitas Stok Real-Time: Menampilkan ketersediaan barang di berbagai lokasi fisik secara langsung di halaman produk (Contoh: "Tersedia di 11 lokasi").

Geo-Routing: Merekomendasikan cabang terdekat untuk metode In-Store Pickup (Ambil di Toko) berdasarkan lokasi pengguna.

2.3. Modul Promosi & Flash Sale

Flash Sale Engine: Komponen countdown timer dengan alokasi stok khusus yang terkunci (locked inventory) saat pengguna checkout.

Dynamic Pricing & Vouchers: Mendukung perhitungan diskon persentase (coret harga) dan kode voucher terpusat (misal: "Ekstra Voucher 2JT").

2.4. Checkout & Logistik Pengiriman

Opsi Pengiriman Fleksibel: Mendukung 1-Day Shipping, Cash on Delivery (COD), dan Ambil di Toko (In-Store Pickup).

Keranjang Multi-Cabang: Memecah keranjang belanja secara otomatis jika barang berasal dari cabang yang berbeda.

2.5. Customer Engagement & Konten

WhatsApp CS Integration: Tombol floating untuk merutekan keluhan atau pertanyaan pengguna langsung ke WhatsApp Customer Support secara dinamis.

Video Shopping: Galeri video pendek (reels-style) untuk mendemonstrasikan produk viral.

Portal Artikel/Blog: Modul CMS terintegrasi untuk artikel SEO, review produk, dan panduan (misal: "Tips Merawat Wiper Mobil").

3. Kriteria Penerimaan (Acceptance Criteria)

Halaman utama harus memuat gambar banner dan flash sale dalam waktu kurang dari 2.5 detik pada jaringan 4G.

Stok cabang harus tersinkronisasi dalam waktu maksimal 1 menit setelah transaksi offline atau online terjadi.

Tampilan harus 100% responsif (Mobile-First Design) untuk memfasilitasi pengguna web seluler.
