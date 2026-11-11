import { useState } from 'react';
import {
    Phone,
    MessageSquare,
    Clock,
    Send,
    Check,
} from 'lucide-react';

export default function KadaiFooter() {
    const [newsletterEmail, setNewsletterEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [selectedStoreRegion, setSelectedStoreRegion] = useState('Jabodetabek');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (newsletterEmail.trim()) {
            setIsSubscribed(true);
            setTimeout(() => {
                setNewsletterEmail('');
                setIsSubscribed(false);
            }, 3000);
        }
    };

    return (
        <footer id="footer" className="mt-16 border-t border-neutral-200 bg-neutral-50 text-neutral-600">
            {/* Top Download Apps Row */}
            <div className="border-b border-neutral-200/80 bg-white py-6">
                <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
                    <div>
                        <h4 className="text-sm sm:text-base font-black text-neutral-900 tracking-tight">
                            Download Aplikasi KadaiOnline
                        </h4>
                        <p className="text-xs text-neutral-500">
                            Cek ketersediaan stok gerai offline dan klaim voucher belanja mingguan di smartphone Anda.
                        </p>
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Google Play */}
                        <a
                            href="#"
                            className="flex items-center gap-2.5 rounded-xl bg-neutral-900 px-4 py-2.5 text-white shadow-xs transition-transform hover:scale-105 active:scale-95"
                        >
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.609 1.814L13.793 12 3.61 22.186a2.22 2.22 0 0 1-.61-.926V2.74c0-.34.22-.66.61-.926zm11.3 11.3l2.67-2.67-11.83-6.83 9.16 9.5zm2.67-4.83l2.67 1.54a1.8 1.8 0 0 1 0 3.12l-2.67 1.54-2.14-2.14 2.14-2.06zm-4.81 5.35l-9.16 9.5 11.83-6.83-2.67-2.67z" />
                            </svg>
                            <div className="text-left leading-tight">
                                <div className="text-[9px] uppercase tracking-wider text-neutral-400">GET IT ON</div>
                                <div className="text-xs font-bold">Google Play</div>
                            </div>
                        </a>

                        {/* App Store */}
                        <a
                            href="#"
                            className="flex items-center gap-2.5 rounded-xl bg-neutral-900 px-4 py-2.5 text-white shadow-xs transition-transform hover:scale-105 active:scale-95"
                        >
                            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.57.65-.89 1.7-.84 2.74 1.01.08 2.03-.5 2.55-1.24z" />
                            </svg>
                            <div className="text-left leading-tight">
                                <div className="text-[9px] uppercase tracking-wider text-neutral-400">Download on the</div>
                                <div className="text-xs font-bold">App Store</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Footer Columns */}
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">
                    {/* Col 1 */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900">
                            Layanan Pelanggan
                        </h4>
                        <ul className="mt-4 space-y-2 text-xs">
                            <li><a href="#" className="hover:text-blue-700 transition-colors">Bantuan Transaksi</a></li>
                            <li><a href="#" className="hover:text-blue-700 transition-colors">Klaim Garansi Produk</a></li>
                            <li><a href="#" className="hover:text-blue-700 transition-colors">Biaya Pengiriman</a></li>
                            <li><a href="#" className="hover:text-blue-700 transition-colors">Indeks Produk</a></li>
                            <li><a href="#" className="hover:text-blue-700 transition-colors">Konfirmasi Pembayaran</a></li>
                        </ul>
                    </div>

                    {/* Col 2 */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900">
                            KadaiOnline
                        </h4>
                        <ul className="mt-4 space-y-2 text-xs">
                            <li><a href="#" className="hover:text-blue-700 transition-colors">Tentang Kami</a></li>
                            <li><a href="#" className="hover:text-blue-700 transition-colors">Kontak Kami</a></li>
                            <li><a href="#" className="hover:text-blue-700 transition-colors">Karir</a></li>
                            <li><a href="#" className="hover:text-blue-700 transition-colors">Blog &amp; Panduan</a></li>
                            <li><a href="#" className="hover:text-blue-700 transition-colors">Program Dropship</a></li>
                        </ul>
                    </div>

                    {/* Col 3 */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900">
                            Ikuti Kami
                        </h4>
                        <ul className="mt-4 space-y-2 text-xs">
                            <li><a href="#" className="hover:text-blue-700 font-medium transition-colors">TikTok @kadaionline</a></li>
                            <li><a href="#" className="hover:text-blue-700 font-medium transition-colors">Instagram @kadaionline</a></li>
                            <li><a href="#" className="hover:text-blue-700 font-medium transition-colors">Facebook KadaiOnline</a></li>
                            <li><a href="#" className="hover:text-blue-700 font-medium transition-colors">X (Twitter) @kadaionline</a></li>
                        </ul>
                    </div>

                    {/* Col 4 */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900">
                            Buletin Promo
                        </h4>
                        <p className="mt-4 text-xs text-neutral-500 leading-relaxed">
                            Katalog promo mingguan dan voucher diskon langsung ke email Anda.
                        </p>
                        <form onSubmit={handleSubscribe} className="mt-3 flex flex-col gap-2">
                            <input
                                type="email"
                                required
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                placeholder="Alamat email Anda"
                                className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-900 placeholder:text-neutral-400 focus:border-blue-600 focus:outline-hidden"
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-700 px-3 py-2 text-xs font-bold text-white transition-all hover:bg-blue-800 active:scale-[0.98]"
                            >
                                {isSubscribed ? (
                                    <>
                                        <Check className="h-3.5 w-3.5" />
                                        <span>Terdaftar</span>
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-3 w-3" />
                                        <span>Daftar Buletin Mingguan</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>

                    {/* Col 5: Contact Center */}
                    <div className="lg:col-span-4">
                        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-xs">
                            <div className="bg-[#0f172a] px-4 py-2.5 text-white">
                                <h4 className="text-xs font-black uppercase tracking-wider">
                                    Contact Center
                                </h4>
                            </div>

                            <div className="p-4 space-y-4 text-xs">
                                <div>
                                    <div className="font-bold text-neutral-900 border-b border-neutral-100 pb-1">
                                        Pembelian Online
                                    </div>
                                    <div className="mt-2 space-y-1.5 text-neutral-600">
                                        <div className="flex items-start gap-1.5">
                                            <Clock className="h-3.5 w-3.5 text-neutral-400 shrink-0 mt-0.5" />
                                            <div>
                                                <div>Senin - Jumat: 09:00 - 20:00 WIB</div>
                                                <div>Sabtu - Minggu: 08:00 - 15:00 WIB</div>
                                                <div className="text-[10px] text-neutral-400">Hari Libur Nasional: Tutup</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1.5 pt-1">
                                            <Phone className="h-3.5 w-3.5 text-neutral-400 shrink-0" />
                                            <span>Telepon: (021) 39 700 200</span>
                                        </div>

                                        <div className="flex items-center gap-1.5">
                                            <MessageSquare className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                                            <span>
                                                WhatsApp CS:{' '}
                                                <a
                                                    href="https://wa.me/628972276050"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="font-bold text-blue-700 hover:underline"
                                                >
                                                    0897 227 6050
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between font-bold text-neutral-900 border-b border-neutral-100 pb-1">
                                        <span>Lokasi Toko Offline</span>
                                        <select
                                            value={selectedStoreRegion}
                                            onChange={(e) => setSelectedStoreRegion(e.target.value)}
                                            className="text-[11px] font-normal border border-neutral-300 rounded-md px-2 py-0.5 bg-neutral-50 text-neutral-700"
                                        >
                                            <option value="Jabodetabek">Jabodetabek</option>
                                            <option value="Bandung">Bandung</option>
                                            <option value="Semarang">Semarang</option>
                                            <option value="Surabaya">Surabaya</option>
                                            <option value="Medan">Medan</option>
                                        </select>
                                    </div>

                                    <div className="mt-2 space-y-1.5 text-neutral-600">
                                        <div className="flex items-start gap-1.5">
                                            <Clock className="h-3.5 w-3.5 text-neutral-400 shrink-0 mt-0.5" />
                                            <div>
                                                <div>Senin - Minggu: 08:00 - 20:00 WIB</div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1.5">
                                            <MessageSquare className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                                            <span>
                                                WhatsApp Gerai:{' '}
                                                <a
                                                    href="https://wa.me/628972276050"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="font-bold text-blue-700 hover:underline"
                                                >
                                                    0897 227 6050
                                                </a>
                                            </span>
                                        </div>

                                        <div className="pt-1 text-[11px]">
                                            <a href="#rekomendasi-section" className="text-blue-700 hover:underline font-bold">
                                                Lihat 12 Cabang Toko &rarr;
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Legal Bar */}
            <div className="border-t border-neutral-200 bg-neutral-100/90 py-4 text-xs text-neutral-500">
                <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
                    <div>
                        <span>Copyright 2026 KadaiOnline. Hak cipta dilindungi undang-undang.</span>
                        <span className="mx-2">•</span>
                        <a href="#" className="hover:text-blue-700">Syarat &amp; Ketentuan</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span>Jaringan Ritel Resmi:</span>
                        <span className="font-bold text-neutral-800">KadaiOnline Retail Network</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
