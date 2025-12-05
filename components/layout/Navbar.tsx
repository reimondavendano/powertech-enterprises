'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Search } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [scrolled, setScrolled] = useState(false);

    // Handle Scroll for Size Transition only (Background is constant)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Products', href: '/products' },
        { name: 'Build PC', href: '/build-pc' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/inquiry' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? 'bg-gradient-to-r from-gray-900 via-red-900 to-black shadow-lg border-b border-white/10 py-2'
                    : 'bg-gradient-to-r from-gray-900/95 via-red-900/95 to-black/95 py-4 backdrop-blur-sm'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className={`relative transition-all duration-300 bg-white rounded-lg overflow-hidden group-hover:scale-110 shadow-lg shadow-red-900/50 p-2 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'}`}>
                                <Image
                                    src="/assets/logo.jpg"
                                    alt="PowerTech Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className={`font-display font-bold text-white tracking-widest group-hover:text-red-500 transition-colors uppercase ${scrolled ? 'text-xl' : 'text-2xl'}`}>
                                    PowerTech
                                </span>
                                <span className={`text-[10px] text-red-500 font-bold uppercase tracking-[0.2em] ${scrolled ? 'hidden' : 'block'}`}>
                                    Enterprises
                                </span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-4 py-2 text-sm font-medium font-sans text-gray-200 hover:text-white hover:bg-white/10 rounded-md transition-colors uppercase tracking-wide shadow-sm"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Search & Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Search Bar */}
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-4 w-4 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                            </div>
                            <input
                                type="text"
                                className={`block w-64 pl-10 pr-3 py-2 border rounded-full leading-5 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 sm:text-sm transition-all font-sans ${scrolled ? 'bg-gray-900/50 border-gray-700' : 'bg-black/40 border-white/10 backdrop-blur-sm'}`}
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Inquire Button - Messenger Link */}
                        <a
                            href="https://m.me/powertech.ent.2016"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-bold font-display rounded-full shadow-lg hover:shadow-red-500/30 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
                        >
                            Inquire Now
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/10 focus:outline-none"
                        >
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-gradient-to-b from-gray-900 to-black border-t border-gray-800 absolute w-full shadow-xl">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium font-sans text-gray-300 hover:text-white hover:bg-gray-800 uppercase"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 px-3">
                            <input
                                type="text"
                                className="block w-full pl-3 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-gray-900 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 sm:text-sm font-sans"
                                placeholder="Search products..."
                            />
                        </div>
                        <div className="px-3 pb-2 pt-2">
                            <a
                                href="https://m.me/powertech.ent.2016"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full text-center px-4 py-3 bg-red-600 rounded-md text-white font-bold uppercase tracking-wide"
                            >
                                Inquire Now
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
