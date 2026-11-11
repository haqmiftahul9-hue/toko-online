import { Search } from 'lucide-react';
import { TRENDING_SEARCHES } from '@/data/kadaionline-mock';

export default function TrendingSearches() {
    return (
        <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-sky-100 text-sky-700">
                        <Search className="h-4 w-4" />
                    </span>
                    <h2 className="text-base font-black tracking-tight text-neutral-900 sm:text-lg">
                        Lagi Banyak Dicari
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
                {TRENDING_SEARCHES.map((item) => (
                    <a
                        key={item.id}
                        href="#rekomendasi-section"
                        className="group flex items-center gap-3 rounded-2xl border border-neutral-200/80 bg-white p-2.5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md active:scale-[0.98]"
                    >
                        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-neutral-100">
                            <img
                                src={item.image}
                                alt={item.keyword}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        <div className="min-w-0 flex-1">
                            <h3 className="truncate text-xs font-bold text-neutral-800 group-hover:text-blue-700">
                                {item.keyword}
                            </h3>
                            <p className="text-[11px] text-neutral-500">
                                {item.productCount} Produk
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
