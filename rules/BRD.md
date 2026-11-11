Document 2: Business Requirement Document (BRD)

1. Ringkasan Eksekutif
   Proyek ini bertujuan untuk membangun ulang dan memodernisasi infrastruktur digital Kadaionline. Dengan mengusung nilai "Harga Termurah & Produk Unik", sistem baru ini harus mampu menangani lonjakan traffic selama kampanye besar, mengoptimalkan rute logistik dari cabang ke konsumen, dan meningkatkan retensi mitra reseller.

2. Objektif Bisnis (Business Objectives)

Peningkatan Konversi (CVR): Meningkatkan rasio konversi transaksi sebesar 25% melalui UI/UX checkout yang lebih singkat dan pencarian yang lebih akurat.

Optimalisasi Operasional Cabang: Mengurangi penumpukan pesanan pusat dengan mendistribusikan 40% pemenuhan pesanan (fulfillment) ke jaringan toko cabang terdekat.

Pertumbuhan B2B (Reseller): Meningkatkan pendaftaran dan transaksi reseller aktif dengan menyediakan dasbor pembelian bulk dan transparansi margin keuntungan.

3. Aturan Bisnis (Business Rules)

Kebijakan Harga: Harga promo Flash Sale bersifat mutlak dan mengesampingkan voucher reguler (tidak bisa stacking diskon, kecuali diatur spesifik oleh Super Admin).

Kebijakan Stok Cabang: Pengguna hanya dapat memilih opsi In-Store Pickup jika 100% barang di keranjang tersedia di cabang yang sama. Jika parsial, sistem wajib mengarahkan ke opsi pengiriman kurir.

SLA Pengiriman: Pesanan dengan opsi 1-Day Shipping yang dibayar sebelum pukul 15:00 waktu setempat harus diserahkan ke kurir pada hari yang sama.

4. Asumsi, Ketergantungan, dan Risiko

Asumsi: Pengguna mayoritas mengakses melalui perangkat mobile (Android/iOS web view).

Ketergantungan: Membutuhkan integrasi API yang stabil dari pihak ketiga untuk Payment Gateway (midtrans/xendit) dan Agregator Logistik.

Risiko: Terjadinya overselling saat Flash Sale karena latensi sinkronisasi database. (Mitigasi: Menggunakan Redis untuk lock stok sementara di cart).
