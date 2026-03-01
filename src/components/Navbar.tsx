import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';

export default function Navbar({ toggleTheme, isDarkMode }: { toggleTheme?: () => void, isDarkMode?: boolean }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="fixed w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <img
                                src="/cci-logo.webp"
                                alt="CCI Logo"
                                className="h-10 w-auto object-contain dark:bg-white dark:p-1 dark:rounded-md"
                                onError={(e) => {
                                    e.currentTarget.onerror = null;
                                    e.currentTarget.src = 'https://placehold.co/200x60/f8fafc/475569?text=Upload+cci-logo.webp';
                                }}
                            />
                            <span className="ml-3 text-2xl font-bold text-slate-900 dark:text-white tracking-tight">360Suite</span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/#about" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">About</a>
                        <a href="/#products" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">Products</a>
                        <a href="/#industries" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">Industries</a>
                        <a href="/#assurance" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors">Assurance</a>
                        {toggleTheme && (
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                                aria-label="Toggle theme"
                            >
                                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </button>
                        )}
                        <a href="/#contact" className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium rounded-lg text-white bg-cyan-700 hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-500 transition-all shadow-md hover:shadow-lg">
                            Request Demo
                        </a>
                    </div>
                    <div className="flex items-center md:hidden space-x-4">
                        {toggleTheme && (
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                            >
                                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                            </button>
                        )}
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg dark:shadow-none">
                        <a href="/#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900">About</a>
                        <a href="/#products" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900">Products</a>
                        <a href="/#industries" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-900">Industries</a>
                        <a href="/#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-base font-medium text-cyan-700 dark:text-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-900">Request Demo</a>
                    </div>
                </div>
            )}
        </nav>
    );
}
