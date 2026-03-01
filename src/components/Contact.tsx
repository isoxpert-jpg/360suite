export default function Contact() {
    return (
        <div id="contact" className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Schedule a Platform Demonstration</h2>
                    <p className="mt-4 text-lg text-slate-600">Connect with our enterprise solutions team.</p>
                </div>
                <form className="space-y-6 bg-slate-50 p-8 rounded-xl border border-slate-200" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                            <input type="text" id="name" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-4 py-2 border bg-white" />
                        </div>
                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company Name</label>
                            <input type="text" id="company" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-4 py-2 border bg-white" />
                        </div>
                        <div>
                            <label htmlFor="industry" className="block text-sm font-medium text-slate-700">Industry</label>
                            <input type="text" id="industry" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-4 py-2 border bg-white" />
                        </div>
                        <div>
                            <label htmlFor="country" className="block text-sm font-medium text-slate-700">Country</label>
                            <input type="text" id="country" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-4 py-2 border bg-white" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-slate-700">Corporate Email</label>
                            <input type="email" id="email" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-4 py-2 border bg-white" />
                        </div>
                        <div>
                            <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700">WhatsApp / Contact Number</label>
                            <input type="tel" id="whatsapp" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-4 py-2 border bg-white" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="platform" className="block text-sm font-medium text-slate-700">Interested Platform</label>
                        <select id="platform" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-4 py-2 border bg-white">
                            <option>Entire 360Suite</option>
                            <option>Inspect360</option>
                            <option>Compliance360</option>
                            <option>QC360</option>
                            <option>Audit360</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message / Specific Requirements</label>
                        <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-4 py-2 border bg-white"></textarea>
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center py-4 px-4 border border-transparent rounded-xl shadow-sm text-base font-bold text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 transition-colors">
                            Request Consultation
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
