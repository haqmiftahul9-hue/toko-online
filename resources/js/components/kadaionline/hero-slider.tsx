import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const SLIDES = [
    {
        id: 'slide-1',
        title: 'Terangi Setiap Langkahmu',
        subtitle: 'Senter Trail Run & Taktikal 1200 Lumens IPX8',
        voucherText: 'Ekstra Voucher 2JT',
        priceTag: 'Mulai Rp 25.600',
        ctaText: 'Beli Senter Trail Run',
        ctaLink: '#rekomendasi-section',
        bgGradient: 'from-[#0b1728] via-[#102a45] to-[#1e3a5f]',
        image: 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=800&q=80',
        badgeColor: 'bg-yellow-400 text-neutral-950',
    },
    {
        id: 'slide-2',
        title: 'Peralatan Kopi Estetik',
        subtitle: 'Moka Pot, French Press, & Conical Burr Grinder',
        voucherText: 'Diskon s/d 50%',
        priceTag: 'Mulai Rp 27.500',
        ctaText: 'Beli Peralatan Kopi',
        ctaLink: '#flash-sale',
        bgGradient: 'from-[#1e140d] via-[#332219] to-[#4a3427]',
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
        badgeColor: 'bg-amber-400 text-neutral-950',
    },
    {
        id: 'slide-3',
        title: 'Aksesoris Meja Kerja 2026',
        subtitle: 'Aluminium Stand, Multi-port GaN Hub, & Lampu Monitor',
        voucherText: 'Cashback s/d 100RB',
        priceTag: 'Mulai Rp 18.200',
        ctaText: 'Beli Aksesoris Gadget',
        ctaLink: '#viral-products',
        bgGradient: 'from-[#0d1b2a] via-[#1b263b] to-[#415a77]',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
        badgeColor: 'bg-sky-400 text-neutral-950',
    },
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 5500);
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    };

    return (
        <section className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                {/* Main Hero Slider (2 cols on lg) */}
                <div className="group relative min-h-[300px] overflow-hidden rounded-2xl bg-neutral-950 shadow-xs sm:min-h-[340px] lg:col-span-2">
                    {SLIDES.map((slide, index) => (
                        <div
                            key={slide.id}
                            className={`absolute inset-0 flex flex-col justify-between bg-gradient-to-r p-6 transition-opacity duration-700 sm:p-10 ${slide.bgGradient} ${
                                index === currentSlide
                                    ? 'z-10 opacity-100'
                                    : 'pointer-events-none z-0 opacity-0'
                            }`}
                        >
                            {/* Visual Photo on Right */}
                            <div className="pointer-events-none absolute top-0 right-0 bottom-0 w-3/5 overflow-hidden opacity-40 mix-blend-luminosity sm:opacity-55">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/40 to-transparent" />
                            </div>

                            {/* Headline & Specs */}
                            <div className="relative z-10 max-w-md">
                                <h1 className="text-2xl leading-tight font-black tracking-tight text-white sm:text-3xl lg:text-4xl">
                                    {slide.title}
                                </h1>
                                <p className="mt-2 text-xs text-neutral-200 sm:text-sm">
                                    {slide.subtitle}
                                </p>

                                <div className="mt-4 flex items-center gap-2">
                                    <span
                                        className={`inline-block rounded-md px-3 py-1 text-xs font-black tracking-wide sm:text-sm ${slide.badgeColor}`}
                                    >
                                        {slide.voucherText}
                                    </span>
                                    <span className="inline-block rounded-md bg-white/20 px-2.5 py-1 text-xs font-semibold text-white">
                                        {slide.priceTag}
                                    </span>
                                </div>
                            </div>

                            {/* CTA Action */}
                            <div className="relative z-10 mt-6">
                                <a
                                    href={slide.ctaLink}
                                    className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-5 py-2.5 text-xs font-bold text-neutral-950 shadow-md transition-all hover:translate-y-[-1px] hover:bg-yellow-300 active:scale-[0.98] sm:text-sm"
                                >
                                    <span>{slide.ctaText}</span>
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    ))}

                    {/* Navigation Arrows */}
                    <button
                        type="button"
                        onClick={prevSlide}
                        aria-label="Slide sebelumnya"
                        className="absolute top-1/2 left-3 z-20 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-0 transition-all group-hover:opacity-100 hover:bg-black/90 active:scale-95"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                        type="button"
                        onClick={nextSlide}
                        aria-label="Slide berikutnya"
                        className="absolute top-1/2 right-3 z-20 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white opacity-0 transition-all group-hover:opacity-100 hover:bg-black/90 active:scale-95"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-6 z-20 flex gap-2 sm:left-10">
                        {SLIDES.map((_, i) => (
                            <button
                                key={i}
                                type="button"
                                aria-label={`Menuju slide ${i + 1}`}
                                onClick={() => setCurrentSlide(i)}
                                className={`h-2 rounded-full transition-all ${
                                    i === currentSlide
                                        ? 'w-8 bg-yellow-400'
                                        : 'w-2 bg-white/40 hover:bg-white'
                                }`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Stacked Promo Banners */}
                <div className="flex flex-col gap-4">
                    {/* Top Promo Banner */}
                    <a
                        href="#rekomendasi-section"
                        className="group relative flex h-[155px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-r from-amber-300 via-amber-300 to-yellow-400 p-5 shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-md sm:h-[162px]"
                    >
                        <div className="z-10 max-w-[65%]">
                            <span className="inline-block rounded bg-red-600 px-2 py-0.5 text-[10px] font-black tracking-wide text-white uppercase">
                                Diskon s/d 76%
                            </span>
                            <h2 className="mt-1.5 text-base leading-tight font-black text-neutral-900 sm:text-lg">
                                Keset Kamar Mandi Mulai 15RB-an
                            </h2>
                            <span className="mt-2 inline-flex items-center text-xs font-bold text-neutral-900 group-hover:underline">
                                Beli Keset Kamar Mandi &rarr;
                            </span>
                        </div>
                        <div className="absolute -right-3 -bottom-3 h-32 w-32 rotate-6 overflow-hidden rounded-xl shadow-md transition-transform duration-300 group-hover:scale-105">
                            <img
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=240&q=80"
                                alt="Keset Kamar Mandi Anti-Slip"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </a>

                    {/* Bottom Promo Banner */}
                    <a
                        href="#promo-1111"
                        className="group relative flex h-[155px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 p-5 text-white shadow-xs transition-all hover:-translate-y-0.5 hover:shadow-md sm:h-[162px]"
                    >
                        <div className="z-10 max-w-[70%]">
                            <div className="inline-flex items-center gap-1 rounded bg-yellow-400 px-2 py-0.5 text-[10px] font-black text-neutral-950 uppercase">
                                BAZAR 10RB-AN
                            </div>
                            <h2 className="mt-1.5 text-base leading-tight font-black tracking-tight text-yellow-300 sm:text-lg">
                                EKSTRA VOUCHER 7RB
                            </h2>
                            <p className="mt-0.5 text-[11px] text-blue-200">
                                Belanja hemat perlengkapan rumah tangga hari ini
                            </p>
                            <span className="mt-2 inline-flex items-center text-xs font-bold text-white group-hover:underline">
                                Klaim Voucher 7RB &rarr;
                            </span>
                        </div>
                        <div className="absolute -right-2 -bottom-2 text-6xl font-black text-white/10 select-none">
                            10K
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}
