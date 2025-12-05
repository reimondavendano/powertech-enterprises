'use client';

import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Filter, ChevronDown, Search, Grid, List, ArrowRight, X } from 'lucide-react';
import { mockProducts } from '@/lib/mock-data';

export default function ProductsPage() {
    const searchParams = useSearchParams();
    const initialCategory = searchParams.get('category'); // e.g., 'components' or 'laptops'

    const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
    const [selectedParent, setSelectedParent] = useState<string | null>(initialCategory);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    // 1. Extract Unique Data for Filters
    const parentCategories = useMemo(() => Array.from(new Set(mockProducts.map(p => p.parentCategory))), []);

    // Filter products first by selected parent to get relevant subcategories
    const relevantProducts = useMemo(() => {
        return selectedParent
            ? mockProducts.filter(p => p.parentCategory.toLowerCase() === selectedParent.toLowerCase())
            : mockProducts;
    }, [selectedParent]);

    const subCategories = useMemo(() => Array.from(new Set(relevantProducts.map(p => p.category))), [relevantProducts]);
    const brands = useMemo(() => Array.from(new Set(relevantProducts.map(p => p.brand))), [relevantProducts]);

    // 2. Final Product Filtering
    const filteredProducts = useMemo(() => {
        return mockProducts.filter(product => {
            const matchParent = selectedParent ? product.parentCategory.toLowerCase() === selectedParent.toLowerCase() : true;
            const matchCategory = selectedCategory ? product.category === selectedCategory : true;
            const matchBrand = selectedBrand ? product.brand === selectedBrand : true;
            const matchSearch = searchQuery ? product.name.toLowerCase().includes(searchQuery.toLowerCase()) : true;

            return matchParent && matchCategory && matchBrand && matchSearch;
        });
    }, [selectedParent, selectedCategory, selectedBrand, searchQuery]);

    // Reset sub-filters when parent changes
    const handleParentSelect = (parent: string | null) => {
        setSelectedParent(parent);
        setSelectedCategory(null);
        setSelectedBrand(null);
    };

    return (
        <div className="bg-gray-50 min-h-screen font-sans text-gray-900">

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
                        {selectedParent ? selectedParent.charAt(0).toUpperCase() + selectedParent.slice(1) : 'All Products'}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto font-sans">
                        Browse our extensive collection of premium computer parts and accessories.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">

                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-72 flex-shrink-0 space-y-8">

                        {/* Active Filters Summary */}
                        {(selectedParent || selectedCategory || selectedBrand) && (
                            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-bold text-gray-700">Active Filters</span>
                                    <button
                                        onClick={() => { setSelectedParent(null); setSelectedCategory(null); setSelectedBrand(null); }}
                                        className="text-xs text-red-600 hover:underline"
                                    >
                                        Clear All
                                    </button>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {selectedParent && (
                                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded flex items-center gap-1">
                                            {selectedParent} <X size={12} className="cursor-pointer" onClick={() => handleParentSelect(null)} />
                                        </span>
                                    )}
                                    {selectedCategory && (
                                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded flex items-center gap-1">
                                            {selectedCategory} <X size={12} className="cursor-pointer" onClick={() => setSelectedCategory(null)} />
                                        </span>
                                    )}
                                    {selectedBrand && (
                                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded flex items-center gap-1">
                                            {selectedBrand} <X size={12} className="cursor-pointer" onClick={() => setSelectedBrand(null)} />
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* 1. Browse by Type (Parent Categories) */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <Filter size={18} /> Department
                            </h3>
                            <ul className="space-y-1">
                                <li key="all">
                                    <button
                                        onClick={() => handleParentSelect(null)}
                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${!selectedParent ? 'bg-red-50 text-red-700 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                                    >
                                        All Departments
                                    </button>
                                </li>
                                {parentCategories.map((cat) => (
                                    <li key={cat}>
                                        <button
                                            onClick={() => handleParentSelect(cat)}
                                            className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors capitalize ${selectedParent === cat ? 'bg-red-50 text-red-700 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                                        >
                                            {cat}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* 2. Sub Categories (Only show relevant ones) */}
                        {selectedParent && (
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 animate-fade-in">
                                <h3 className="font-bold text-gray-900 mb-4">Category</h3>
                                <ul className="space-y-1">
                                    {subCategories.map((cat) => (
                                        <li key={cat}>
                                            <button
                                                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)} // Toggle
                                                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors capitalize flex justify-between items-center ${selectedCategory === cat ? 'bg-red-50 text-red-700 font-bold' : 'text-gray-600 hover:bg-gray-50'}`}
                                            >
                                                {cat.replace('-', ' ')}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* 3. Brands */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4">Brand</h3>
                            <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar pr-2">
                                {brands.map((brand) => (
                                    <label key={brand} className="flex items-center gap-3 cursor-pointer group p-1 hover:bg-gray-50 rounded">
                                        <input
                                            type="radio"
                                            name="brand_filter"
                                            checked={selectedBrand === brand}
                                            onChange={() => setSelectedBrand(selectedBrand === brand ? null : brand)} // Toggle
                                            onClick={(e) => { if (selectedBrand === brand) { setSelectedBrand(null); e.preventDefault(); } }}
                                            className="rounded-full text-red-600 focus:ring-red-500 border-gray-300"
                                        />
                                        <span className="text-sm text-gray-600 group-hover:text-gray-900">{brand}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                    </aside>

                    {/* Main Content */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 sticky top-24 z-30">
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">

                                {/* Search */}
                                <div className="relative w-full sm:w-auto flex-1 max-w-md">
                                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search in this view..."
                                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>

                                <div className="flex items-center gap-4 flex-shrink-0">
                                    <div className="flex bg-gray-100 p-1 rounded-lg">
                                        <button
                                            onClick={() => setViewMode('grid')}
                                            className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-red-600' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            <Grid size={18} />
                                        </button>
                                        <button
                                            onClick={() => setViewMode('list')}
                                            className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-red-600' : 'text-gray-500 hover:text-gray-700'}`}
                                        >
                                            <List size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <Link
                                        href={`/products/${product.slug}`}
                                        key={product.id}
                                        className={`group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 ${viewMode === 'list' ? 'flex flex-row' : ''}`}
                                    >
                                        {/* Image */}
                                        <div className={`relative bg-gray-100 overflow-hidden ${viewMode === 'list' ? 'w-48 h-auto flex-shrink-0' : 'aspect-[4/3]'}`}>
                                            {product.isNew && (
                                                <div className="absolute top-3 left-3 z-10">
                                                    <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider shadow-sm">
                                                        New Arrival
                                                    </span>
                                                </div>
                                            )}
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-5 flex flex-col flex-1">
                                            <div className="mb-2 flex items-center justify-between">
                                                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider bg-gray-100 px-2 py-0.5 rounded">
                                                    {product.brand}
                                                </span>
                                                <span className="text-[10px] font-medium text-gray-400 capitalize">
                                                    {product.category.replace('-', ' ')}
                                                </span>
                                            </div>

                                            <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
                                                {product.name}
                                            </h3>

                                            {/* Specs Snippet (Grid only show limited) */}
                                            <div className="text-xs text-gray-500 mb-4 space-y-1">
                                                {Object.entries(product.specs).slice(0, viewMode === 'list' ? 4 : 2).map(([key, val]) => (
                                                    <p key={key} className="truncate">
                                                        <span className="font-semibold capitalize text-gray-700">{key}:</span> {val}
                                                    </p>
                                                ))}
                                            </div>

                                            <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-50">
                                                <div>
                                                    <span className="text-xl font-black text-red-600">₱{product.price.toLocaleString()}</span>
                                                </div>
                                                <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wide ${product.availability === 'In Stock' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                                                    }`}>
                                                    {product.availability}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                                    <p className="text-gray-500 text-lg mb-2">No products found matching your filters.</p>
                                    <button
                                        onClick={() => { setSelectedParent(null); setSelectedCategory(null); setSelectedBrand(null); setSearchQuery(''); }}
                                        className="text-red-600 font-bold hover:underline"
                                    >
                                        Clear all filters
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
