import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  Search,
  FileCheck,
  Activity,
  Globe,
  Server,
  Lock,
  Cpu,
  Network,
  Building2,
  Factory,
  HardHat,
  Droplets,
  ThermometerSnowflake,
  Truck,
  Award,
  CheckCircle2,
  FileText,
  Presentation,
  PlayCircle,
  ArrowRight,
  ExternalLink,
  ArrowLeft,
  Menu,
  X,
  Quote,
  Moon,
  Sun
} from 'lucide-react';

function Navbar({ toggleTheme, isDarkMode }: { toggleTheme?: () => void, isDarkMode?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/cci-logo.png"
                alt="CCI Logo"
                className="h-10 w-auto object-contain dark:bg-white dark:p-1 dark:rounded-md"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = 'https://placehold.co/200x60/f8fafc/475569?text=Upload+cci-logo.png';
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

function Hero() {
  return (
    <div className="relative bg-[#020617] pt-32 pb-20 lg:pt-56 lg:pb-40 overflow-hidden min-h-[90vh] flex items-center">
      {/* Dynamic Animated Background */}
      <div className="absolute inset-0 z-0">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

        {/* Moving Gradient Background */}
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-cyan-900/20 via-teal-900/10 to-transparent opacity-50 blur-3xl"></div>

        {/* Floating Glowing Orbs with more complex animation */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            y: [0, 50, 0],
            x: [0, -40, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-teal-600/20 rounded-full blur-[140px]"
        />

        {/* Overlay Image with lower opacity for a cleaner look */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-screen"></div>
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

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none"></div>
    </div>
  );
}

function About() {
  return (
    <div id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-sm font-bold text-cyan-700 tracking-widest uppercase mb-6">About 360Suite</h2>
        <p className="text-2xl md:text-4xl font-medium text-slate-900 leading-tight">
          Developed by ISO experts and engineered for regulated environments, 360Suite delivers a cloud-native SaaS architecture built for security, scalability, and operational precision.
        </p>
        <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
          Our multi-site capable infrastructure provides organizations with the robust digital foundation required to manage complex compliance, inspection, and certification workflows globally. With seamless API-ready integration, 360Suite bridges the gap between regulatory requirements and digital transformation.
        </p>
      </div>
    </div>
  );
}

function Products() {
  const products = [
    {
      id: 'inspect360',
      name: 'Inspect360',
      icon: Search,
      logo: '/inspect360-logo.png',
      positioning: 'Digitize field inspections, standardize evaluation workflows, and maintain structured audit-ready records across multi-site operations.',
      capabilities: [
        'Configurable Inspection Templates',
        'Multi-Site Inspection Management',
        'Real-Time Reporting & Dashboards'
      ]
    },
    {
      id: 'compliance360',
      name: 'Compliance360',
      icon: ShieldCheck,
      logo: '/compliance360-logo.png',
      positioning: 'Centralize ISO compliance requirements, manage risk registers, control documentation, and maintain continuous audit readiness across your organization.',
      capabilities: [
        'Centralized Document Control',
        'Risk & Opportunity Management',
        'Corrective & Preventive Action (CAPA)'
      ]
    },
    {
      id: 'qc360',
      name: 'QC360',
      icon: Activity,
      logo: '/qc360-logo.jpg',
      positioning: 'AI-powered quality inspection platform for defect detection, standards-aligned sampling, and full digital traceability.',
      capabilities: [
        'Centralized Inspection Workflows',
        'AI-Based Defect Detection',
        'ISO 2859-1 / AQL Sampling'
      ]
    },
    {
      id: 'audit360',
      name: 'Audit360',
      icon: FileCheck,
      logo: '/audit360-logo.png',
      positioning: 'Structured audit lifecycle management system for certification bodies, inspection bodies, and accreditation-driven organizations.',
      capabilities: [
        'End-to-End Audit Lifecycle Management',
        'Auditor Assignment & Competency Tracking',
        'Multi-Site & Multi-Standard Support'
      ]
    }
  ];

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
                    className="h-12 w-auto object-contain"
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

function Industries() {
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

function RegionalPresence() {
  const regions = ['USA', 'UK', 'EU', 'GCC', 'Pakistan', 'Oman'];

  return (
    <div className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/20 blur-[100px] rounded-full pointer-events-none"></div>
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern-dark" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="rgba(255,255,255,0.1)" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-dark)" />
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
          <Globe className="h-8 w-8 text-cyan-400" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Global Reach. Regional Expertise.</h2>
        <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12">
          Operating across key global markets, 360Suite provides localized support and compliance alignment for enterprises and certification bodies worldwide.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {regions.map((region) => (
            <span key={region} className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-sm font-semibold text-slate-200 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
              {region}
            </span>
          ))}
        </div>
        <div className="pt-12 border-t border-white/10">
          <p className="text-sm text-slate-500 mb-8 uppercase tracking-widest font-bold">Regional Partners</p>
          <div className="flex justify-center space-x-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 mb-12">
            <div className="h-10 w-32 bg-white/20 rounded-lg"></div>
            <div className="h-10 w-40 bg-white/20 rounded-lg"></div>
            <div className="h-10 w-32 bg-white/20 rounded-lg"></div>
            <div className="h-10 w-36 bg-white/20 rounded-lg"></div>
          </div>
          <a href="/#contact" className="inline-flex items-center justify-center px-8 py-4 border border-cyan-600/50 text-base font-medium rounded-lg text-cyan-400 hover:bg-cyan-900/30 transition-colors">
            Become a Regional Partner
          </a>
        </div>
      </div>
    </div>
  );
}

function Assurance() {
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

function Testimonials() {
  const testimonials = [
    {
      quote: "360Suite has completely transformed how we manage multi-site audits. The automated workflows and centralized risk tracking have reduced our compliance overhead by 40%.",
      name: "Sarah Jenkins",
      title: "Director of Quality Assurance",
      company: "Global Manufacturing Corp"
    },
    {
      quote: "As a certification body, we need absolute precision and reliability. Audit360 provides the robust digital infrastructure we require to maintain our accreditation standards globally.",
      name: "Dr. Marcus Chen",
      title: "Head of Certification",
      company: "EuroCert International"
    },
    {
      quote: "The AI-assisted defect recognition in Inspect360 caught issues our manual processes missed. It's not just a compliance tool; it's a core operational asset.",
      name: "Elena Rodriguez",
      title: "VP of Operations",
      company: "Apex Logistics"
    }
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

function Stats() {
  const stats = [
    { value: '120+', label: 'ISO Systems Implemented' },
    { value: '350+', label: 'Compliance Projects Supervised' },
    { value: 'Global', label: 'Multi-Country Operations' },
    { value: '100%', label: 'Cloud-Based SaaS Architecture' },
    { value: 'AI', label: 'Enabled Inspection Technology' },
    { value: '6+', label: 'Multi-Industry Coverage' },
  ];

  return (
    <div className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/40 to-slate-900/40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-4">
              <div className="text-4xl font-extrabold mb-2 text-cyan-400">{stat.value}</div>
              <div className="text-sm font-semibold text-slate-300 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Resources() {
  const resources = [
    {
      title: 'Platform Brochure',
      desc: 'Comprehensive overview of the 360Suite ecosystem, technical specifications, and deployment models.',
      icon: FileText,
      action: 'Download Brochure'
    },
    {
      title: 'Executive Slide Deck',
      desc: 'High-level presentation detailing ROI, compliance alignment, and strategic advantages for decision-makers.',
      icon: Presentation,
      action: 'Download Deck'
    },
    {
      title: 'Introduction Video',
      desc: 'A technical walkthrough of the 360Suite architecture and core platform capabilities.',
      icon: PlayCircle,
      action: 'Watch Video'
    }
  ];

  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Resources & Downloads</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((res) => (
            <div key={res.title} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col hover:border-cyan-300 hover:shadow-md transition-all">
              <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 border border-slate-100">
                <res.icon className="h-7 w-7 text-cyan-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{res.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">{res.desc}</p>
              <button className="inline-flex items-center justify-center w-full px-4 py-3 border-2 border-slate-100 text-sm font-bold rounded-xl text-slate-700 bg-white hover:border-cyan-600 hover:text-cyan-700 transition-colors">
                {res.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Contact() {
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

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <Link to="/" className="flex items-center">
                <img
                  src="/cci-logo.png"
                  alt="CCI Logo"
                  className="h-10 w-auto object-contain bg-white p-1.5 rounded-lg"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://placehold.co/150x40/f8fafc/0d9488?text=Upload+cci-logo.png';
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

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const productsData: Record<string, any> = {
    'inspect360': {
      name: 'Inspect360',
      icon: Search,
      logo: '/inspect360-logo.png',
      appUrl: 'https://inspect360.companycertification.com',
      tagline: 'Digitize field inspections, standardize evaluation workflows, and maintain structured audit-ready records across multi-site operations.',
      description: [
        'Inspect360 is a structured inspection management platform designed to standardize operational inspections across industries. It replaces paper-based checklists and fragmented reporting with centralized digital workflows, real-time analytics, and traceable inspection records.',
        'Built for regulated environments, Inspect360 ensures consistent evaluation criteria, structured reporting, and accountability across inspectors, locations, and operational units.'
      ],
      features: [
        {
          title: 'Configurable Inspection Templates',
          description: 'Create structured inspection checklists aligned with internal standards, regulatory requirements, or industry frameworks.'
        },
        {
          title: 'Multi-Site Inspection Management',
          description: 'Manage inspections across multiple facilities, branches, or operational locations from a centralized dashboard.'
        },
        {
          title: 'Real-Time Reporting & Dashboards',
          description: 'Access inspection summaries, non-conformance trends, and performance metrics instantly.'
        },
        {
          title: 'Digital Evidence Capture',
          description: 'Attach images, notes, and structured observations directly to inspection records.'
        },
        {
          title: 'Non-Conformance Tracking',
          description: 'Record findings, assign corrective actions, and monitor resolution progress.'
        },
        {
          title: 'Inspector Accountability & Traceability',
          description: 'Maintain timestamped logs, inspector identification, and location-based tracking for every inspection activity.'
        }
      ],
      integrationReady: {
        description: 'Seamlessly integrates with compliance systems, ERP platforms, and reporting tools via secure API architecture.',
        buttonText: 'API Documentation'
      },
      enterpriseSecurity: {
        description: 'Built on secure cloud infrastructure with role-based access control and audit-ready data retention.',
        buttonText: 'Security Overview'
      }
    },
    'compliance360': {
      name: 'Compliance360',
      icon: ShieldCheck,
      logo: '/compliance360-logo.png',
      appUrl: 'https://compliance360.companycertification.com',
      tagline: 'Centralize ISO compliance requirements, manage risk registers, control documentation, and maintain continuous audit readiness across your organization.',
      description: [
        'Compliance360 is an enterprise-grade compliance management platform designed to support organizations operating under ISO standards and regulatory frameworks. It centralizes documentation, risk management, corrective actions, and internal audit tracking within a structured digital environment.',
        'Built for regulated industries and multi-site operations, Compliance360 replaces fragmented spreadsheets and manual tracking with controlled workflows, traceable records, and real-time compliance visibility.'
      ],
      features: [
        {
          title: 'Centralized Document Control',
          description: 'Manage policies, procedures, records, and version histories within a controlled, role-based environment.'
        },
        {
          title: 'Risk & Opportunity Management',
          description: 'Maintain structured risk registers aligned with ISO standards and organizational objectives.'
        },
        {
          title: 'Corrective & Preventive Action (CAPA)',
          description: 'Track non-conformances, assign corrective actions, and monitor resolution progress.'
        },
        {
          title: 'Internal Audit Management',
          description: 'Plan, execute, and document internal audits with standardized reporting templates.'
        },
        {
          title: 'Compliance Dashboards',
          description: 'Monitor compliance status, open actions, and risk exposure through real-time analytics.'
        },
        {
          title: 'Multi-Site Compliance Oversight',
          description: 'Maintain centralized control over compliance activities across multiple facilities or operational units.'
        }
      ],
      integrationReady: {
        description: 'Seamlessly integrates with inspection systems, audit platforms, and enterprise tools through secure API architecture.',
        buttonText: 'API Documentation'
      },
      enterpriseSecurity: {
        description: 'Built on secure cloud infrastructure with role-based access control, encrypted data storage, and audit-ready record retention.',
        buttonText: 'Security Overview'
      }
    },
    'qc360': {
      name: 'QC360',
      icon: Activity,
      logo: '/qc360-logo.jpg',
      appUrl: 'https://qc360.companycertification.com',
      tagline: 'AI-powered quality inspection platform for defect detection, standards-aligned sampling, and full digital traceability across incoming, in-process, and finished goods inspections.',
      description: [
        'QC360 is an intelligent quality control platform designed to digitize and standardize visual inspection workflows. It combines structured sampling methodologies, AI-based defect detection, and centralized inspection records to ensure consistent, audit-ready quality decisions.',
        'Built for regulated industries, QC360 replaces manual subjectivity with measurable, standards-aligned evaluation.'
      ],
      features: [
        {
          title: 'Centralized Inspection Workflows',
          description: 'Standardize incoming, in-process, and finished goods inspections across locations.'
        },
        {
          title: 'AI-Based Defect Detection',
          description: 'Automatically identify surface, packaging, labeling, and visual defects using AI vision models.'
        },
        {
          title: 'ISO 2859-1 / AQL Sampling',
          description: 'Apply standards-based sampling logic for consistent and defensible quality decisions.'
        },
        {
          title: 'Automated Accept / Reject Decisions',
          description: 'System-driven evaluation based on defined defect thresholds and AQL criteria.'
        },
        {
          title: 'Supplier & Batch Performance Tracking',
          description: 'Monitor defect trends, vendor history, and recurring quality issues.'
        },
        {
          title: 'Digital Traceability Logs',
          description: 'Every inspection includes image evidence, timestamps, sampling references, and inspector identification.'
        }
      ],
      integrationReady: {
        description: 'Seamlessly integrates with ERP, procurement, and compliance systems via secure APIs.',
        buttonText: 'API Documentation'
      },
      enterpriseSecurity: {
        description: 'Built on secure cloud infrastructure with role-based access control and encrypted data handling.',
        buttonText: 'Security Overview'
      }
    },
    'audit360': {
      name: 'Audit360',
      icon: FileCheck,
      logo: '/audit360-logo.png',
      appUrl: 'https://audit360.companycertification.com',
      tagline: 'Structured audit lifecycle management system for certification bodies, inspection bodies, and accreditation-driven organizations.',
      description: [
        'Audit360 is an enterprise-grade audit management platform designed specifically for certification bodies and regulated assessment organizations. It digitizes the complete audit lifecycle — from application intake and audit planning to reporting, certification decision, and surveillance management.',
        'Built to support standards-based certification frameworks, Audit360 ensures structured workflow control, auditor assignment tracking, evidence documentation, and traceable certification records.'
      ],
      features: [
        {
          title: 'End-to-End Audit Lifecycle Management',
          description: 'Manage application review, audit scheduling, execution, reporting, and certification decisions within a centralized system.'
        },
        {
          title: 'Auditor Assignment & Competency Tracking',
          description: 'Track auditor qualifications, scope approvals, availability, and assignment history.'
        },
        {
          title: 'Multi-Site & Multi-Standard Support',
          description: 'Manage audits across multiple client locations and multiple ISO standards simultaneously.'
        },
        {
          title: 'Structured Audit Reporting',
          description: 'Generate standardized audit reports with non-conformance classification and evidence tracking.'
        },
        {
          title: 'Surveillance & Recertification Management',
          description: 'Automate audit cycle planning and monitor certification validity periods.'
        },
        {
          title: 'Certification Decision Workflow',
          description: 'Implement controlled decision-making processes with role-based authorization and documented approvals.'
        }
      ],
      integrationReady: {
        description: 'Integrates with compliance platforms, document management systems, and reporting tools via secure APIs.',
        buttonText: 'API Documentation'
      },
      enterpriseSecurity: {
        description: 'Designed for accreditation-aligned environments with secure role-based access control, audit logs, and structured data retention.',
        buttonText: 'Security Overview'
      }
    }
  };

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

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Products />
      <Industries />
      <RegionalPresence />
      <Assurance />
      <Testimonials />
      <Stats />
      <Resources />
      <Contact />
    </>
  );
}

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference on load
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-slate-900 font-sans text-slate-900 dark:text-slate-100 selection:bg-slate-200 dark:selection:bg-cyan-900 transition-colors duration-300">
        <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
