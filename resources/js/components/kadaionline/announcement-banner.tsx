import { Megaphone, ExternalLink } from 'lucide-react';

export default function AnnouncementBanner() {
    return (
        <section className="mx-auto max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 rounded-xl border border-blue-200/90 bg-blue-50/80 px-4 py-2.5 text-xs text-blue-950 shadow-2xs">
                <div className="flex items-center gap-2.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-blue-700 text-white">
                        <Megaphone className="h-3.5 w-3.5" />
                    </span>
                    <p className="leading-snug">
                        <strong className="font-bold text-blue-950 uppercase tracking-wide mr-1">
                            PENGUMUMAN
                        </strong>
                        Layanan chat Customer Support resmi telah beralih ke{' '}
                        <span className="font-bold text-blue-900">0897-2276-050</span>. Layanan nomor lama 0899-7217-050 sudah tidak aktif.
                    </p>
                </div>
                <a
                    href="https://wa.me/628972276050"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 font-bold text-blue-700 hover:text-blue-900 transition-colors py-1 px-2.5 rounded-lg hover:bg-blue-100/70 active:scale-[0.98]"
                >
                    <span>Buka Chat WhatsApp</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                </a>
            </div>
        </section>
    );
}
