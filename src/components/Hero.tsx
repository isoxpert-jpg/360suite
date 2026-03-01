import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative bg-[#020617] pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden min-h-[90vh] flex items-center">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
                <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-cyan-900/20 via-teal-900/10 to-transparent opacity-50 blur-3xl"></div>
                <motion.div
                    animate={{ y: [0, -40, 0], x: [0, 30, 0], scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ y: [0, 50, 0], x: [0, -40, 0], scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-teal-600/20 rounded-full blur-[140px]"
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/30 text-cyan-300 text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                >
                    <span className="relative flex h-2.5 w-2.5 mr-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                    </span>
                    Enterprise-Grade Security & Compliance
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                    className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 max-w-5xl mx-auto leading-[1.15]"
                >
                    Digital Infrastructure for <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 drop-shadow-sm">Inspection & Certification</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="mt-6 text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                >
                    A portfolio of secure, scalable platforms designed for regulated industries and global certification bodies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row justify-center gap-6 items-center"
                >
                    <a href="/#products" className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 transition-all shadow-[0_0_40px_rgba(45,212,191,0.3)] hover:shadow-[0_0_60px_rgba(45,212,191,0.5)] hover:-translate-y-1 overflow-hidden w-full sm:w-auto">
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                        <span className="relative flex items-center">
                            Explore Solutions
                            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                        </span>
                    </a>
                    <a href="/#contact" className="group inline-flex items-center justify-center px-8 py-4 border border-slate-600 text-lg font-bold rounded-xl text-white bg-slate-900/50 hover:bg-slate-800 hover:border-cyan-500/50 backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] w-full sm:w-auto">
                        Request Consultation
                    </a>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
        </div>
    );
}
