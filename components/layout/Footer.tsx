'use client';

import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail, ArrowRight, Monitor, Cpu } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative bg-[#111] text-gray-300 pt-20 pb-10 overflow-hidden">
            {/* PC Gamer Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#1a0505] to-gray-900"></div>
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-red-600 via-white to-red-600 opacity-50"></div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 opacity-5">
                <Monitor size={400} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-800 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-red-900/50">
                                PT
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black text-white tracking-tighter uppercase">PowerTech</span>
                                <span className="text-[10px] text-red-500 font-bold uppercase tracking-[0.2em]">Enterprise Solutions</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Your ultimate destination for premium PC parts, custom builds, and professional workstations. We build dreams, one component at a time.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-red-600 hover:border-red-500 hover:text-white transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Catalog */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <Cpu size={18} className="text-red-500" /> Catalog
                        </h3>
                        <ul className="space-y-3">
                            {['Components', 'Laptops', 'Peripherals', 'Desktops', 'Accessories'].map((item) => (
                                <li key={item}>
                                    <Link href="/products" className="flex items-center gap-2 hover:text-red-500 transition-colors group">
                                        <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-red-500" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                            <Monitor size={18} className="text-red-500" /> Services
                        </h3>
                        <ul className="space-y-3">
                            {['Custom PC Building', 'Laptop Repair', 'Data Recovery', 'System Upgrades', 'Corporate Supply'].map((item) => (
                                <li key={item}>
                                    <Link href="/services" className="hover:text-red-500 transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4 group">
                                <MapPin className="mt-1 text-red-600 group-hover:text-white transition-colors" size={20} />
                                <span className="group-hover:text-white transition-colors">
                                    176, Essen Bldg, Paseo Liang,<br />Malolos, Bulacan
                                </span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <Phone className="text-red-600 group-hover:text-white transition-colors" size={20} />
                                <span className="group-hover:text-white transition-colors">0932 148 0266</span>
                            </div>
                            <div className="flex items-center gap-4 group">
                                <Mail className="text-red-600 group-hover:text-white transition-colors" size={20} />
                                <span className="group-hover:text-white transition-colors">tobyzalas19@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                    <p>© 2025 PowerTech Enterprise Solutions. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                        <Link href="#" className="hover:text-white">Warranty Info</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
