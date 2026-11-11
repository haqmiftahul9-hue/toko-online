import { useState } from 'react';
import { Head } from '@inertiajs/react';
import KadaiHeader from '@/components/kadaionline/header';
import HeroSlider from '@/components/kadaionline/hero-slider';
import AnnouncementBanner from '@/components/kadaionline/announcement-banner';
import QuickCategories from '@/components/kadaionline/quick-categories';
import FlashSale from '@/components/kadaionline/flash-sale';
import PromoBannerStrip from '@/components/kadaionline/promo-banner-strip';
import PopularCategories from '@/components/kadaionline/popular-categories';
import ViralProducts from '@/components/kadaionline/viral-products';
import TrendingSearches from '@/components/kadaionline/trending-searches';
import RecommendedProducts from '@/components/kadaionline/recommended-products';
import ArticlesSection from '@/components/kadaionline/articles-section';
import ValuePropositions from '@/components/kadaionline/value-propositions';
import SeoContent from '@/components/kadaionline/seo-content';
import KadaiFooter from '@/components/kadaionline/footer';
import FloatingHelp from '@/components/kadaionline/floating-help';
import CartDrawer, { CartItem } from '@/components/kadaionline/cart-drawer';
import { FlashSaleItem, ProductItem } from '@/types/kadaionline';

export default function Welcome() {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        {
            id: 'p-1',
            title: 'TRENDY Botol Cold Brew Coffee Maker Filter Pot with Glass Carafe',
            price: 68100,
            quantity: 1,
            image: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=400&q=80',
        },
    ]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleAddToCart = (item: ProductItem | FlashSaleItem) => {
        setCartItems((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                return prev.map((i) =>
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
                );
            }
            return [
                ...prev,
                {
                    id: item.id,
                    title: item.title,
                    price: item.price,
                    image: item.image,
                    quantity: 1,
                },
            ];
        });
        setIsCartOpen(true);
    };

    const handleUpdateQuantity = (id: string, delta: number) => {
        setCartItems(
            (prev) =>
                prev
                    .map((item) => {
                        if (item.id === id) {
                            const newQty = item.quantity + delta;
                            return newQty > 0
                                ? { ...item, quantity: newQty }
                                : null;
                        }
                        return item;
                    })
                    .filter(Boolean) as CartItem[],
        );
    };

    const handleRemoveItem = (id: string) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const totalCartCount = cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0,
    );

    return (
        <>
            <Head>
                <title>
                    KadaiOnline - #SudahPastiMurahnya Ritel &amp; Grosir
                    Terpercaya
                </title>
                <meta
                    name="description"
                    content="Belanja produk hobi, perkakas, elektronik, dan peralatan rumah tangga dengan harga distributor langsung dan jaminan garansi resmi di KadaiOnline."
                />
            </Head>

            <div className="min-h-screen bg-[#f8fafc] font-sans text-neutral-900 antialiased selection:bg-rose-500 selection:text-white">
                {/* Header & Navigation */}
                <KadaiHeader
                    cartCount={totalCartCount}
                    onCartClick={() => setIsCartOpen(true)}
                />

                <main className="space-y-6 pb-12 sm:space-y-8">
                    {/* Hero Slider and Stacked Banners */}
                    <HeroSlider />

                    {/* Customer Support Notice Bar */}
                    <AnnouncementBanner />

                    {/* Quick Categories Bar */}
                    <QuickCategories />

                    {/* Flash Sale Section with Countdown */}
                    <FlashSale onAddToCart={handleAddToCart} />

                    {/* 11.11 Promo Strip */}
                    <PromoBannerStrip />

                    {/* Popular Categories Grid */}
                    <PopularCategories />

                    {/* Viral Products Video Style */}
                    <ViralProducts />

                    {/* Trending Search Chips */}
                    <TrendingSearches />

                    {/* Main Recommendation Grid */}
                    <RecommendedProducts onAddToCart={handleAddToCart} />

                    {/* Articles Section */}
                    <ArticlesSection />

                    {/* 5 Value Propositions & Trust Guarantees */}
                    <ValuePropositions />

                    {/* Brand Profile and Store Information */}
                    <SeoContent />
                </main>

                {/* Footer */}
                <KadaiFooter />

                {/* Floating WhatsApp Help Widget */}
                <FloatingHelp />

                {/* Cart Slide-over Drawer */}
                <CartDrawer
                    isOpen={isCartOpen}
                    onClose={() => setIsCartOpen(false)}
                    items={cartItems}
                    onUpdateQuantity={handleUpdateQuantity}
                    onRemoveItem={handleRemoveItem}
                />
            </div>
        </>
    );
}
