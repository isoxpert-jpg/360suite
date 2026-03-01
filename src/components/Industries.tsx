import { Building2, Factory, HardHat, Droplets, ThermometerSnowflake, Truck, Award, CheckCircle2 } from 'lucide-react';

export default function Industries() {
    const industryList = [
        { name: 'Manufacturing', icon: Factory },
        { name: 'Food & Hospitality', icon: Building2 },
        { name: 'Construction', icon: HardHat },
        { name: 'Oil & Gas', icon: Droplets },
        { name: 'Pharma & Cold Storage', icon: ThermometerSnowflake },
        { name: 'Logistics', icon: Truck },
    ];

    const certList = [
        'ISO Certification Bodies',
        'Inspection Bodies',
        'Accreditation-Focused Organizations',
        'Multi-Site Audit Programs'
    ];

    return (
        <div id="industries" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Who We Serve</h2>
                    <p className="mt-4 text-lg text-slate-600">Engineered for complex regulatory environments.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center border-b border-slate-100 pb-4">
                            <Building2 className="h-6 w-6 mr-3 text-cyan-700" /> For Industry
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {industryList.map((item) => (
                                <div key={item.name} className="flex items-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all">
                                    <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-cyan-50 mr-4">
                                        <item.icon className="h-5 w-5 text-cyan-700" />
                                    </div>
                                    <span className="font-semibold text-slate-800">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center border-b border-slate-100 pb-4">
                            <Award className="h-6 w-6 mr-3 text-cyan-700" /> For Certification Bodies
                        </h3>
                        <ul className="space-y-4">
                            {certList.map((item, idx) => (
                                <li key={idx} className="flex items-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all">
                                    <CheckCircle2 className="h-6 w-6 text-cyan-600 mr-4 shrink-0" />
                                    <span className="font-semibold text-slate-800">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
