export interface PCBuildComponent {
    id: string;
    type: 'cpu' | 'motherboard' | 'ram' | 'gpu' | 'storage' | 'psu' | 'case' | 'cooling';
    product: {
        id: string;
        name: string;
        price: number;
        image_url: string;
        brand: string;
    } | null;
}

export interface PCBuild {
    cpu: PCBuildComponent;
    motherboard: PCBuildComponent;
    ram: PCBuildComponent;
    gpu: PCBuildComponent;
    storage: PCBuildComponent;
    psu: PCBuildComponent;
    case: PCBuildComponent;
    cooling: PCBuildComponent;
}

export interface FilterOptions {
    category?: string;
    subcategory?: string;
    brand?: string[];
    minPrice?: number;
    maxPrice?: number;
    availability?: string[];
    search?: string;
}

export interface SortOption {
    value: string;
    label: string;
}

export const SORT_OPTIONS: SortOption[] = [
    { value: 'newest', label: 'Newest' },
    { value: 'price-asc', label: 'Price: Low to High' },
    { value: 'price-desc', label: 'Price: High to Low' },
    { value: 'name-asc', label: 'Name: A to Z' },
    { value: 'name-desc', label: 'Name: Z to A' },
];

export const CATEGORIES = [
    { value: 'cpu', label: 'Processors (CPU)' },
    { value: 'gpu', label: 'Graphics Cards (GPU)' },
    { value: 'motherboard', label: 'Motherboards' },
    { value: 'ram', label: 'Memory (RAM)' },
    { value: 'storage', label: 'Storage' },
    { value: 'psu', label: 'Power Supply (PSU)' },
    { value: 'cases', label: 'Cases' },
    { value: 'cooling', label: 'Cooling' },
    { value: 'laptop', label: 'Laptops' },
    { value: 'accessories', label: 'Accessories' },
];

export const INQUIRY_SUBJECTS = [
    'Product Inquiry',
    'Build Quote',
    'Service Booking',
    'General Question',
    'Technical Support',
];
