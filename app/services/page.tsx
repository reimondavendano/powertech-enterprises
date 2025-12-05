'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Cpu, Wrench, Shield, HardDrive, Monitor, Printer, Wifi, Zap, Activity, Laptop, Wind, ArrowRight, Check
} from 'lucide-react';
import { mockServices } from '@/lib/mock-data';

// Map icon strings to components
const iconMap: Record<string, any> = {
    Cpu, Wrench, Shield, HardDrive, Monitor, Printer, Wifi, Zap, Activity, Laptop, Wind
};

export default function ServicesPage() {
    const [activeCategory, setActiveCategory] = useState<string>('All');

    const categories = ['All', ...Array.from(new Set(mockServices.map(s => s.category)))];

    const filteredServices = activeCategory === 'All'
        ? mockServices
        : mockServices.filter(s => s.category === activeCategory);

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900 pb-20">

            {/* Hero Section */}
            <section className="relative text-white py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/hero.jpg"
                        alt="Services Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-black tracking-wider mb-4 uppercase">
                        Professional <span className="text-red-500">Services</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans">
                        From custom PC builds to intricate board-level repairs, our certified technicians are ready to optimize your setup.
                    </p>
                </div>
            </section>

            {/* Category Filter - Control Panel Style */}
            <section className="sticky top-20 z-40 bg-gray-50/95 backdrop-blur-md border-y border-gray-200 py-6 mb-8 shadow-sm transition-all">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-lg text-sm font-bold font-display uppercase tracking-wider border-2 transition-all duration-300 ${activeCategory === cat
                                        ? 'bg-red-600 border-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)] transform scale-105'
                                        : 'bg-white border-gray-200 text-gray-500 hover:border-red-400 hover:text-red-500 hover:bg-red-50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredServices.map((service) => {
                        const IconComponent = iconMap[service.icon] || Wrench;

                        return (
                            <div key={service.id} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-red-200 transition-all duration-300 group flex flex-col h-full">

                                {/* Header */}
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-14 h-14 bg-red-50 text-red-600 rounded-xl flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                                        <IconComponent size={28} />
                                    </div>
                                    <span className="text-xs font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded uppercase tracking-wider">
                                        {service.turnaround}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                                        {service.name}
                                    </h3>
                                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                                        {service.description}
                                    </p>

                                    <div className="space-y-3 mb-8">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                                                <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Footer Action */}
                                <div className="mt-auto pt-6 border-t border-gray-50">
                                    <a
                                        href="https://m.me/powertech.ent.2016"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between text-red-600 font-bold uppercase tracking-wide text-sm hover:translate-x-1 transition-transform"
                                    >
                                        <span>Book Service</span>
                                        <ArrowRight size={18} />
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-gradient-to-br from-[#1F2937] to-gray-900 rounded-3xl p-12 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-display font-bold text-white mb-4">Need a Custom Service?</h2>
                        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                            Don't see what you're looking for? Contact our support team for specialized repairs and enterprise solutions.
                        </p>
                        <a
                            href="https://m.me/powertech.ent.2016"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold font-display uppercase tracking-wide transition-all shadow-lg shadow-red-600/20 inline-block"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}
