'use client';

import { useState, useEffect } from 'react';
import { Plus, X, Printer, Save, Trash2, Cpu, HardDrive, Monitor, Box, Zap, Fan, Copy, ExternalLink, CheckCircle } from 'lucide-react';
import { mockProducts } from '@/lib/mock-data';

// Define the slots for the PC Builder
const BUILD_SLOTS = [
    { id: 'cpu', name: 'Processor', icon: Cpu, category: 'processors' },
    { id: 'motherboard', name: 'Motherboard', icon: Box, category: 'motherboards' },
    { id: 'ram', name: 'Memory (RAM)', icon: HardDrive, category: 'memory' },
    { id: 'gpu', name: 'Graphics Card', icon: Monitor, category: 'graphics-cards' },
    { id: 'storage', name: 'Storage (SSD/HDD)', icon: HardDrive, category: 'storage' },
    { id: 'case', name: 'PC Case', icon: Box, category: 'cases' },
    { id: 'psu', name: 'Power Supply', icon: Zap, category: 'power-supplies' },
    { id: 'cooler', name: 'CPU Cooler', icon: Fan, category: 'cooling' },
    { id: 'monitor', name: 'Monitor', icon: Monitor, category: 'monitors' },
];

const MESSENGER_URL = "https://m.me/powertech.ent.2016";

export default function BuildPCPage() {
    // State to store selected parts: { cpu: productObj, gpu: productObj, ... }
    const [selectedParts, setSelectedParts] = useState<Record<string, any>>({});
    const [activeSlot, setActiveSlot] = useState<string | null>(null); // Which slot is currently being selected
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Inquiry Logic State
    const [showRedirectModal, setShowRedirectModal] = useState(false);
    const [redirectTimer, setRedirectTimer] = useState(15);
    const [copySuccess, setCopySuccess] = useState(false);

    // Calculate Total Price
    const totalPrice = Object.values(selectedParts).reduce((sum, part) => sum + (part?.price || 0), 0);

    // Handle opening the selection modal
    const openSelectionModal = (slotId: string) => {
        setActiveSlot(slotId);
        setIsModalOpen(true);
    };

    // Handle selecting a product
    const selectProduct = (product: any) => {
        if (activeSlot) {
            setSelectedParts(prev => ({ ...prev, [activeSlot]: product }));
            setIsModalOpen(false);
            setActiveSlot(null);
        }
    };

    // Handle removing a part
    const removePart = (slotId: string) => {
        const newParts = { ...selectedParts };
        delete newParts[slotId];
        setSelectedParts(newParts);
    };

    // Filter products for the active slot
    const activeCategory = BUILD_SLOTS.find(s => s.id === activeSlot)?.category;
    const availableProducts = mockProducts.filter(p => p.category === activeCategory);

    // --- Request Quote / Inquiry Logic ---
    const handleRequestQuote = () => {
        // 1. Construct the message
        const partsList = Object.entries(selectedParts)
            .map(([slotId, part]) => {
                const slotName = BUILD_SLOTS.find(s => s.id === slotId)?.name || slotId;
                return `- ${slotName}: ${part.name} (₱${part.price.toLocaleString()})`;
            })
            .join('\n');

        const message = `Hi PowerTech! I would like to request a quote for this custom build:\n\n${partsList}\n\nTotal Estimated Price: ₱${totalPrice.toLocaleString()}\n\nPlease let me know availability. Thanks!`;

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
            // Redirect
            window.open(MESSENGER_URL, '_blank');
            setShowRedirectModal(false); // Optional: close modal after redirect or keep it open?
        }
        return () => clearInterval(interval);
    }, [showRedirectModal, redirectTimer]);

    const handleManualRedirect = () => {
        window.open(MESSENGER_URL, '_blank');
        setShowRedirectModal(false);
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900 pb-32">

            {/* Header */}
            <div className="relative text-white py-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/hero.jpg"
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/80"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-4xl md:text-6xl font-display font-black tracking-wider mb-4 uppercase">
                        PC BUILDER <span className="text-red-500">TOOL</span>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto font-sans">
                        Select your components below to create your custom rig.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Builder Layout */}
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Main List */}
                    <div className="flex-1 space-y-4">
                        {BUILD_SLOTS.map((slot) => {
                            const selectedProduct = selectedParts[slot.id];
                            const Icon = slot.icon;

                            return (
                                <div key={slot.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md">
                                    <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-6">

                                        {/* Icon / Image */}
                                        <div className="w-16 h-16 flex-shrink-0 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
                                            {selectedProduct ? (
                                                <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <Icon size={32} className="text-gray-400" />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 text-center sm:text-left w-full">
                                            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                                                <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{slot.name}</span>
                                                {selectedProduct && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Selected</span>}
                                            </div>

                                            {selectedProduct ? (
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-lg">{selectedProduct.name}</h3>
                                                    <p className="text-red-600 font-bold mt-1">₱{selectedProduct.price.toLocaleString()}</p>
                                                </div>
                                            ) : (
                                                <p className="text-gray-400 italic">No component selected</p>
                                            )}
                                        </div>

                                        {/* Actions */}
                                        <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
                                            {selectedProduct ? (
                                                <>
                                                    <button
                                                        onClick={() => openSelectionModal(slot.id)}
                                                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium text-sm transition-colors"
                                                    >
                                                        Change
                                                    </button>
                                                    <button
                                                        onClick={() => removePart(slot.id)}
                                                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                    >
                                                        <Trash2 size={20} />
                                                    </button>
                                                </>
                                            ) : (
                                                <button
                                                    onClick={() => openSelectionModal(slot.id)}
                                                    className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold text-sm transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
                                                >
                                                    <Plus size={18} /> Select {slot.name}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Sticky Summary Sidebar (Desktop) */}
                    <div className="hidden lg:block w-80 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">Build Summary</h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-gray-600">
                                    <span>Components</span>
                                    <span>{Object.keys(selectedParts).length} selected</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Estimated Wattage</span>
                                    <span>~450W</span>
                                </div>
                                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                    <span className="text-lg font-bold text-gray-900">Total Price</span>
                                    <span className="text-2xl font-black text-red-600">₱{totalPrice.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={handleRequestQuote}
                                    className="block w-full py-3 bg-red-600 hover:bg-red-700 text-white text-center rounded-xl font-bold shadow-lg shadow-red-500/30 transition-all font-display tracking-wide"
                                >
                                    Request Quote / Buy
                                </button>
                                <div className="grid grid-cols-2 gap-3">
                                    <button className="py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                                        <Printer size={18} /> Print
                                    </button>
                                    <button className="py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold flex items-center justify-center gap-2 transition-colors">
                                        <Save size={18} /> Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Mobile Sticky Footer */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-2xl z-40">
                <div className="flex items-center justify-between gap-4 max-w-7xl mx-auto">
                    <div>
                        <p className="text-xs text-gray-500">Total Price</p>
                        <p className="text-xl font-black text-red-600">₱{totalPrice.toLocaleString()}</p>
                    </div>
                    <button
                        onClick={handleRequestQuote}
                        className="flex-1 py-3 bg-red-600 text-white rounded-xl font-bold shadow-lg"
                    >
                        Request Quote
                    </button>
                </div>
            </div>

            {/* Product Selection Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[80vh] flex flex-col shadow-2xl">

                        {/* Modal Header */}
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-gray-900">
                                Select {BUILD_SLOTS.find(s => s.id === activeSlot)?.name}
                            </h3>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X size={24} className="text-gray-500" />
                            </button>
                        </div>

                        {/* Product List */}
                        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                            {availableProducts.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {availableProducts.map((product) => (
                                        <div
                                            key={product.id}
                                            className="bg-white p-4 rounded-xl border border-gray-200 hover:border-red-500 hover:border-r-4 hover:shadow-md transition-all cursor-pointer group"
                                            onClick={() => selectProduct(product)}
                                        >
                                            <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                                                {/* Image */}
                                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-1 line-clamp-2">{product.name}</h4>
                                            <div className="flex justify-between items-center mt-2">
                                                <span className="text-red-600 font-bold">₱{product.price.toLocaleString()}</span>
                                                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500 uppercase">{product.brand}</span>
                                            </div>
                                            <button className="mt-3 w-full py-2 bg-gray-100 group-hover:bg-red-600 group-hover:text-white rounded-lg font-medium text-sm transition-colors">
                                                Add to Build
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <p className="text-gray-500 text-lg">No products found for this category yet.</p>
                                    <button
                                        onClick={() => setIsModalOpen(false)}
                                        className="mt-4 text-red-600 font-medium hover:underline"
                                    >
                                        Close & Try Another Slot
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            )}

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
                            We've copied your build details to the clipboard. Please <b>paste (Ctrl+V)</b> them into the Messenger chat to get a quote.
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
