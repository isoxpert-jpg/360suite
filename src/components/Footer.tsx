import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center mb-6">
                            <Link to="/" className="flex items-center">
                                <img
                                    src="/cci-logo.webp"
                                    alt="CCI Logo"
                                    loading="lazy"
                                    className="h-10 w-auto object-contain bg-white p-1.5 rounded-lg"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = 'https://placehold.co/150x40/f8fafc/0d9488?text=Upload+cci-logo.webp';
                                    }}
                                />
                                <span className="ml-4 text-2xl font-bold text-white tracking-tight">360Suite</span>
                            </Link>
                        </div>
                        <p className="text-base text-slate-400 max-w-md mb-6 leading-relaxed">
                            Enterprise digital infrastructure for inspection, compliance, and certification workflows.
                        </p>
                        <p className="text-sm text-slate-500">
                            Developed by: <a href="https://companycertification.com" className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors">Company Certification International (CCI)</a>
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Corporate Contact</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li className="hover:text-white transition-colors cursor-pointer">
                                124 City Road, London,<br />
                                EC1V 2NX, England.
                            </li>
                            <li className="hover:text-white transition-colors cursor-pointer">+44 745 8937 434</li>
                            <li className="hover:text-white transition-colors cursor-pointer">360suite@companycertification.com</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
                        <ul className="space-y-4 text-slate-400 text-sm mb-8">
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms & Conditions</a></li>
                        </ul>
                        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
                            <div className="flex items-center mb-2">
                                <ShieldCheck className="h-5 w-5 text-cyan-500 mr-2" />
                                <span className="text-white font-bold text-sm">GDPR Compliant</span>
                            </div>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                We are committed to data privacy and security. Our platform and processes are fully compliant with the General Data Protection Regulation (GDPR).
                            </p>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-800/50 text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
                    <p>&copy; {new Date().getFullYear()} 360Suite. Developed by Company Certification International. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
