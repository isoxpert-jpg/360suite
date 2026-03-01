import { Link } from 'react-router-dom';
import { Search, ShieldCheck, Activity, FileCheck, CheckCircle2, ArrowRight } from 'lucide-react';

const products = [
    {
        id: 'inspect360',
        name: 'Inspect360',
        icon: Search,
        logo: '/inspect360-logo.webp',
        positioning: 'Digitize field inspections, standardize evaluation workflows, and maintain structured audit-ready records across multi-site operations.',
        capabilities: ['Configurable Inspection Templates', 'Multi-Site Inspection Management', 'Real-Time Reporting & Dashboards']
    },
    {
        id: 'compliance360',
        name: 'Compliance360',
        icon: ShieldCheck,
        logo: '/compliance360-logo.webp',
        positioning: 'Centralize ISO compliance requirements, manage risk registers, control documentation, and maintain continuous audit readiness across your organization.',
        capabilities: ['Centralized Document Control', 'Risk & Opportunity Management', 'Corrective & Preventive Action (CAPA)']
    },
    {
        id: 'qc360',
        name: 'QC360',
        icon: Activity,
        logo: '/qc360-logo.webp',
        positioning: 'AI-powered quality inspection platform for defect detection, standards-aligned sampling, and full digital traceability.',
        capabilities: ['Centralized Inspection Workflows', 'AI-Based Defect Detection', 'ISO 2859-1 / AQL Sampling']
    },
    {
        id: 'audit360',
        name: 'Audit360',
        icon: FileCheck,
        logo: '/audit360-logo.webp',
        positioning: 'Structured audit lifecycle management system for certification bodies, inspection bodies, and accreditation-driven organizations.',
        capabilities: ['End-to-End Audit Lifecycle Management', 'Auditor Assignment & Competency Tracking', 'Multi-Site & Multi-Standard Support']
    }
];

export default function Products() {
    return (
        <div id="products" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Product Ecosystem</h2>
                    <p className="mt-4 text-lg text-slate-600">Four specialized platforms. One unified infrastructure.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product) => (
                        <div key={product.name} className="group bg-white rounded-2xl shadow-sm border border-slate-200 p-8 hover:shadow-xl hover:border-cyan-700/30 transition-all duration-300 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-600 to-teal-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                            <div className="flex items-center mb-6">
                                {product.logo ? (
                                    <img
                                        src={product.logo}
                                        alt={`${product.name} Logo`}
                                        loading="lazy"
                                        className="h-16 w-auto object-contain object-left"
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = `https://placehold.co/200x60/f8fafc/0e7490?text=Upload+${product.logo.replace('/', '')}`;
                                        }}
                                    />
                                ) : (
                                    <div className="flex items-center">
                                        <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-cyan-50 text-cyan-700 group-hover:scale-110 transition-transform duration-300">
                                            <product.icon className="h-7 w-7" />
                                        </div>
                                        <h3 className="ml-4 text-2xl font-bold text-slate-900">{product.name}</h3>
                                    </div>
                                )}
                            </div>
                            <p className="text-slate-600 mb-8 min-h-[48px] text-lg">{product.positioning}</p>
                            <ul className="space-y-4 mb-8">
                                {product.capabilities.map((cap, idx) => (
                                    <li key={idx} className="flex items-start">
                                        <CheckCircle2 className="h-6 w-6 text-cyan-600 mr-3 shrink-0" />
                                        <span className="text-slate-700">{cap}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to={`/product/${product.id}`} className="inline-flex items-center text-sm font-bold text-cyan-700 hover:text-cyan-800 group-hover:translate-x-1 transition-transform">
                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
