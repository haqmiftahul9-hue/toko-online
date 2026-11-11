import { useState } from 'react';
import { Lightbulb, Star, MapPin, ShoppingCart, Check } from 'lucide-react';
import { RECOMMENDED_PRODUCTS } from '@/data/kadaionline-mock';
import { ProductItem } from '@/types/kadaionline';

interface RecommendedProductsProps {
    onAddToCart?: (product: ProductItem) => void;
}

const CATEGORY_TABS = [
    'Semua',
    'Dapur',
    'Perkakas',
    'Outdoor',
    'Rumah Tangga',
    'Elektronik',
    'Aksesoris',
];

export default function RecommendedProducts({
    onAddToCart,
}: RecommendedProductsProps) {
    const [activeTab, setActiveTab] = useState('Semua');
    const [visibleCount, setVisibleCount] = useState(24);
    const [addedId, setAddedId] = useState<string | null>(null);

    const filteredProducts = RECOMMENDED_PRODUCTS.filter((item) => {
        if (activeTab === 'Semua') return true;
        return item.category === activeTab;
    });

    const displayedProducts = filteredProducts.slice(0, visibleCount);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(val);
    };

    const handleQuickAdd = (product: ProductItem) => {
        if (onAddToCart) {
            onAddToCart(product);
            setAddedId(product.id);
            setTimeout(() => setAddedId(null), 1500);
        }
    };

    const loadMore = () => {
        setVisibleCount((prev) => prev + 12);
    };

    return (
        <section
            id="rekomendasi-section"
            className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8"
        >
            {/* Header & Tabs */}
            <div className="flex flex-col justify-between gap-4 border-b border-neutral-200/80 pb-4 sm:flex-row sm:items-center">
                <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                        <Lightbulb className="h-4 w-4" />
                    </span>
                    <h2 className="text-xl font-black tracking-tight text-neutral-900">
                        Rekomendasi Untukmu
                    </h2>
                </div>

                {/* Filter Tabs */}
                <div className="flex scrollbar-none items-center gap-1.5 overflow-x-auto pb-1">
                    {CATEGORY_TABS.map((tab) => (
                        <button
                            key={tab}
                            type="button"
                            onClick={() => setActiveTab(tab)}
                            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-all active:scale-95 ${
                                activeTab === tab
                                    ? 'bg-[#0f172a] text-white shadow-xs'
                                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Product Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {displayedProducts.map((product) => {
                    const isJustAdded = addedId === product.id;

                    return (
                        <div
                            key={product.id}
                            className={`group relative flex flex-col justify-between rounded-2xl border border-neutral-200/90 bg-white p-3 shadow-2xs transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-lg ${
                                product.isSoldOut ? 'opacity-80' : ''
                            }`}
                        >
                            <div>
                                {/* Product Image */}
                                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-neutral-100">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                        loading="lazy"
                                    />

                                    {/* Badges */}
                                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                                        {product.isNew && (
                                            <span className="rounded-sm bg-blue-700 px-1.5 py-0.5 text-[9px] font-black text-white uppercase shadow-xs">
                                                Baru
                                            </span>
                                        )}
                                        {product.isSoldOut && (
                                            <span className="rounded-sm bg-neutral-900 px-1.5 py-0.5 text-[9px] font-black text-white uppercase shadow-xs">
                                                Terjual Habis
                                            </span>
                                        )}
                                    </div>

                                    {/* Quick Add Button */}
                                    {!product.isSoldOut && (
                                        <button
                                            type="button"
                                            onClick={() =>
                                                handleQuickAdd(product)
                                            }
                                            aria-label="Tambah ke keranjang"
                                            className={`absolute right-2 bottom-2 flex h-8 w-8 items-center justify-center rounded-full shadow-md transition-all ${
                                                isJustAdded
                                                    ? 'scale-110 bg-emerald-600 text-white'
                                                    : 'bg-white text-neutral-800 opacity-0 group-hover:opacity-100 hover:bg-[#dc2626] hover:text-white'
                                            }`}
                                        >
                                            {isJustAdded ? (
                                                <Check className="h-4 w-4" />
                                            ) : (
                                                <ShoppingCart className="h-4 w-4" />
                                            )}
                                        </button>
                                    )}
                                </div>

                                {/* Product Info */}
                                <div className="mt-2.5">
                                    <h3 className="line-clamp-2 text-xs leading-snug font-semibold text-neutral-800 group-hover:text-blue-700">
                                        {product.title}
                                    </h3>

                                    {/* Variant & Rating */}
                                    <div className="mt-1 flex items-center justify-between text-[11px] text-neutral-400">
                                        <span className="max-w-[90px] truncate">
                                            {product.variant || '-'}
                                        </span>
                                        {product.rating && (
                                            <div className="flex shrink-0 items-center gap-0.5 font-semibold text-amber-500">
                                                <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                                                <span className="text-neutral-800">
                                                    {product.rating}
                                                </span>
                                                <span className="text-[10px] text-neutral-400">
                                                    ({product.reviewCount})
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Price and Discount */}
                                    <div className="mt-2">
                                        <div className="flex items-baseline gap-1.5">
                                            <span className="text-xs font-black text-[#dc2626] sm:text-sm">
                                                {formatCurrency(product.price)}
                                            </span>
                                            <span className="text-[10px] font-bold text-red-600">
                                                -{product.discountPercent}%
                                            </span>
                                        </div>
                                        <div className="text-[10px] text-neutral-400 line-through">
                                            {formatCurrency(
                                                product.originalPrice,
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Store Availability Badge */}
                            <div className="mt-3 border-t border-neutral-100 pt-2">
                                {product.isSoldOut ? (
                                    <div className="flex items-center gap-1 text-[10px] font-medium text-neutral-400">
                                        <span>Habis di semua lokasi</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-between text-[10px] font-medium text-neutral-500 group-hover:text-blue-700">
                                        <div className="flex items-center gap-1 truncate">
                                            <MapPin className="h-3 w-3 shrink-0 text-neutral-400 group-hover:text-blue-700" />
                                            <span className="truncate">
                                                Tersedia di{' '}
                                                {product.locationCount} lokasi
                                            </span>
                                        </div>
                                        <span className="text-neutral-300 group-hover:text-blue-700">
                                            &rsaquo;
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Load More Button */}
            <div className="mt-8 flex justify-center">
                <button
                    type="button"
                    onClick={loadMore}
                    className="inline-flex items-center justify-center rounded-xl border border-neutral-300 bg-white px-8 py-3 text-xs font-bold text-neutral-800 shadow-2xs transition-all hover:border-blue-600 hover:text-blue-700 hover:shadow-md active:scale-[0.98] sm:text-sm"
                >
                    <span>Tampilkan Produk Lainnya</span>
                </button>
            </div>
        </section>
    );
}
