import { Newspaper, ChevronRight } from 'lucide-react';
import { ARTICLES } from '@/data/kadaionline-mock';

export default function ArticlesSection() {
    return (
        <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
            <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                        <Newspaper className="h-4 w-4" />
                    </span>
                    <h2 className="text-base font-black tracking-tight text-neutral-900 sm:text-lg">
                        Info Menarik KadaiOnline
                    </h2>
                </div>

                <a
                    href="#footer"
                    className="inline-flex items-center gap-1 rounded-full border border-neutral-300 px-3 py-1 text-xs font-semibold text-neutral-700 transition-all hover:border-blue-600 hover:text-blue-700 active:scale-95"
                >
                    <span>Buka Semua Artikel</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                </a>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                {ARTICLES.map((article) => (
                    <article
                        key={article.id}
                        className="group flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-3.5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
                    >
                        <div>
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-100">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>

                            <div className="mt-3">
                                <span className="text-[10px] font-semibold text-blue-700">
                                    {article.date}
                                </span>
                                <h3 className="mt-1 line-clamp-2 text-xs leading-snug font-bold text-neutral-900 group-hover:text-blue-700">
                                    {article.title}
                                </h3>
                                <p className="mt-1 line-clamp-2 text-[11px] leading-relaxed text-neutral-500">
                                    {article.description}
                                </p>
                            </div>
                        </div>

                        <div className="mt-3 flex items-center gap-0.5 border-t border-neutral-100 pt-2.5 text-[11px] font-bold text-blue-700 group-hover:underline">
                            <span>Baca Artikel Ini</span>
                            <ChevronRight className="h-3 w-3" />
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
