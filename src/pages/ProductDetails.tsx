import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Search, ShieldCheck, Activity, FileCheck, CheckCircle2, ExternalLink, ArrowLeft, Network } from 'lucide-react';

const productsData: Record<string, any> = {
    'inspect360': {
        name: 'Inspect360',
        icon: Search,
        logo: '/inspect360-logo.webp',
        appUrl: 'https://inspect360.companycertification.com',
        tagline: 'Digitize field inspections, standardize evaluation workflows, and maintain structured audit-ready records across multi-site operations.',
        description: [
            'Inspect360 is a structured inspection management platform designed to standardize operational inspections across industries. It replaces paper-based checklists and fragmented reporting with centralized digital workflows, real-time analytics, and traceable inspection records.',
            'Built for regulated environments, Inspect360 ensures consistent evaluation criteria, structured reporting, and accountability across inspectors, locations, and operational units.'
        ],
        features: [
            { title: 'Configurable Inspection Templates', description: 'Create structured inspection checklists aligned with internal standards, regulatory requirements, or industry frameworks.' },
            { title: 'Multi-Site Inspection Management', description: 'Manage inspections across multiple facilities, branches, or operational locations from a centralized dashboard.' },
            { title: 'Real-Time Reporting & Dashboards', description: 'Access inspection summaries, non-conformance trends, and performance metrics instantly.' },
            { title: 'Digital Evidence Capture', description: 'Attach images, notes, and structured observations directly to inspection records.' },
            { title: 'Non-Conformance Tracking', description: 'Record findings, assign corrective actions, and monitor resolution progress.' },
            { title: 'Inspector Accountability & Traceability', description: 'Maintain timestamped logs, inspector identification, and location-based tracking for every inspection activity.' }
        ],
        integrationReady: { description: 'Seamlessly integrates with compliance systems, ERP platforms, and reporting tools via secure API architecture.', buttonText: 'API Documentation' },
        enterpriseSecurity: { description: 'Built on secure cloud infrastructure with role-based access control and audit-ready data retention.', buttonText: 'Security Overview' }
    },
    'compliance360': {
        name: 'Compliance360',
        icon: ShieldCheck,
        logo: '/compliance360-logo.webp',
        appUrl: 'https://compliance360.companycertification.com',
        tagline: 'Centralize ISO compliance requirements, manage risk registers, control documentation, and maintain continuous audit readiness across your organization.',
        description: [
            'Compliance360 is an enterprise-grade compliance management platform designed to support organizations operating under ISO standards and regulatory frameworks. It centralizes documentation, risk management, corrective actions, and internal audit tracking within a structured digital environment.',
            'Built for regulated industries and multi-site operations, Compliance360 replaces fragmented spreadsheets and manual tracking with controlled workflows, traceable records, and real-time compliance visibility.'
        ],
        features: [
            { title: 'Centralized Document Control', description: 'Manage policies, procedures, records, and version histories within a controlled, role-based environment.' },
            { title: 'Risk & Opportunity Management', description: 'Maintain structured risk registers aligned with ISO standards and organizational objectives.' },
            { title: 'Corrective & Preventive Action (CAPA)', description: 'Track non-conformances, assign corrective actions, and monitor resolution progress.' },
            { title: 'Internal Audit Management', description: 'Plan, execute, and document internal audits with standardized reporting templates.' },
            { title: 'Compliance Dashboards', description: 'Monitor compliance status, open actions, and risk exposure through real-time analytics.' },
            { title: 'Multi-Site Compliance Oversight', description: 'Maintain centralized control over compliance activities across multiple facilities or operational units.' }
        ],
        integrationReady: { description: 'Seamlessly integrates with inspection systems, audit platforms, and enterprise tools through secure API architecture.', buttonText: 'API Documentation' },
        enterpriseSecurity: { description: 'Built on secure cloud infrastructure with role-based access control, encrypted data storage, and audit-ready record retention.', buttonText: 'Security Overview' }
    },
    'qc360': {
        name: 'QC360',
        icon: Activity,
        logo: '/qc360-logo.webp',
        appUrl: 'https://qc360.companycertification.com',
        tagline: 'AI-powered quality inspection platform for defect detection, standards-aligned sampling, and full digital traceability across incoming, in-process, and finished goods inspections.',
        description: [
            'QC360 is an intelligent quality control platform designed to digitize and standardize visual inspection workflows. It combines structured sampling methodologies, AI-based defect detection, and centralized inspection records to ensure consistent, audit-ready quality decisions.',
            'Built for regulated industries, QC360 replaces manual subjectivity with measurable, standards-aligned evaluation.'
        ],
        features: [
            { title: 'Centralized Inspection Workflows', description: 'Standardize incoming, in-process, and finished goods inspections across locations.' },
            { title: 'AI-Based Defect Detection', description: 'Automatically identify surface, packaging, labeling, and visual defects using AI vision models.' },
            { title: 'ISO 2859-1 / AQL Sampling', description: 'Apply standards-based sampling logic for consistent and defensible quality decisions.' },
            { title: 'Automated Accept / Reject Decisions', description: 'System-driven evaluation based on defined defect thresholds and AQL criteria.' },
            { title: 'Supplier & Batch Performance Tracking', description: 'Monitor defect trends, vendor history, and recurring quality issues.' },
            { title: 'Digital Traceability Logs', description: 'Every inspection includes image evidence, timestamps, sampling references, and inspector identification.' }
        ],
        integrationReady: { description: 'Seamlessly integrates with ERP, procurement, and compliance systems via secure APIs.', buttonText: 'API Documentation' },
        enterpriseSecurity: { description: 'Built on secure cloud infrastructure with role-based access control and encrypted data handling.', buttonText: 'Security Overview' }
    },
    'audit360': {
        name: 'Audit360',
        icon: FileCheck,
        logo: '/audit360-logo.webp',
        appUrl: 'https://audit360.companycertification.com',
        tagline: 'Structured audit lifecycle management system for certification bodies, inspection bodies, and accreditation-driven organizations.',
        description: [
            'Audit360 is an enterprise-grade audit management platform designed specifically for certification bodies and regulated assessment organizations. It digitizes the complete audit lifecycle — from application intake and audit planning to reporting, certification decision, and surveillance management.',
            'Built to support standards-based certification frameworks, Audit360 ensures structured workflow control, auditor assignment tracking, evidence documentation, and traceable certification records.'
        ],
        features: [
            { title: 'End-to-End Audit Lifecycle Management', description: 'Manage application review, audit scheduling, execution, reporting, and certification decisions within a centralized system.' },
            { title: 'Auditor Assignment & Competency Tracking', description: 'Track auditor qualifications, scope approvals, availability, and assignment history.' },
            { title: 'Multi-Site & Multi-Standard Support', description: 'Manage audits across multiple client locations and multiple ISO standards simultaneously.' },
            { title: 'Structured Audit Reporting', description: 'Generate standardized audit reports with non-conformance classification and evidence tracking.' },
            { title: 'Surveillance & Recertification Management', description: 'Automate audit cycle planning and monitor certification validity periods.' },
            { title: 'Certification Decision Workflow', description: 'Implement controlled decision-making processes with role-based authorization and documented approvals.' }
        ],
        integrationReady: { description: 'Integrates with compliance platforms, document management systems, and reporting tools via secure APIs.', buttonText: 'API Documentation' },
        enterpriseSecurity: { description: 'Designed for accreditation-aligned environments with secure role-based access control, audit logs, and structured data retention.', buttonText: 'Security Overview' }
    }
};

export default function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = id ? productsData[id] : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="pt-40 pb-24 min-h-screen bg-slate-50 text-center">
                <h2 className="text-2xl font-bold text-slate-900">Product not found</h2>
                <button onClick={() => navigate('/')} className="mt-4 text-cyan-700 hover:underline">Return to Home</button>
            </div>
        );
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button onClick={() => navigate(-1)} className="mb-8 inline-flex items-center text-sm font-bold text-slate-500 hover:text-cyan-700 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
                </button>

                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="p-8 md:p-12 lg:p-16 border-b border-slate-100 bg-slate-950 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/10 blur-[80px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/3"></div>

                        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div>
                                <div className="flex items-center mb-6">
                                    {product.logo ? (
                                        <div className="bg-white p-3 rounded-xl inline-block">
                                            <img
                                                src={product.logo}
                                                alt={`${product.name} Logo`}
                                                className="h-12 w-auto object-contain"
                                                onError={(e) => {
                                                    e.currentTarget.onerror = null;
                                                    e.currentTarget.src = `https://placehold.co/200x60/f8fafc/0e7490?text=Upload+${product.logo.replace('/', '')}`;
                                                }}
                                            />
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center h-16 w-16 rounded-2xl bg-cyan-900/40 text-cyan-400 border border-cyan-700/50">
                                            <product.icon className="h-8 w-8" />
                                        </div>
                                    )}
                                    {!product.logo && <h1 className="ml-6 text-4xl md:text-5xl font-bold tracking-tight">{product.name}</h1>}
                                </div>
                                <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">{product.tagline}</p>
                            </div>
                            <div className="shrink-0 flex flex-col sm:flex-row gap-4">
                                {product.appUrl && (
                                    <a href={product.appUrl} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition-all shadow-[0_0_30px_rgba(45,212,191,0.3)] hover:shadow-[0_0_50px_rgba(45,212,191,0.5)] hover:-translate-y-0.5">
                                        Open App <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                )}
                                <a href="/#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-cyan-700 hover:bg-cyan-600 transition-all shadow-[0_0_20px_rgba(14,116,144,0.3)]">
                                    Request Demo
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2">
                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Platform Overview</h2>
                            <div className="text-lg text-slate-600 leading-relaxed mb-12 space-y-4">
                                {Array.isArray(product.description) ? (
                                    product.description.map((paragraph: string, idx: number) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))
                                ) : (
                                    <p>{product.description}</p>
                                )}
                            </div>

                            <h2 className="text-2xl font-bold text-slate-900 mb-6">Key Capabilities</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {product.features.map((feature: any, idx: number) => (
                                    <div key={idx} className="flex items-start p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                        <CheckCircle2 className="h-6 w-6 text-cyan-600 mr-4 shrink-0 mt-0.5" />
                                        <div>
                                            {typeof feature === 'string' ? (
                                                <span className="text-slate-700 font-medium">{feature}</span>
                                            ) : (
                                                <>
                                                    <h4 className="text-slate-900 font-bold mb-1">{feature.title}</h4>
                                                    <p className="text-slate-600 text-sm">{feature.description}</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 mb-8">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Integration Ready</h3>
                                <p className="text-slate-600 mb-6">
                                    {product.integrationReady?.description || 'Seamlessly connects with your existing enterprise architecture via secure APIs.'}
                                </p>
                                <div className="flex items-center text-cyan-700 font-semibold cursor-pointer hover:text-cyan-800 transition-colors">
                                    <Network className="h-5 w-5 mr-2" /> {product.integrationReady?.buttonText || 'API Documentation'}
                                </div>
                            </div>

                            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-4">Enterprise Security</h3>
                                <p className="text-slate-600 mb-6">
                                    {product.enterpriseSecurity?.description || 'Built on a foundation of zero-trust architecture and continuous compliance monitoring.'}
                                </p>
                                <div className="flex items-center text-cyan-700 font-semibold cursor-pointer hover:text-cyan-800 transition-colors">
                                    <ShieldCheck className="h-5 w-5 mr-2" /> {product.enterpriseSecurity?.buttonText || 'Security Whitepaper'}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
