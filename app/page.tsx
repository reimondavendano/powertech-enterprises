'use client';

import Link from 'next/link';
import { ArrowRight, Cpu, Laptop, Mouse, Wrench, Shield, Zap, TrendingUp, Users, ChevronRight, Star, Package, Headphones, Monitor, Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900">

      {/* Hero Section */}
      <section className="relative bg-[#1F2937] text-white overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero.jpg"
            alt="Gaming PC Background"
            className="w-full h-full object-cover"
          />
          {/* Semi-transparent dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
          {/* Subtle gradient at the bottom */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#1F2937] to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full backdrop-blur-md mb-8 animate-fade-in shadow-xl">
              <Sparkles size={16} className="text-red-400" />
              <span className="text-sm font-medium font-sans text-white shadow-black drop-shadow-md">Trusted by 10,000+ PC Builders</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-display font-black tracking-wider leading-tight mb-6 uppercase drop-shadow-2xl text-white py-2">
              Build Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 drop-shadow-sm filter brightness-125">
                Dream Machine
              </span>
            </h1>

            <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl font-sans drop-shadow-md font-medium">
              Premium computer parts, gaming laptops, and professional services.
              Experience the ultimate performance with PowerTech Enterprise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/build-pc"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold font-display tracking-wide text-lg transition-all shadow-xl shadow-red-900/40 hover:-translate-y-1 flex items-center justify-center gap-2 border border-red-500/50"
              >
                Start Building
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/products"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl font-bold font-display tracking-wide text-lg transition-all backdrop-blur-md flex items-center justify-center gap-2 shadow-lg"
              >
                Browse Catalog
                <ChevronRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/10 backdrop-blur-md bg-black/30 rounded-2xl p-6 shadow-2xl border-white/5">
              <div>
                <div className="text-3xl font-bold font-display text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">500+</div>
                <div className="text-sm text-gray-300 font-sans uppercase font-bold tracking-wide">Premium Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-display text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">24/7</div>
                <div className="text-sm text-gray-300 font-sans uppercase font-bold tracking-wide">Expert Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-display text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">100%</div>
                <div className="text-sm text-gray-300 font-sans uppercase font-bold tracking-wide">Authentic Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle Tech Pattern Background */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1F2937 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold tracking-wider uppercase text-sm">Our Catalog</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Shop by Category</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for your perfect setup, from core components to complete systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1: Components */}
            <Link href="/products?category=components" className="group block">
              <div className="h-full bg-gray-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-full -mr-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform"></div>
                <div className="w-16 h-16 bg-white shadow-sm text-red-600 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:-translate-y-2 transition-transform">
                  <Cpu size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Components</h3>
                <p className="text-gray-600 mb-6">Processors, Motherboards, GPUs, and core parts.</p>
                <span className="inline-flex items-center gap-2 text-red-600 font-bold group-hover:gap-3 transition-all">
                  Browse Parts <ArrowRight size={18} />
                </span>
              </div>
            </Link>

            {/* Card 2: Laptops */}
            <Link href="/products?category=laptops" className="group block">
              <div className="h-full bg-gray-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-full -mr-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform"></div>
                <div className="w-16 h-16 bg-white shadow-sm text-blue-600 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:-translate-y-2 transition-transform">
                  <Laptop size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Laptops</h3>
                <p className="text-gray-600 mb-6">Gaming notebooks, Ultrabooks, and MacBooks.</p>
                <span className="inline-flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all">
                  View Laptops <ArrowRight size={18} />
                </span>
              </div>
            </Link>

            {/* Card 3: Peripherals */}
            <Link href="/products?category=peripherals" className="group block">
              <div className="h-full bg-gray-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-bl-full -mr-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform"></div>
                <div className="w-16 h-16 bg-white shadow-sm text-purple-600 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:-translate-y-2 transition-transform">
                  <Mouse size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Peripherals</h3>
                <p className="text-gray-600 mb-6">Mice, Keyboards, Monitors, and Headsets.</p>
                <span className="inline-flex items-center gap-2 text-purple-600 font-bold group-hover:gap-3 transition-all">
                  Shop Gear <ArrowRight size={18} />
                </span>
              </div>
            </Link>

            {/* Card 4: Desktops */}
            <Link href="/products?category=desktops" className="group block">
              <div className="h-full bg-gray-50 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-bl-full -mr-16 -mt-16 opacity-50 group-hover:scale-110 transition-transform"></div>
                <div className="w-16 h-16 bg-white shadow-sm text-green-600 rounded-2xl flex items-center justify-center mb-6 relative z-10 group-hover:-translate-y-2 transition-transform">
                  <Monitor size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Desktops</h3>
                <p className="text-gray-600 mb-6">Pre-built Gaming PCs and Workstations.</p>
                <span className="inline-flex items-center gap-2 text-green-600 font-bold group-hover:gap-3 transition-all">
                  View Systems <ArrowRight size={18} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-red-600 font-bold tracking-wider uppercase text-sm">Trending Now</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Featured Products</h2>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-red-600 font-bold hover:text-red-700 transition-colors">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'RTX 4070 Ti', brand: 'NVIDIA', price: 45999, image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=500&auto=format&fit=crop' },
              { name: 'Ryzen 9 7950X', brand: 'AMD', price: 42999, image: 'https://images.unsplash.com/photo-1555618568-9322100d589d?q=80&w=500&auto=format&fit=crop' },
              { name: 'ROG Strix G16', brand: 'ASUS', price: 89999, image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=500&auto=format&fit=crop' },
              { name: 'G Pro Superlight', brand: 'Logitech', price: 8999, image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=500&auto=format&fit=crop' },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                <div className="aspect-square bg-gray-100 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-900 shadow-sm">
                    {product.brand}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-1 group-hover:text-red-600 transition-colors">{product.name}</h3>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xl font-bold text-red-600">₱{product.price.toLocaleString()}</span>
                    <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-red-600 hover:text-white transition-all">
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA Banner */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-red-900/20">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-20 rounded-full blur-3xl -ml-32 -mb-32"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Build Your Rig?</h2>
              <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
                Use our PC Builder tool to ensure compatibility and get the best performance for your budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/build-pc" className="px-8 py-4 bg-white text-red-700 rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                  Start Building Now
                </Link>
                <a
                  href="https://m.me/powertech.ent.2016"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
