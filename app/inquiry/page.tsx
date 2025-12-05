'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
import { Orbitron } from 'next/font/google';

export default function InquiryPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        // Simulate API call
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900 pb-20">

            {/* Header */}
            <section className="relative text-white py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/hero.jpg"
                        alt="Contact Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-black tracking-wider mb-4 uppercase">
                        Contact <span className="text-red-500">Us</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-sans">
                        Visit our showroom or send us a message for custom builds, bulk orders, and technical support.
                    </p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Contact Info & Map Card */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 flex flex-col">

                        {/* Info Section */}
                        <div className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                            <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
                                <MapPin className="text-red-500" /> Visit Our Showroom
                            </h2>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-gray-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-bold text-lg">PowerTech Enterprises</p>
                                        <p className="text-gray-300">176, Essen Bldg, Paseo Liang,<br />Malolos, Bulacan</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="text-gray-400 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-300">0932 148 0266</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Mail className="text-gray-400 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-300">sales@powertech.ph</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Clock className="text-gray-400 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="text-gray-300">Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Section */}
                        <div className="flex-1 min-h-[300px] bg-gray-200 relative">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3855.986872584558!2d120.8111522!3d14.847161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339653d7641346e1%3A0xe5a3f33cc0469038!2sPower%20Tech%20Enterprises!5e0!3m2!1sen!2sph!4v1716956276859!5m2!1sen!2sph"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Messenger Direct Action */}
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-10 h-fit flex flex-col justify-center text-center">
                        <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/30">
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-10 h-10 text-white"
                            >
                                <path d="M12 2C6.48 2 2 6.03 2 11c0 2.87 1.69 5.43 4.3 7v3.5l3.83-2.13c.6.17 1.23.26 1.87.26 5.52 0 10-4.03 10-9S17.52 2 12 2zm1.2 13.9l-3.3-3.6-6.4 3.6 7-7.4 3.3 3.6 6.4-3.6-7 7.4z" />
                            </svg>
                        </div>

                        <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Chat with Us</h2>
                        <p className="text-gray-500 mb-8 font-sans text-lg">
                            For fastest response on quotes, stock availability, and technical support, message us directly on Facebook.
                        </p>

                        <a
                            href="https://m.me/powertech.ent.2016"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold font-display uppercase tracking-wider text-lg shadow-lg shadow-blue-600/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3"
                        >
                            Open Messenger
                            <Send size={20} className="rotate-45" />
                        </a>

                        <p className="mt-6 text-sm text-gray-400">
                            Typical reply time: Within 1 hour
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
}
