import { X, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export interface CartItem {
    id: string;
    title: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartDrawerProps {
    isOpen: boolean;
    onClose: () => void;
    items: CartItem[];
    onUpdateQuantity: (id: string, delta: number) => void;
    onRemoveItem: (id: string) => void;
}

export default function CartDrawer({
    isOpen,
    onClose,
    items,
    onUpdateQuantity,
    onRemoveItem,
}: CartDrawerProps) {
    if (!isOpen) return null;

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
    );

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(val);
    };

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-neutral-950/60 backdrop-blur-xs transition-opacity duration-300"
                onClick={onClose}
            />

            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="flex w-screen max-w-md animate-in flex-col justify-between bg-white shadow-2xl duration-300 slide-in-from-right">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-4">
                        <div className="flex items-center gap-2">
                            <ShoppingBag className="h-5 w-5 text-neutral-900" />
                            <h2 className="text-base font-bold text-neutral-900">
                                Keranjang Belanja (
                                {items.reduce((s, i) => s + i.quantity, 0)})
                            </h2>
                        </div>
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Tutup keranjang"
                            className="rounded-lg p-1.5 text-neutral-400 transition-all hover:bg-neutral-100 hover:text-neutral-700 active:scale-95"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Content List */}
                    <div className="flex-1 space-y-4 overflow-y-auto p-6">
                        {items.length === 0 ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-400">
                                    <ShoppingBag className="h-8 w-8" />
                                </div>
                                <h3 className="text-sm font-bold text-neutral-900">
                                    Keranjang Anda Kosong
                                </h3>
                                <p className="mt-1 max-w-xs text-xs leading-relaxed text-neutral-500">
                                    Pilih barang dari katalog atau flash sale
                                    untuk menambahkan produk ke keranjang.
                                </p>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="mt-5 rounded-xl bg-[#0f172a] px-5 py-2.5 text-xs font-bold text-white transition-all hover:bg-neutral-800 active:scale-[0.98]"
                                >
                                    Mulai Pilih Produk
                                </button>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center gap-3.5 rounded-xl border border-neutral-200/80 bg-neutral-50/60 p-3"
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-16 w-16 shrink-0 rounded-lg border border-neutral-200 bg-white object-cover"
                                    />
                                    <div className="min-w-0 flex-1">
                                        <h4 className="truncate text-xs font-bold text-neutral-900">
                                            {item.title}
                                        </h4>
                                        <div className="mt-1 text-xs font-black text-[#dc2626]">
                                            {formatCurrency(item.price)}
                                        </div>

                                        <div className="mt-2.5 flex items-center justify-between">
                                            <div className="flex items-center rounded-lg border border-neutral-300 bg-white shadow-2xs">
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        onUpdateQuantity(
                                                            item.id,
                                                            -1,
                                                        )
                                                    }
                                                    aria-label="Kurangi jumlah"
                                                    className="px-2.5 py-1 text-xs font-bold text-neutral-700 hover:bg-neutral-100 active:scale-95"
                                                >
                                                    -
                                                </button>
                                                <span className="px-2.5 py-1 text-xs font-bold text-neutral-900">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    type="button"
                                                    onClick={() =>
                                                        onUpdateQuantity(
                                                            item.id,
                                                            1,
                                                        )
                                                    }
                                                    aria-label="Tambah jumlah"
                                                    className="px-2.5 py-1 text-xs font-bold text-neutral-700 hover:bg-neutral-100 active:scale-95"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                type="button"
                                                onClick={() =>
                                                    onRemoveItem(item.id)
                                                }
                                                aria-label="Hapus produk"
                                                className="p-1.5 text-neutral-400 transition-colors hover:text-red-600 active:scale-95"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Footer Summary */}
                    {items.length > 0 && (
                        <div className="space-y-4 border-t border-neutral-200 bg-white p-6">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-semibold text-neutral-600">
                                    Subtotal Belanja
                                </span>
                                <span className="text-base font-black text-neutral-900">
                                    {formatCurrency(total)}
                                </span>
                            </div>
                            <div className="text-[11px] text-neutral-400">
                                Pilihan kurir reguler/instan atau self-pickup
                                toko dipilih pada langkah checkout.
                            </div>
                            <button
                                type="button"
                                onClick={() =>
                                    alert(
                                        'Pesanan diproses. Terima kasih telah berbelanja di KadaiOnline.',
                                    )
                                }
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#dc2626] py-3 text-xs font-bold text-white shadow-md shadow-red-600/20 transition-all hover:bg-red-700 active:scale-[0.98] sm:text-sm"
                            >
                                <span>Lanjut ke Pembayaran</span>
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
