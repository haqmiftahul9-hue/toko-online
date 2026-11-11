import { useState, useEffect, useRef } from 'react';
import { Zap, ChevronLeft, ChevronRight, ShoppingBag } from 'lucide-react';
import { FLASH_SALE_ITEMS } from '@/data/kadaionline-mock';
import { FlashSaleItem } from '@/types/kadaionline';

interface FlashSaleProps {
    onAddToCart?: (item: FlashSaleItem) => void;
}

export default function FlashSale({ onAddToCart }: FlashSaleProps) {
    const [timeLeft, setTimeLeft] = useState({
        hours: 11,
        minutes: 26,
        seconds: 57,
    });

    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev.seconds > 0) {
                    return { ...prev, seconds: prev.seconds - 1 };
                } else if (prev.minutes > 0) {
                    return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                } else if (prev.hours > 0) {
                    return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                }
                return { hours: 12, minutes: 0, seconds: 0 };
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (num: number) => num.toString().padStart(2, '0');

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(val);
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
    };

    return (
        <section id="flash-sale" className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-red-100 bg-gradient-to-b from-red-50/40 via-white to-white p-4 sm:p-6 shadow-xs">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-red-100/70 pb-4">
                    <div className="flex items-center gap-2.5">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-red-600 text-white shadow-xs">
                            <Zap className="h-5 w-5 fill-white text-white" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h2 className="text-xl font-black text-neutral-900 tracking-tight">
                                    Flash Sale
                                </h2>
                                <span className="rounded bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider">
                                    Harga Spesial
                                </span>
                            </div>
                            <p className="text-xs font-medium text-neutral-500">
                                Peralatan Kopi &amp; Barista Pilihan
                            </p>
                        </div>
                    </div>

                    {/* Timer */}
                    <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-neutral-600">
                            Berakhir dalam
                        </span>
                        <div className="flex items-center gap-1 font-mono font-bold text-xs text-white">
                            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#dc2626] shadow-xs">
                                {formatTime(timeLeft.hours)}
                            </span>
                            <span className="text-[#dc2626] font-bold">:</span>
                            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#dc2626] shadow-xs">
                                {formatTime(timeLeft.minutes)}
                            </span>
                            <span className="text-[#dc2626] font-bold">:</span>
                            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[#dc2626] shadow-xs">
                                {formatTime(timeLeft.seconds)}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Carousel Container */}
                <div className="relative mt-4 group">
                    {/* Navigation Buttons */}
                    <button
                        type="button"
                        onClick={scrollLeft}
                        aria-label="Geser ke kiri"
                        className="absolute -left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-neutral-200 bg-white p-2 text-neutral-700 shadow-md opacity-0 group-hover:opacity-100 transition-all hover:bg-neutral-50 hover:text-red-600 active:scale-95"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        type="button"
                        onClick={scrollRight}
                        aria-label="Geser ke kanan"
                        className="absolute -right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-neutral-200 bg-white p-2 text-neutral-700 shadow-md opacity-0 group-hover:opacity-100 transition-all hover:bg-neutral-50 hover:text-red-600 active:scale-95"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Product Cards Grid */}
                    <div
                        ref={scrollContainerRef}
                        className="flex gap-4 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory"
                    >
                        {FLASH_SALE_ITEMS.map((item) => (
                            <div
                                key={item.id}
                                className="group/card flex w-[175px] sm:w-[195px] shrink-0 snap-start flex-col rounded-2xl border border-neutral-200/80 bg-white p-3 transition-all duration-200 hover:-translate-y-0.5 hover:border-red-300 hover:shadow-lg"
                            >
                                {/* Thumbnail */}
                                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-100">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover/card:scale-105"
                                        loading="lazy"
                                    />
                                    <span className="absolute left-2 top-2 rounded-sm bg-[#dc2626] px-1.5 py-0.5 text-[10px] font-black text-white shadow-xs">
                                        -{item.discountPercent}%
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="mt-2.5 flex flex-1 flex-col justify-between">
                                    <h3 className="line-clamp-2 text-xs font-semibold text-neutral-800 leading-snug group-hover/card:text-red-600">
                                        {item.title}
                                    </h3>

                                    <div className="mt-2">
                                        <div className="flex items-baseline gap-1.5">
                                            <span className="text-sm font-black text-[#dc2626]">
                                                {formatCurrency(item.price)}
                                            </span>
                                        </div>
                                        <div className="text-[11px] text-neutral-400 line-through">
                                            {formatCurrency(item.originalPrice)}
                                        </div>

                                        {/* Stock progress */}
                                        <div className="mt-2">
                                            <div className="h-1.5 w-full overflow-hidden rounded-full bg-red-100">
                                                <div
                                                    className="h-full rounded-full bg-gradient-to-r from-amber-500 to-red-600"
                                                    style={{ width: `${Math.max(30, 100 - item.discountPercent)}%` }}
                                                />
                                            </div>
                                            <div className="mt-1 flex justify-between text-[10px] text-neutral-500">
                                                <span>Stok Terbatas</span>
                                                <span className="font-semibold text-red-600">Terjual 82%</span>
                                            </div>
                                        </div>

                                        {/* Verb + Object CTA */}
                                        <button
                                            type="button"
                                            onClick={() => onAddToCart && onAddToCart(item)}
                                            className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-lg bg-neutral-900 py-2 text-xs font-bold text-white transition-all hover:bg-red-600 active:scale-[0.98]"
                                        >
                                            <ShoppingBag className="h-3.5 w-3.5" />
                                            <span>Beli Sekarang</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
