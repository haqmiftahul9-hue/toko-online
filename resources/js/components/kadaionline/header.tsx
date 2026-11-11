import { useState, useRef, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import {
    Search,
    ShoppingCart,
    User,
    MapPin,
    Smartphone,
    HelpCircle,
    Store,
    Menu,
    ChevronDown,
    Flame,
    Package,
    Tag,
    X,
    Laptop,
    Tv,
    Home,
    Car,
    Camera,
    Dumbbell,
    Wrench,
    Check,
    Coffee,
} from 'lucide-react';
import { STORE_LOCATIONS } from '@/data/kadaionline-mock';
import { dashboard, login, register } from '@/routes';

interface HeaderProps {
    cartCount?: number;
    onCartClick?: () => void;
}

const CATEGORIES = [
    { name: 'Komputer & Laptop', icon: Laptop, count: '1.240 produk' },
    { name: 'Elektronik & Gadget', icon: Tv, count: '3.410 produk' },
    { name: 'Peralatan Kopi & Dapur', icon: Coffee, count: '1.850 produk' },
    { name: 'Rumah Tangga & Kebersihan', icon: Home, count: '2.190 produk' },
    { name: 'Otomotif & Motor', icon: Car, count: '940 produk' },
    { name: 'Kamera & Fotografi', icon: Camera, count: '630 produk' },
    { name: 'Olahraga & Outdoor', icon: Dumbbell, count: '1.120 produk' },
    { name: 'Perkakas & Hardware', icon: Wrench, count: '890 produk' },
];

export default function KadaiHeader({
    cartCount = 0,
    onCartClick,
}: HeaderProps) {
    const { auth } = usePage().props as {
        auth?: { user?: { name: string; email: string } };
    };
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState(
        STORE_LOCATIONS[0].name,
    );
    const [isLocationOpen, setIsLocationOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false);
    const [isAppPromoOpen, setIsAppPromoOpen] = useState(false);

    const locationRef = useRef<HTMLDivElement>(null);
    const categoryRef = useRef<HTMLDivElement>(null);
    const appPromoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                locationRef.current &&
                !locationRef.current.contains(event.target as Node)
            ) {
                setIsLocationOpen(false);
            }
            if (
                categoryRef.current &&
                !categoryRef.current.contains(event.target as Node)
            ) {
                setIsCategoryOpen(false);
            }
            if (
                appPromoRef.current &&
                !appPromoRef.current.contains(event.target as Node)
            ) {
                setIsAppPromoOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSearchSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const el = document.getElementById('rekomendasi-section');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="sticky top-0 z-40 w-full border-b border-neutral-200/80 bg-white shadow-xs">
            {/* Top Bar */}
            <div className="border-b border-neutral-100 bg-neutral-50/90 text-xs text-neutral-600">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 sm:px-6 lg:px-8">
                    {/* Left: App Promo */}
                    <div className="relative" ref={appPromoRef}>
                        <button
                            type="button"
                            onClick={() => setIsAppPromoOpen(!isAppPromoOpen)}
                            className="flex items-center gap-1.5 py-0.5 text-neutral-600 transition-colors hover:text-blue-700 active:scale-[0.98]"
                        >
                            <Smartphone className="h-3.5 w-3.5 text-neutral-500" />
                            <span className="font-medium">
                                Banyak Promo Belanja di App
                            </span>
                            <ChevronDown className="h-3 w-3 text-neutral-400" />
                        </button>

                        {isAppPromoOpen && (
                            <div className="absolute top-full left-0 z-50 mt-1.5 w-80 animate-in rounded-xl border border-neutral-200 bg-white p-4 shadow-xl duration-150 zoom-in-95 fade-in">
                                <p className="mb-1 text-xs font-bold text-neutral-900">
                                    Aplikasi Mobile KadaiOnline
                                </p>
                                <p className="mb-3 text-xs leading-relaxed text-neutral-500">
                                    Voucher pengguna baru Rp 50.000 dan update
                                    stok cabang secara real-time.
                                </p>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="flex cursor-pointer items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 p-2 text-xs font-semibold text-neutral-800 transition-colors hover:bg-neutral-100 active:scale-[0.98]">
                                        Google Play
                                    </div>
                                    <div className="flex cursor-pointer items-center justify-center rounded-lg border border-neutral-200 bg-neutral-50 p-2 text-xs font-semibold text-neutral-800 transition-colors hover:bg-neutral-100 active:scale-[0.98]">
                                        App Store
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right: Help & Store Navigation */}
                    <div className="flex items-center gap-5 font-medium">
                        <a
                            href="#footer"
                            className="flex items-center gap-1.5 transition-colors hover:text-blue-700"
                        >
                            <HelpCircle className="h-3.5 w-3.5 text-neutral-500" />
                            <span>Cara Belanja</span>
                        </a>
                        <button
                            type="button"
                            onClick={() => setIsLocationOpen(true)}
                            className="flex items-center gap-1.5 transition-colors hover:text-blue-700"
                        >
                            <Store className="h-3.5 w-3.5 text-neutral-500" />
                            <span>Belanja ke Toko</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <div className="bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
                    {/* Brand Logo */}
                    <Link
                        href="/"
                        className="group flex shrink-0 flex-col select-none"
                    >
                        <div className="flex items-center text-2xl font-black tracking-tight">
                            <span className="text-[#0f172a] transition-colors group-hover:text-blue-700">
                                kadai
                            </span>
                            <span className="text-[#dc2626]">online</span>
                        </div>
                        <span className="-mt-0.5 text-[10px] font-semibold tracking-wider text-neutral-500 uppercase">
                            #SudahPastiMurahnya
                        </span>
                    </Link>

                    {/* Search Bar */}
                    <form
                        onSubmit={handleSearchSubmit}
                        className="relative hidden max-w-2xl flex-1 items-center md:flex"
                    >
                        <div className="relative w-full">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="kertas kue"
                                className="w-full rounded-lg border border-neutral-300 bg-neutral-50/60 py-2.5 pr-12 pl-4 text-xs text-neutral-900 transition-all placeholder:text-neutral-400 focus:border-blue-600 focus:bg-white focus:ring-2 focus:ring-blue-600/15 focus:outline-hidden sm:text-sm"
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    onClick={() => setSearchQuery('')}
                                    className="absolute top-1/2 right-12 -translate-y-1/2 p-1 text-neutral-400 hover:text-neutral-700"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            )}
                            <button
                                type="submit"
                                aria-label="Cari produk"
                                className="absolute top-1/2 right-1.5 -translate-y-1/2 rounded-md p-2 text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-blue-700 active:scale-95"
                            >
                                <Search className="h-4 w-4" />
                            </button>
                        </div>
                    </form>

                    {/* Right Actions */}
                    <div className="flex shrink-0 items-center gap-3 sm:gap-5">
                        {/* Location Selector */}
                        <div className="relative" ref={locationRef}>
                            <button
                                type="button"
                                onClick={() =>
                                    setIsLocationOpen(!isLocationOpen)
                                }
                                className="hidden items-center gap-2 rounded-lg px-2 py-1 text-xs text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-blue-700 active:scale-[0.98] lg:flex"
                            >
                                <MapPin className="h-4 w-4 shrink-0 text-[#dc2626]" />
                                <div className="flex flex-col text-left leading-tight">
                                    <span className="text-[11px] text-neutral-500">
                                        Mau belanja di mana?
                                    </span>
                                    <span className="max-w-[130px] truncate font-bold text-neutral-900">
                                        {selectedLocation}
                                    </span>
                                </div>
                                <ChevronDown className="h-3.5 w-3.5 shrink-0 text-neutral-400" />
                            </button>

                            {isLocationOpen && (
                                <div className="absolute top-full right-0 z-50 mt-2 w-72 animate-in rounded-xl border border-neutral-200 bg-white p-2 shadow-2xl duration-150 zoom-in-95 fade-in">
                                    <div className="border-b border-neutral-100 px-3 py-2 text-[11px] font-bold tracking-wider text-neutral-500 uppercase">
                                        Pilih Lokasi Toko
                                    </div>
                                    <div className="max-h-60 overflow-y-auto py-1">
                                        {STORE_LOCATIONS.map((loc) => (
                                            <button
                                                key={loc.id}
                                                type="button"
                                                onClick={() => {
                                                    setSelectedLocation(
                                                        loc.name,
                                                    );
                                                    setIsLocationOpen(false);
                                                }}
                                                className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs transition-colors hover:bg-neutral-100 active:scale-[0.98] ${
                                                    selectedLocation ===
                                                    loc.name
                                                        ? 'bg-blue-50/70 font-bold text-blue-700'
                                                        : 'text-neutral-700'
                                                }`}
                                            >
                                                <span className="truncate">
                                                    {loc.name}
                                                </span>
                                                {selectedLocation ===
                                                    loc.name && (
                                                    <Check className="ml-2 h-3.5 w-3.5 shrink-0 text-blue-700" />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Cart */}
                        <button
                            type="button"
                            onClick={onCartClick}
                            className="relative flex items-center gap-2 rounded-lg p-2 text-neutral-700 transition-colors hover:bg-neutral-100 active:scale-95"
                        >
                            <div className="relative">
                                <ShoppingCart className="h-5 w-5 text-neutral-800" />
                                {cartCount > 0 && (
                                    <span className="absolute -top-1.5 -right-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-[#dc2626] px-1 text-[10px] font-bold text-white shadow-xs">
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                            <span className="hidden text-xs font-semibold text-neutral-800 sm:inline">
                                Keranjang
                            </span>
                        </button>

                        {/* Auth */}
                        {auth?.user ? (
                            <Link
                                href={dashboard()}
                                className="flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-1.5 text-xs font-bold text-neutral-900 transition-all hover:border-neutral-300 hover:bg-neutral-50 active:scale-[0.98]"
                            >
                                <User className="h-4 w-4 text-blue-700" />
                                <span className="max-w-[100px] truncate">
                                    {auth.user.name}
                                </span>
                            </Link>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link
                                    href={login()}
                                    className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-blue-700 active:scale-[0.98]"
                                >
                                    <User className="h-4 w-4 text-neutral-500" />
                                    <span>Masuk</span>
                                </Link>
                                <Link
                                    href={register()}
                                    className="hidden items-center rounded-lg bg-[#0f172a] px-3.5 py-1.5 text-xs font-bold text-white shadow-xs transition-all hover:bg-[#1e293b] active:scale-[0.98] md:inline-flex"
                                >
                                    Daftar Akun
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Search Bar */}
                <div className="border-t border-neutral-100 p-2 sm:px-6 md:hidden">
                    <form
                        onSubmit={handleSearchSubmit}
                        className="relative flex items-center"
                    >
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Cari produk (cth: kertas kue)..."
                            className="w-full rounded-lg border border-neutral-300 bg-neutral-50 py-2 pr-10 pl-3 text-xs text-neutral-900 focus:border-blue-600 focus:bg-white focus:outline-hidden"
                        />
                        <button
                            type="submit"
                            className="absolute right-2 text-neutral-500"
                        >
                            <Search className="h-4 w-4" />
                        </button>
                    </form>
                </div>
            </div>

            {/* Sub-header / Category Navigation */}
            <div className="border-t border-neutral-200/60 bg-white">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    {/* Category Dropdown Trigger */}
                    <div className="relative" ref={categoryRef}>
                        <button
                            type="button"
                            onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                            className="flex items-center gap-2 py-2.5 text-xs font-bold text-neutral-800 transition-colors hover:text-blue-700 active:scale-[0.98]"
                        >
                            <Menu className="h-4 w-4 text-neutral-700" />
                            <span>Kategori</span>
                            <ChevronDown className="h-3 w-3 text-neutral-400" />
                        </button>

                        {isCategoryOpen && (
                            <div className="absolute top-full left-0 z-50 mt-1 w-72 animate-in rounded-xl border border-neutral-200 bg-white py-2 shadow-2xl duration-100 zoom-in-95 fade-in">
                                <div className="px-3 pb-2 text-[11px] font-bold tracking-wider text-neutral-500 uppercase">
                                    Katalog Produk
                                </div>
                                {CATEGORIES.map((cat, i) => {
                                    const Icon = cat.icon;
                                    return (
                                        <a
                                            key={i}
                                            href="#rekomendasi-section"
                                            onClick={() =>
                                                setIsCategoryOpen(false)
                                            }
                                            className="flex items-center justify-between px-3 py-2 text-xs text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-blue-700 active:scale-[0.98]"
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <Icon className="h-4 w-4 text-neutral-500" />
                                                <span className="font-medium">
                                                    {cat.name}
                                                </span>
                                            </div>
                                            <span className="text-[11px] text-neutral-400">
                                                {cat.count}
                                            </span>
                                        </a>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Middle: Promo Badges / Quick Links */}
                    <nav className="flex scrollbar-none items-center gap-4 overflow-x-auto py-2 text-xs sm:gap-8">
                        <a
                            href="#whats-new"
                            className="flex items-center gap-1.5 font-medium whitespace-nowrap text-neutral-700 transition-colors hover:text-blue-700"
                        >
                            <Flame className="h-3.5 w-3.5 text-orange-500" />
                            <span>What's New</span>
                        </a>
                        <a
                            href="#just-arrived"
                            className="flex items-center gap-1.5 font-medium whitespace-nowrap text-neutral-700 transition-colors hover:text-blue-700"
                        >
                            <Package className="h-3.5 w-3.5 text-blue-600" />
                            <span>Just Arrived</span>
                        </a>
                        <a
                            href="#promo-1111"
                            className="flex items-center gap-1.5 font-bold whitespace-nowrap text-[#dc2626] transition-colors hover:text-red-700"
                        >
                            <Tag className="h-3.5 w-3.5" />
                            <span>11.11 Semurah Ini</span>
                            <span className="py-0.2 rounded bg-red-100 px-1 text-[9px] font-black text-[#dc2626]">
                                HOT
                            </span>
                        </a>
                    </nav>

                    {/* Right: Pickup note */}
                    <div className="hidden items-center text-xs font-medium text-neutral-500 lg:flex">
                        <span>
                            Pesan online, ambil langsung di toko tanpa antre
                        </span>
                    </div>
                </div>
            </div>
        </header>
    );
}
