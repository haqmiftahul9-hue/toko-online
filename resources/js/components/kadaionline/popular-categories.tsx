import { LayoutGrid } from 'lucide-react';
import { POPULAR_CATEGORIES } from '@/data/kadaionline-mock';

export default function PopularCategories() {
    return (
        <section className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                        <LayoutGrid className="h-4 w-4" />
                    </span>
                    <h2 className="text-base sm:text-lg font-black text-neutral-900 tracking-tight">
                        Kategori Populer
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-9">
                {POPULAR_CATEGORIES.map((cat) => (
                    <a
                        key={cat.id}
                        href="#rekomendasi-section"
                        className="group flex flex-col items-center rounded-2xl border border-neutral-200/80 bg-white p-3 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md active:scale-[0.98]"
                    >
                        <div className="relative aspect-square w-16 sm:w-20 overflow-hidden rounded-xl bg-neutral-50 p-1">
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                            />
                        </div>
                        <span className="mt-2 text-center text-xs font-semibold text-neutral-800 group-hover:text-blue-700 leading-snug">
                            {cat.title}
                        </span>
                    </a>
                ))}
            </div>
        </section>
    );
}
