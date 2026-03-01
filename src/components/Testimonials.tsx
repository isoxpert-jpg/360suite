import { Quote } from 'lucide-react';

export default function Testimonials() {
    const testimonials = [
        { quote: "360Suite has completely transformed how we manage multi-site audits. The automated workflows and centralized risk tracking have reduced our compliance overhead by 40%.", name: "Sarah Jenkins", title: "Director of Quality Assurance", company: "Global Manufacturing Corp" },
        { quote: "As a certification body, we need absolute precision and reliability. Audit360 provides the robust digital infrastructure we require to maintain our accreditation standards globally.", name: "Dr. Marcus Chen", title: "Head of Certification", company: "EuroCert International" },
        { quote: "The AI-assisted defect recognition in Inspect360 caught issues our manual processes missed. It's not just a compliance tool; it's a core operational asset.", name: "Elena Rodriguez", title: "VP of Operations", company: "Apex Logistics" }
    ];

    return (
        <div className="py-24 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Trusted by Industry Leaders</h2>
                    <p className="mt-4 text-lg text-slate-600">See how organizations are transforming their compliance workflows.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, idx) => (
                        <div key={idx} className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative flex flex-col">
                            <Quote className="absolute top-8 right-8 h-10 w-10 text-cyan-700/10" />
                            <p className="text-slate-700 leading-relaxed mb-8 relative z-10 flex-grow">"{testimonial.quote}"</p>
                            <div className="flex items-center mt-auto">
                                <div className="h-12 w-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-800 font-bold text-lg border border-cyan-200">
                                    {testimonial.name.charAt(0)}
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-base font-bold text-slate-900">{testimonial.name}</h4>
                                    <p className="text-sm text-slate-500">{testimonial.title}</p>
                                    <p className="text-sm font-semibold text-cyan-700">{testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
