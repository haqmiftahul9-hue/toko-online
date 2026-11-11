import { PackageCheck, Truck, ShieldCheck, TrendingUp, CircleDollarSign } from 'lucide-react';

const VALUES = [
    {
        title: 'Produk Terlengkap',
        description: 'Lebih dari 15.000 produk unik dan hobi pilihan',
        icon: PackageCheck,
        color: 'text-amber-600 bg-amber-50',
    },
    {
        title: 'Pengiriman Fleksibel',
        description: 'Kurir instan dan self-pickup di 12 cabang toko',
        icon: Truck,
        color: 'text-blue-600 bg-blue-50',
    },
    {
        title: 'Garansi Terjamin',
        description: 'Toko resmi beroperasi sejak 1999 dengan layanan garansi',
        icon: ShieldCheck,
        color: 'text-emerald-600 bg-emerald-50',
    },
    {
        title: 'Program Dropship',
        description: 'Margin keuntungan transparan tanpa minimal order',
        icon: TrendingUp,
        color: 'text-purple-600 bg-purple-50',
    },
    {
        title: 'Harga Langsung Sumber',
        description: 'Didistribusikan langsung tanpa rantai perantara panjang',
        icon: CircleDollarSign,
        color: 'text-red-600 bg-red-50',
    },
];

export default function ValuePropositions() {
    return (
        <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-4 rounded-2xl border border-neutral-200/90 bg-white p-6 shadow-2xs sm:grid-cols-3 lg:grid-cols-5">
                {VALUES.map((val, idx) => {
                    const Icon = val.icon;
                    return (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center p-2"
                        >
                            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${val.color} mb-3 shadow-2xs`}>
                                <Icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xs sm:text-sm font-bold text-neutral-900 leading-tight">
                                {val.title}
                            </h3>
                            <p className="mt-1 text-[11px] text-neutral-500 leading-snug">
                                {val.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
