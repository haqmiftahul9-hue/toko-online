import {
    PackagePlus,
    Clock,
    Flame,
    Coffee,
    Lightbulb,
    Utensils,
    CheckCircle2,
    Compass,
    Boxes,
} from 'lucide-react';

const CATEGORY_ITEMS = [
    { id: '1', label: 'Just Arrived', icon: PackagePlus, color: 'text-blue-600 bg-blue-50' },
    { id: '2', label: 'Coming Soon', icon: Clock, color: 'text-amber-600 bg-amber-50' },
    { id: '3', label: 'Whats New', icon: Flame, color: 'text-orange-600 bg-orange-50' },
    { id: '4', label: 'Waktunya Me Time', icon: Coffee, color: 'text-rose-600 bg-rose-50' },
    { id: '5', label: 'Produk Unik', icon: Lightbulb, color: 'text-indigo-600 bg-indigo-50' },
    { id: '6', label: 'Masak Ga Ribet', icon: Utensils, color: 'text-emerald-600 bg-emerald-50' },
    { id: '7', label: 'Wajib Punya', icon: CheckCircle2, color: 'text-teal-600 bg-teal-50' },
    { id: '8', label: 'Siap Jalan-Jalan', icon: Compass, color: 'text-sky-600 bg-sky-50' },
    { id: '9', label: 'Bikin Serba Rapi', icon: Boxes, color: 'text-purple-600 bg-purple-50' },
];

export default function QuickCategories() {
    return (
        <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
            <div className="mb-3.5 flex items-center justify-between">
                <h2 className="text-base sm:text-lg font-black text-neutral-900 tracking-tight">
                    #SudahPastiMurahnya
                </h2>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none sm:grid sm:grid-cols-5 md:grid-cols-9">
                {CATEGORY_ITEMS.map((item) => {
                    const Icon = item.icon;
                    return (
                        <a
                            key={item.id}
                            href="#rekomendasi-section"
                            className="group flex flex-col items-center justify-center min-w-[94px] sm:min-w-0 rounded-2xl border border-neutral-200/80 bg-white p-3.5 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md active:scale-[0.98]"
                        >
                            <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.color} transition-transform duration-200 group-hover:scale-105`}>
                                <Icon className="h-5 w-5" />
                            </div>
                            <span className="mt-2 text-center text-xs font-bold text-neutral-800 leading-tight group-hover:text-blue-700 line-clamp-2">
                                {item.label}
                            </span>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
