import { useState, FormEvent } from 'react';

const WEB3FORMS_KEY = 'cb2f27ff-2336-41fd-b729-705d5e130069';

export default function Contact() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');
        setErrorMsg('');

        const form = e.currentTarget;
        const data = new FormData(form);
        data.append('access_key', WEB3FORMS_KEY);
        data.append('subject', `360Suite Demo Request from ${data.get('name')}`);
        data.append('from_name', '360Suite Website');

        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: data,
            });
            const json = await res.json();
            if (json.success) {
                setStatus('success');
                form.reset();
            } else {
                setStatus('error');
                setErrorMsg(json.message || 'Something went wrong. Please try again.');
            }
        } catch {
            setStatus('error');
            setErrorMsg('Network error. Please check your connection and try again.');
        }
    }

    return (
        <div id="contact" className="py-24 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Schedule a Platform Demonstration</h2>
                    <p className="mt-4 text-lg text-slate-600">Connect with our enterprise solutions team.</p>
                </div>

                {status === 'success' ? (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-12 text-center">
                        <div className="text-5xl mb-4">✅</div>
                        <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                        <p className="text-green-700 text-lg">Your demo request has been submitted successfully. Our team will contact you shortly.</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="mt-6 px-6 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-medium"
                        >
                            Submit Another Request
                        </button>
                    </div>
                ) : (
                    <form className="space-y-6 bg-slate-50 p-8 rounded-xl border border-slate-200" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                                <input type="text" id="name" name="name" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-4 py-2 border bg-white" />
                            </div>
                            <div>
                                <label htmlFor="company" className="block text-sm font-medium text-slate-700">Company Name</label>
                                <input type="text" id="company" name="company" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-4 py-2 border bg-white" />
                            </div>
                            <div>
                                <label htmlFor="industry" className="block text-sm font-medium text-slate-700">Industry</label>
                                <input type="text" id="industry" name="industry" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-4 py-2 border bg-white" />
                            </div>
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-slate-700">Country</label>
                                <input type="text" id="country" name="country" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-4 py-2 border bg-white" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Corporate Email</label>
                                <input type="email" id="email" name="email" required className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-4 py-2 border bg-white" />
                            </div>
                            <div>
                                <label htmlFor="whatsapp" className="block text-sm font-medium text-slate-700">WhatsApp / Contact Number</label>
                                <input type="tel" id="whatsapp" name="whatsapp" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-4 py-2 border bg-white" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="platform" className="block text-sm font-medium text-slate-700">Interested Platform</label>
                            <select id="platform" name="platform" className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-4 py-2 border bg-white">
                                <option>Entire 360Suite</option>
                                <option>Inspect360</option>
                                <option>Compliance360</option>
                                <option>QC360</option>
                                <option>Audit360</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-slate-700">Message / Specific Requirements</label>
                            <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-slate-500 focus:ring-slate-500 sm:text-sm px-4 py-2 border bg-white"></textarea>
                        </div>

                        {status === 'error' && (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                                ⚠️ {errorMsg}
                            </div>
                        )}

                        <div>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full flex justify-center items-center gap-2 py-4 px-4 border border-transparent rounded-xl shadow-sm text-base font-bold text-white bg-cyan-700 hover:bg-cyan-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <>
                                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    'Request Consultation'
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}
