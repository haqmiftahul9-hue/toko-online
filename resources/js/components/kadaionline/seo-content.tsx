import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function SeoContent() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="mx-auto max-w-7xl px-4 pt-10 text-xs leading-relaxed text-neutral-600 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-2xs">
                <h2 className="text-sm font-black tracking-tight text-neutral-900">
                    KadaiOnline, Belanja Retail dan Grosir #SudahPastiMurahnya
                </h2>
                <p className="mt-2 text-neutral-600">
                    <strong>KadaiOnline</strong> menyediakan peralatan rumah
                    tangga, aksesoris komputer dan gadget, perlengkapan outdoor,
                    serta perkakas teknis langsung dari distributor produsen.
                    Dengan prinsip <em>#SudahPastiMurahnya</em>, setiap kategori
                    produk dipilih berdasarkan fungsi praktis, keandalan
                    material, dan efisiensi biaya bagi konsumen ritel maupun
                    penjual dropshipper di seluruh Indonesia.
                </p>

                <div
                    className={`mt-4 space-y-3 ${isExpanded ? 'block' : 'hidden sm:block'}`}
                >
                    <h3 className="text-xs font-bold text-neutral-900">
                        Standar Kualitas dan Pengambilan Toko Offline
                    </h3>
                    <p>
                        Setiap produk yang masuk ke gudang KadaiOnline melalui
                        inspeksi fisik dan pemeriksaan fungsi kelistrikan
                        sebelum diserahkan kepada kurir atau ditempatkan di rak
                        gerai toko.
                    </p>
                    <p>
                        Pelanggan dapat memesan secara daring melalui website
                        dan mengambil pesanan langsung di 12 gerai cabang kami
                        (Jakarta Barat, Mangga Dua, Kelapa Gading, Gading
                        Serpong, Bekasi Grand Galaxy, Depok, Bandung Cihampelas,
                        Semarang, Surabaya Kertajaya, dan Medan Gatot Subroto)
                        tanpa biaya pengiriman tambahan.
                    </p>
                    <p>
                        Untuk pengusaha mandiri, sistem kemitraan dropship
                        KadaiOnline menyediakan integrasi resi otomatis, katalog
                        terpadu, dan harga grosir tanpa batasan minimal volume
                        pembelian.
                    </p>
                </div>

                <div className="mt-4 sm:hidden">
                    <button
                        type="button"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="inline-flex items-center gap-1 font-bold text-blue-700 active:scale-95"
                    >
                        <span>
                            {isExpanded
                                ? 'Tutup Rincian'
                                : 'Buka Rincian Informasi'}
                        </span>
                        {isExpanded ? (
                            <ChevronUp className="h-3.5 w-3.5" />
                        ) : (
                            <ChevronDown className="h-3.5 w-3.5" />
                        )}
                    </button>
                </div>
            </div>
        </section>
    );
}
