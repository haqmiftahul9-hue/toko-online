import { useState } from 'react';
import { X, Send, Headphones } from 'lucide-react';

export default function FloatingHelp() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end">
            {/* Quick Chat Popup */}
            {isOpen && (
                <div className="mb-3 w-80 animate-in rounded-2xl border border-neutral-200 bg-white p-4 shadow-2xl duration-150 fade-in slide-in-from-bottom-3">
                    <div className="flex items-center justify-between border-b border-neutral-100 pb-2.5">
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-700 text-xs font-bold text-white">
                                CS
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-neutral-900">
                                    Customer Support KadaiOnline
                                </h4>
                                <span className="text-[11px] font-medium text-neutral-500">
                                    Senin - Minggu 08.00 - 20.00 WIB
                                </span>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Tutup popup bantuan"
                            className="rounded-lg p-1 text-neutral-400 transition-colors hover:text-neutral-700 active:scale-95"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>

                    <p className="mt-3 text-xs leading-relaxed text-neutral-600">
                        Pertanyaan seputar spesifikasi barang, status pesanan,
                        atau ketersediaan stok gerai cabang? Tim CS siap
                        membantu Anda.
                    </p>

                    <div className="mt-4">
                        <a
                            href="https://wa.me/628972276050?text=Halo%20KadaiOnline%2C%20saya%20butuh%20informasi%20produk"
                            target="_blank"
                            rel="noreferrer"
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-2.5 text-xs font-bold text-white shadow-xs transition-all hover:bg-[#20ba5a] active:scale-[0.98]"
                        >
                            <Send className="h-3.5 w-3.5" />
                            <span>Buka Chat WhatsApp CS</span>
                        </a>
                    </div>
                </div>
            )}

            {/* Floating Trigger Button (Matches JakartaNotebook design: "Butuh bantuan? Hubungi kami") */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Butuh bantuan? Hubungi kami"
                className="flex items-center gap-2.5 rounded-full bg-[#1565C0] px-4 py-2.5 text-white shadow-lg shadow-blue-700/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700 active:scale-95"
            >
                <Headphones className="h-4 w-4 text-white" />
                <div className="flex flex-col pr-0.5 text-left leading-tight">
                    <span className="text-[10px] font-medium text-blue-100">
                        Butuh bantuan?
                    </span>
                    <span className="text-xs font-bold text-white">
                        Hubungi kami
                    </span>
                </div>
            </button>
        </div>
    );
}
