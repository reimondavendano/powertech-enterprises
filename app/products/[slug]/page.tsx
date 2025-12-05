'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Check, Shield, Truck, MessageCircle, Share2, Heart, CheckCircle, ExternalLink, X } from 'lucide-react';
import { mockProducts } from '@/lib/mock-data';
import { notFound } from 'next/navigation';

const MESSENGER_URL = "https://m.me/powertech.ent.2016";

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
    const product = mockProducts.find((p) => p.slug === params.slug) || mockProducts[0]; // Fallback to first product for demo if slug not found

    // Inquiry Logic State
    const [showRedirectModal, setShowRedirectModal] = useState(false);
    const [redirectTimer, setRedirectTimer] = useState(15);
    const [copySuccess, setCopySuccess] = useState(false);

    if (!product) return notFound();

    const handleInquire = () => {
        // 1. Construct the message
        const message = `Hi PowerTech! I am interested in this product and would like to inquire:\n\nProduct: ${product.name}\nBrand: ${product.brand}\nPrice: ₱${product.price.toLocaleString()}\nSKU: PT-${product.id.padStart(6, '0')}\n\nPlease let me know if this is available. Thanks!`;

        // 2. Copy to clipboard
        navigator.clipboard.writeText(message).then(() => {
            setCopySuccess(true);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
            setCopySuccess(false);
        });

        // 3. Show Modal & Start Timer
        setShowRedirectModal(true);
        setRedirectTimer(15);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (showRedirectModal && redirectTimer > 0) {
            interval = setInterval(() => {
                setRedirectTimer((prev) => prev - 1);
            }, 1000);
        } else if (showRedirectModal && redirectTimer === 0) {
            window.open(MESSENGER_URL, '_blank');
            setShowRedirectModal(false);
        }
        return () => clearInterval(interval);
    }, [showRedirectModal, redirectTimer]);

    const handleManualRedirect = () => {
        window.open(MESSENGER_URL, '_blank');
        setShowRedirectModal(false);
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900 pb-20">

            {/* Header Banner */}
            <div className="relative text-white py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/hero.jpg"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-display font-black tracking-wider mb-4 uppercase">
                        PRODUCT <span className="text-red-500">DETAILS</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans">
                        {product.name}
                    </p>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-red-600">Home</Link>
                        <span>/</span>
                        <Link href="/products" className="hover:text-red-600">Products</Link>
                        <span>/</span>
                        <span className="text-gray-900 font-medium truncate">{product.name}</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <Link href="/products" className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 mb-6 transition-colors">
                    <ArrowLeft size={20} /> Back to Products
                </Link>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* Product Image */}
                        <div className="p-8 bg-gray-50 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-100 relative group">
                            <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-red-500 transition-colors">
                                    <Heart size={20} />
                                </button>
                                <button className="p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-blue-500 transition-colors">
                                    <Share2 size={20} />
                                </button>
                            </div>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="max-w-full max-h-[500px] object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="p-8 lg:p-12">
                            <div className="mb-6">
                                <span className="text-sm font-bold text-red-600 uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full">
                                    {product.brand}
                                </span>
                                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-2 leading-tight">
                                    {product.name}
                                </h1>
                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                    <span className="flex items-center gap-1 text-green-600 font-medium">
                                        <Check size={16} /> {product.availability}
                                    </span>
                                    <span>•</span>
                                    <span>SKU: PT-{product.id.padStart(6, '0')}</span>
                                </div>
                            </div>

                            <div className="mb-8">
                                <p className="text-gray-600 text-lg leading-relaxed">
                                    {product.description}
                                </p>
                            </div>

                            {/* Price & Actions */}
                            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
                                <div className="flex items-end gap-2 mb-6">
                                    <span className="text-4xl font-bold text-red-600">₱{product.price.toLocaleString()}</span>
                                    <span className="text-gray-400 text-sm mb-2">VAT Included</span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={handleInquire}
                                        className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-xl text-center transition-all shadow-lg hover:shadow-red-500/30 flex items-center justify-center gap-2"
                                    >
                                        <MessageCircle size={20} />
                                        Inquire / Order Now
                                    </button>
                                    <button className="flex-1 bg-white border-2 border-gray-200 hover:border-gray-900 text-gray-900 font-bold py-4 px-6 rounded-xl transition-all">
                                        Download Specs
                                    </button>
                                </div>

                                <p className="text-xs text-gray-500 mt-4 text-center">
                                    *Prices subject to change without prior notice.
                                </p>
                            </div>

                            {/* Specifications */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">
                                    Technical Specifications
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                    {Object.entries(product.specs).map(([key, value]) => (
                                        <div key={key} className="flex flex-col">
                                            <span className="text-xs text-gray-500 uppercase font-semibold">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                            <span className="text-gray-900 font-medium">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                                        <Shield size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Official Warranty</p>
                                        <p className="text-xs text-gray-500">100% Authentic Products</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                                        <Truck size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-gray-900">Nationwide Shipping</p>
                                        <p className="text-xs text-gray-500">Secure packaging</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Redirect / Copy Modal */}
            {showRedirectModal && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white rounded-2xl w-full max-w-md p-8 text-center shadow-2xl relative">
                        <button
                            onClick={() => setShowRedirectModal(false)}
                            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600"
                        >
                            <X size={24} />
                        </button>

                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle size={40} />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Details Copied!</h3>
                        <p className="text-gray-600 mb-8">
                            We've copied the product details to your clipboard. Please <b>paste (Ctrl+V)</b> them into the Messenger chat.
                        </p>

                        <div className="mb-8">
                            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-600 transition-all duration-1000 ease-linear"
                                    style={{ width: `${(redirectTimer / 15) * 100}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-gray-400 mt-2">Opening Messenger in {redirectTimer}s...</p>
                        </div>

                        <button
                            onClick={handleManualRedirect}
                            className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold font-display uppercase tracking-wider text-lg shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-3"
                        >
                            Open Messenger Now
                            <ExternalLink size={20} />
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}
