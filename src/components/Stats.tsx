export default function Stats() {
    const stats = [
        { value: '120+', label: 'ISO Systems Implemented' },
        { value: '350+', label: 'Compliance Projects Supervised' },
        { value: 'Global', label: 'Multi-Country Operations' },
        { value: '100%', label: 'Cloud-Based SaaS Architecture' },
        { value: 'AI', label: 'Enabled Inspection Technology' },
        { value: '6+', label: 'Multi-Industry Coverage' },
    ];

    return (
        <div className="py-20 bg-slate-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 to-slate-900/40"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="p-4">
                            <div className="text-4xl font-extrabold mb-2 text-cyan-400">{stat.value}</div>
                            <div className="text-sm font-semibold text-slate-300 uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
