import { Globe } from 'lucide-react';

export default function RegionalPresence() {
    const regions = ['USA', 'UK', 'EU', 'GCC', 'Asia', 'CA'];

    return (
        <div className="py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/20 blur-[100px] rounded-full pointer-events-none"></div>
                <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid-pattern-dark" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid-pattern-dark)" />
                </svg>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
                    <Globe className="h-8 w-8 text-cyan-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Global Reach. Regional Expertise.</h2>
                <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12">
                    Operating across key global markets, 360Suite provides localized support and compliance alignment for enterprises and certification bodies worldwide.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {regions.map((region) => (
                        <span key={region} className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-slate-200 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                            {region}
                        </span>
                    ))}
                </div>
                <div className="pt-12 border-t border-white/10">
                    <p className="text-sm text-slate-500 mb-8 uppercase tracking-widest font-bold">Regional Partners</p>
                    <div className="flex justify-center space-x-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 mb-12">
                        <div className="h-10 w-32 bg-white/20 rounded-lg"></div>
                        <div className="h-10 w-40 bg-white/20 rounded-lg"></div>
                        <div className="h-10 w-32 bg-white/20 rounded-lg"></div>
                        <div className="h-10 w-36 bg-white/20 rounded-lg"></div>
                    </div>
                    <a href="/#contact" className="inline-flex items-center justify-center px-8 py-4 border border-cyan-600/50 text-base font-medium rounded-lg text-cyan-400 hover:bg-cyan-900/30 transition-colors">
                        Become a Regional Partner
                    </a>
                </div>
            </div>
        </div>
    );
}
