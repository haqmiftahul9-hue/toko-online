import { Play, ChevronRight } from 'lucide-react';
import { VIRAL_PRODUCTS } from '@/data/kadaionline-mock';

export default function ViralProducts() {
    return (
        <section
            id="viral-products"
            className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8"
        >
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                        <Play className="h-4 w-4 fill-blue-700" />
                    </span>
                    <h2 className="text-base font-black tracking-tight text-neutral-900 sm:text-lg">
                        Produk Viral KadaiOnline
                    </h2>
                </div>

                <a
                    href="#rekomendasi-section"
                    className="inline-flex items-center gap-1 rounded-full border border-neutral-300 px-3 py-1 text-xs font-semibold text-neutral-700 transition-all hover:border-blue-600 hover:text-blue-700 active:scale-95"
                >
                    <span>Buka Produk Viral</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                </a>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {VIRAL_PRODUCTS.map((item) => (
                    <div
                        key={item.id}
                        className="group relative flex aspect-[9/13] cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 p-3 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98]"
                    >
                        {/* Background Photo */}
                        <img
                            src={item.image}
                            alt={item.title}
                            className="absolute inset-0 h-full w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-95"
                            loading="lazy"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-neutral-950/40" />

                        {/* Top View Count */}
                        <div className="relative z-10 flex items-center justify-between">
                            <span className="rounded-full bg-black/70 px-2.5 py-0.5 text-[10px] font-bold text-white">
                                {item.views} tayangan
                            </span>
                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white transition-all group-hover:scale-105 group-hover:bg-blue-600">
                                <Play className="h-3.5 w-3.5 fill-white" />
                            </div>
                        </div>

                        {/* Bottom Title Box */}
                        <div className="relative z-10">
                            <div className="rounded-xl border border-white/10 bg-neutral-900/90 p-2.5">
                                <h3 className="line-clamp-2 text-xs leading-tight font-bold text-white">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
