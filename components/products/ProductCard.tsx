import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
    id: string;
    name: string;
    slug: string;
    price: number;
    image_url: string;
    brand?: string;
    availability: 'in_stock' | 'out_of_stock' | 'coming_soon';
    category: string;
}

export default function ProductCard({
    id,
    name,
    slug,
    price,
    image_url,
    brand,
    availability,
    category,
}: ProductCardProps) {
    const availabilityStyles = {
        in_stock: 'bg-success text-white',
        out_of_stock: 'bg-error text-white',
        coming_soon: 'bg-warning text-white',
    };

    const availabilityText = {
        in_stock: 'In Stock',
        out_of_stock: 'Out of Stock',
        coming_soon: 'Coming Soon',
    };

    return (
        <Link href={`/products/${slug}`} className="group">
            <div className="card hover-lift overflow-hidden h-full flex flex-col">
                {/* Image Container */}
                <div className="relative aspect-square bg-rustic overflow-hidden rounded-lg mb-4">
                    <Image
                        src={image_url || '/placeholder-product.jpg'}
                        alt={name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Availability Badge */}
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${availabilityStyles[availability]}`}>
                        {availabilityText[availability]}
                    </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col">
                    {brand && (
                        <p className="text-sm text-gray-500 mb-1">{brand}</p>
                    )}
                    <h3 className="font-semibold text-secondary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {name}
                    </h3>

                    <div className="mt-auto">
                        <p className="text-2xl font-bold text-primary mb-3">
                            ₱{price.toLocaleString('en-PH', { minimumFractionDigits: 2 })}
                        </p>

                        <button className="w-full btn-outline flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                            View Details
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}
