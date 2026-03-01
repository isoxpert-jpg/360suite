import { FileText, Presentation, PlayCircle } from 'lucide-react';

export default function Resources() {
    const resources = [
        { title: 'Platform Brochure', desc: 'Comprehensive overview of the 360Suite ecosystem, technical specifications, and deployment models.', icon: FileText, action: 'Download Brochure' },
        { title: 'Executive Slide Deck', desc: 'High-level presentation detailing ROI, compliance alignment, and strategic advantages for decision-makers.', icon: Presentation, action: 'Download Deck' },
        { title: 'Introduction Video', desc: 'A technical walkthrough of the 360Suite architecture and core platform capabilities.', icon: PlayCircle, action: 'Watch Video' }
    ];

    return (
        <div className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Resources & Downloads</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {resources.map((res) => (
                        <div key={res.title} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col hover:border-cyan-300 hover:shadow-md transition-all">
                            <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                                <res.icon className="h-7 w-7 text-cyan-700" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{res.title}</h3>
                            <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{res.desc}</p>
                            <button className="inline-flex items-center justify-center w-full px-4 py-3 border-2 border-slate-100 text-sm font-bold rounded-xl text-slate-700 bg-white hover:border-cyan-600 hover:text-cyan-700 transition-colors">
                                {res.action}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
