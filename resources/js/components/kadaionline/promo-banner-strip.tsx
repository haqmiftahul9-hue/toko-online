import { ArrowRight, Smartphone } from 'lucide-react';

export default function PromoBannerStrip() {
    return (
        <section
            id="promo-1111"
            className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8"
        >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-950 to-blue-900 p-6 text-white shadow-xs sm:p-8">
                <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    {/* Left: Headline & Voucher */}
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                        <div className="flex items-center gap-2">
                            <span className="rounded-xl bg-yellow-400 px-3.5 py-1.5 text-xl font-black tracking-tight text-neutral-950 shadow-xs sm:text-2xl">
                                11.11
                            </span>
                            <span className="font-mono text-sm font-bold text-yellow-300 sm:text-base">
                                #YTTA
                            </span>
                        </div>

                        <div className="hidden h-8 w-px bg-white/20 sm:block" />

                        <div>
                            <div className="flex flex-wrap items-baseline gap-2">
                                <h2 className="text-base font-black tracking-tight text-white uppercase sm:text-xl">
                                    BELANJA DI KADAIONLINE SEMURAH INI
                                </h2>
                                <span className="rounded-md bg-rose-600 px-2 py-0.5 text-xs font-bold text-white uppercase shadow-xs">
                                    EKSTRA VOUCHER 25RB
                                </span>
                            </div>
                            <p className="mt-1 text-xs text-blue-200">
                                Berlaku untuk transaksi melalui website &amp;
                                aplikasi KadaiOnline • Periode: 2 - 11 November
                                2026
                            </p>
                        </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex flex-wrap items-center gap-3">
                        <div className="hidden items-center gap-2 rounded-xl border border-blue-400/20 bg-blue-950/70 px-3.5 py-2.5 text-xs text-neutral-200 xl:flex">
                            <Smartphone className="h-4 w-4 text-yellow-300" />
                            <span>Download Aplikasi KadaiOnline</span>
                        </div>

                        <a
                            href="#rekomendasi-section"
                            className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-2.5 text-xs font-bold text-neutral-950 shadow-md transition-all hover:-translate-y-0.5 hover:bg-yellow-300 active:scale-[0.98] sm:text-sm"
                        >
                            <span>Klaim Voucher 25RB</span>
                            <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
