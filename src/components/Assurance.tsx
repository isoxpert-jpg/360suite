import { ShieldCheck, Lock, FileCheck, Server, Cpu, Globe, Network } from 'lucide-react';

export default function Assurance() {
    const features = [
        { name: 'Standards-Aligned Architecture', desc: 'Engineered to meet strict international regulatory frameworks.', icon: ShieldCheck },
        { name: 'Role-Based Access Control', desc: 'Granular permission settings for internal and external stakeholders.', icon: Lock },
        { name: 'Audit-Ready Records', desc: 'Immutable data trails ensuring total transparency.', icon: FileCheck },
        { name: 'Secure Cloud Infrastructure', desc: 'High-availability hosting with enterprise-grade data protection.', icon: Server },
        { name: 'AI-Enabled Inspection Capability', desc: 'Advanced machine learning for precision quality control.', icon: Cpu },
        { name: 'Multi-Site Enterprise Scalability', desc: 'Unified management for global, multi-facility operations.', icon: Globe },
        { name: 'API Integration Ready', desc: 'Seamless connectivity with existing ERP and enterprise systems.', icon: Network },
    ];

    return (
        <div id="assurance" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Built for Regulated Environments</h2>
                    <p className="mt-4 text-lg text-slate-600">Enterprise-grade security, compliance, and scalability.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div key={feature.name} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="h-12 w-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-6">
                                <feature.icon className="h-6 w-6 text-cyan-700" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.name}</h3>
                            <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
