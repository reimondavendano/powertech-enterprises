export const mockProducts = [
    // --- PROCESSORS (CPUs) ---
    {
        id: 'cpu-1',
        name: 'Intel Core i9-14900K',
        slug: 'intel-core-i9-14900k',
        category: 'processors',
        parentCategory: 'components',
        brand: 'Intel',
        price: 35995.00,
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000&auto=format&fit=crop',
        description: 'Flagship desktop processor for ultimate gaming and creation.',
        specs: { cores: '24 (8P + 16E)', threads: '32', socket: 'LGA1700', boost: '6.0 GHz' },
        availability: 'In Stock',
        isNew: true
    },
    {
        id: 'cpu-2',
        name: 'Intel Core i7-14700K',
        slug: 'intel-core-i7-14700k',
        category: 'processors',
        parentCategory: 'components',
        brand: 'Intel',
        price: 24995.00,
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000&auto=format&fit=crop',
        description: 'High-end performance with increased core count.',
        specs: { cores: '20 (8P + 12E)', threads: '28', socket: 'LGA1700', boost: '5.6 GHz' },
        availability: 'In Stock',
        isNew: true
    },
    {
        id: 'cpu-3',
        name: 'AMD Ryzen 9 7950X3D',
        slug: 'amd-ryzen-9-7950x3d',
        category: 'processors',
        parentCategory: 'components',
        brand: 'AMD',
        price: 38995.00,
        image: 'https://images.unsplash.com/photo-1555618568-9322100d589d?q=80&w=1000&auto=format&fit=crop',
        description: 'The world component for gaming with 3D V-Cache.',
        specs: { cores: '16', threads: '32', socket: 'AM5', cache: '144MB' },
        availability: 'Pre-order',
        isNew: true
    },
    {
        id: 'cpu-4',
        name: 'AMD Ryzen 7 7800X3D',
        slug: 'amd-ryzen-7-7800x3d',
        category: 'processors',
        parentCategory: 'components',
        brand: 'AMD',
        price: 23995.00,
        image: 'https://images.unsplash.com/photo-1555618568-9322100d589d?q=80&w=1000&auto=format&fit=crop',
        description: 'The gaming king processor.',
        specs: { cores: '8', threads: '16', socket: 'AM5', cache: '104MB' },
        availability: 'In Stock',
        isNew: true
    },

    // --- GRAPHICS CARDS (GPUs) ---
    {
        id: 'gpu-1',
        name: 'ASUS ROG Strix RTX 4090 OC',
        slug: 'asus-rog-strix-rtx-4090',
        category: 'graphics-cards',
        parentCategory: 'components',
        brand: 'ASUS',
        price: 115000.00,
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000&auto=format&fit=crop',
        description: 'The most powerful consumer graphics card.',
        specs: { vram: '24GB GDDR6X', clock: '2640 MHz', fans: '3', slots: '3.5' },
        availability: 'In Stock',
        isNew: true
    },
    {
        id: 'gpu-2',
        name: 'MSI Gaming X Slim RTX 4070 Ti Super',
        slug: 'msi-rtx-4070-ti-super',
        category: 'graphics-cards',
        parentCategory: 'components',
        brand: 'MSI',
        price: 54995.00,
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000&auto=format&fit=crop',
        description: 'Excellent 1440p and 4K performance.',
        specs: { vram: '16GB GDDR6X', clock: '2670 MHz', fans: '3', slots: '2.5' },
        availability: 'In Stock',
        isNew: true
    },
    {
        id: 'gpu-3',
        name: 'Gigabyte Eagle RX 7800 XT',
        slug: 'gigabyte-rx-7800-xt',
        category: 'graphics-cards',
        parentCategory: 'components',
        brand: 'Gigabyte',
        price: 32995.00,
        image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000&auto=format&fit=crop',
        description: 'Value king for 1440p gaming.',
        specs: { vram: '16GB GDDR6', clock: '2565 MHz', fans: '3', slots: '2.5' },
        availability: 'In Stock',
        isNew: false
    },

    // --- MOTHERBOARDS ---
    {
        id: 'mobo-1',
        name: 'ASUS ROG Maximus Z790 Hero',
        slug: 'asus-rog-maximus-z790-hero',
        category: 'motherboards',
        parentCategory: 'components',
        brand: 'ASUS',
        price: 38950.00,
        image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=1000&auto=format&fit=crop',
        description: 'Premium Intel motherboard with robust power delivery.',
        specs: { socket: 'LGA1700', memory: 'DDR5', wifi: 'WiFi 6E', slots: '3x M.2' },
        availability: 'In Stock',
        isNew: true
    },
    {
        id: 'mobo-2',
        name: 'MSI MAG B650 Tomahawk WiFi',
        slug: 'msi-mag-b650-tomahawk',
        category: 'motherboards',
        parentCategory: 'components',
        brand: 'MSI',
        price: 12500.00,
        image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=1000&auto=format&fit=crop',
        description: 'Solid foundation for AMD Ryzen 7000/8000 series.',
        specs: { socket: 'AM5', memory: 'DDR5', wifi: 'WiFi 6E', slots: '3x M.2' },
        availability: 'In Stock',
        isNew: false
    },

    // --- PERIPHERALS: MICE ---
    {
        id: 'mouse-1',
        name: 'Logitech G Pro X Superlight 2',
        slug: 'logitech-g-pro-x-superlight-2',
        category: 'mice',
        parentCategory: 'peripherals',
        brand: 'Logitech',
        price: 8995.00,
        image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1000&auto=format&fit=crop',
        description: 'The esports standard evolved. Faster and more precise.',
        specs: { weight: '60g', sensor: 'HERO 2', polling: '2000Hz', battery: '95h' },
        availability: 'In Stock',
        isNew: true
    },
    {
        id: 'mouse-2',
        name: 'Razer DeathAdder V3 Pro',
        slug: 'razer-deathadder-v3-pro',
        category: 'mice',
        parentCategory: 'peripherals',
        brand: 'Razer',
        price: 9495.00,
        image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1000&auto=format&fit=crop',
        description: 'Ultra-lightweight ergonomic esports mouse.',
        specs: { weight: '63g', sensor: 'Focus Pro 30K', polling: '4000Hz Ready', battery: '90h' },
        availability: 'In Stock',
        isNew: true
    },

    // --- PERIPHERALS: KEYBOARDS ---
    {
        id: 'kb-1',
        name: 'Keychron Q1 Pro Wireless',
        slug: 'keychron-q1-pro',
        category: 'keyboards',
        parentCategory: 'peripherals',
        brand: 'Keychron',
        price: 10995.00,
        image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1000&auto=format&fit=crop',
        description: 'Premium all-metal custom mechanical keyboard.',
        specs: { layout: '75%', body: 'Aluminum', conn: 'Bluetooth/Wired', switches: 'K Pro Red' },
        availability: 'In Stock',
        isNew: true
    },
    {
        id: 'kb-2',
        name: 'Logitech G915 TKL Lightspeed',
        slug: 'logitech-g915-tkl',
        category: 'keyboards',
        parentCategory: 'peripherals',
        brand: 'Logitech',
        price: 11995.00,
        image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1000&auto=format&fit=crop',
        description: 'Ultra-thin wireless mechanical gaming keyboard.',
        specs: { layout: 'TKL', switches: 'Low Profile GL Tactile', battery: '40h' },
        availability: 'In Stock',
        isNew: false
    },

    // --- PERIPHERALS: MONITORS ---
    {
        id: 'mon-1',
        name: 'ASUS ROG Swift OLED PG27AQDM',
        slug: 'asus-rog-oled-pg27aqdm',
        category: 'monitors',
        parentCategory: 'peripherals',
        brand: 'ASUS',
        price: 64995.00,
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop',
        description: 'Endgame 1440p OLED gaming monitor.',
        specs: { size: '27"', panel: 'OLED', refresh: '240Hz', response: '0.03ms' },
        availability: 'Pre-order',
        isNew: true
    },
    {
        id: 'mon-2',
        name: 'LG UltraGear 27GP850-B',
        slug: 'lg-ultragear-27gp850',
        category: 'monitors',
        parentCategory: 'peripherals',
        brand: 'LG',
        price: 19995.00,
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop',
        description: 'Fast IPS panel perfect for competitive gaming.',
        specs: { size: '27"', panel: 'Nano IPS', refresh: '180Hz', response: '1ms' },
        availability: 'In Stock',
        isNew: false
    },

    // --- LAPTOPS ---
    {
        id: 'lap-1',
        name: 'Lenovo Legion Pro 7i Gen 9',
        slug: 'lenovo-legion-pro-7i',
        category: 'gaming-laptops',
        parentCategory: 'laptops',
        brand: 'Lenovo',
        price: 149995.00,
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop',
        description: 'AI-tuned gaming powerhouse.',
        specs: { cpu: 'i9-14900HX', gpu: 'RTX 4080', ram: '32GB', screen: '16" WQXGA 240Hz' },
        availability: 'In Stock',
        isNew: true
    },
    {
        id: 'lap-2',
        name: 'Apple MacBook Pro 14 M3',
        slug: 'apple-macbook-pro-14-m3',
        category: 'ultrabooks',
        parentCategory: 'laptops',
        brand: 'Apple',
        price: 109990.00,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop',
        description: 'Mind-blowing performance. Eye-opening graphics.',
        specs: { chip: 'M3 Pro', ram: '18GB', storage: '512GB', screen: 'Liquid Retina XDR' },
        availability: 'In Stock',
        isNew: true
    },

    // --- DESKTOPS ---
    {
        id: 'desk-1',
        name: 'PCX GFH WYVERN Premium',
        slug: 'pcx-gfh-wyvern-premium',
        category: 'gaming-pcs',
        parentCategory: 'desktops',
        brand: 'PowerTech',
        price: 85995.00,
        image: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1000&auto=format&fit=crop',
        description: 'Ready-to-stream gaming desktop.',
        specs: { cpu: 'Ryzen 7 7700X', gpu: 'RTX 4070', ram: '32GB DDR5', storage: '1TB Gen4' },
        availability: 'In Stock',
        isNew: true
    }
];

export const mockServices = [
    // 1. PC Building & Assembly
    {
        id: 'svc-1-1',
        category: 'PC Building & Assembly',
        name: 'Custom PC Build',
        description: 'Professional assembly of customer-selected components into a fully functional system.',
        features: ['Cable management', 'Thermal paste application', 'BIOS setup', 'Windows installation'],
        turnaround: '2-3 business days',
        icon: 'Cpu'
    },
    {
        id: 'svc-1-2',
        category: 'PC Building & Assembly',
        name: 'Gaming PC Assembly',
        description: 'Specialized build service for gaming rigs with RGB setup and overclocking.',
        features: ['All standard assembly', 'RGB synchronization', 'Basic overclocking', 'Game benchmarking'],
        turnaround: '3-4 business days',
        icon: 'Zap'
    },
    {
        id: 'svc-1-3',
        category: 'PC Building & Assembly',
        name: 'Pre-Build Consultation',
        description: 'Expert advice on component compatibility and build planning before purchase.',
        features: ['1-hour consultation', 'Parts list optimization', 'Budget planning'],
        turnaround: 'Same day (appointment-based)',
        icon: 'Users'
    },

    // 2. Computer Repair
    {
        id: 'svc-2-1',
        category: 'Computer Repair & Troubleshooting',
        name: 'PC Diagnostic Service',
        description: 'Comprehensive system check to identify hardware/software issues.',
        features: ['Hardware testing', 'Error log analysis', 'Performance assessment', 'Detailed report'],
        turnaround: '1-2 business days',
        icon: 'Activity'
    },
    {
        id: 'svc-2-2',
        category: 'Computer Repair & Troubleshooting',
        name: 'Hardware Repair',
        description: 'Fix or replace faulty components (motherboard, GPU, PSU, etc.).',
        features: ['Issue diagnosis', 'Component replacement/repair', 'System testing'],
        turnaround: '3-7 business days',
        icon: 'Wrench'
    },
    {
        id: 'svc-2-3',
        category: 'Computer Repair & Troubleshooting',
        name: 'Software Troubleshooting',
        description: 'Resolve OS errors, driver issues, blue screen problems, boot failures.',
        features: ['System restore', 'Driver updates', 'Malware removal', 'OS repair'],
        turnaround: '1-3 business days',
        icon: 'Monitor'
    },
    {
        id: 'svc-2-4',
        category: 'Computer Repair & Troubleshooting',
        name: 'Virus & Malware Removal',
        description: 'Deep clean system from viruses, spyware, and malicious software.',
        features: ['Full system scan', 'Malware removal', 'Security software installation'],
        turnaround: '1 business day',
        icon: 'Shield'
    },

    // 3. Upgrades
    {
        id: 'svc-3-1',
        category: 'System Upgrades & Optimization',
        name: 'RAM Upgrade',
        description: 'Install additional memory modules for improved performance.',
        features: ['Compatibility check', 'Installation', 'System configuration'],
        turnaround: 'Same day / 1 business day',
        icon: 'HardDrive'
    },
    {
        id: 'svc-3-2',
        category: 'System Upgrades & Optimization',
        name: 'Storage Upgrade (HDD to SSD)',
        description: 'Migrate system from HDD to faster SSD.',
        features: ['OS cloning', 'Drive installation', 'Speed optimization'],
        turnaround: '1-2 business days',
        icon: 'HardDrive'
    },
    {
        id: 'svc-3-3',
        category: 'System Upgrades & Optimization',
        name: 'GPU Installation & Setup',
        description: 'Install new graphics card with driver setup.',
        features: ['Physical installation', 'Driver installation', 'Benchmark testing'],
        turnaround: 'Same day / 1 business day',
        icon: 'Monitor'
    },
    {
        id: 'svc-3-4',
        category: 'System Upgrades & Optimization',
        name: 'PC Performance Optimization',
        description: 'Speed up slow computers through software and hardware tweaks.',
        features: ['Startup optimization', 'Junk file removal', 'Driver updates', 'Thermal repaste'],
        turnaround: '1-2 business days',
        icon: 'Zap'
    },

    // 4. Printers
    {
        id: 'svc-4-1',
        category: 'Printer Services',
        name: 'Printer Repair & Troubleshooting',
        description: 'Fix common printer issues (paper jams, print quality, connectivity).',
        features: ['Diagnosis', 'Cleaning', 'Part replacement if needed'],
        turnaround: '1-3 business days',
        icon: 'Printer'
    },
    {
        id: 'svc-4-2',
        category: 'Printer Services',
        name: 'Printer Installation & Setup',
        description: 'Connect and configure printers (wired/wireless).',
        features: ['Driver installation', 'Network setup', 'Test printing'],
        turnaround: 'Same day / 1 business day',
        icon: 'Printer'
    },
    {
        id: 'svc-4-3',
        category: 'Printer Services',
        name: 'Printer Cleaning & Maintenance',
        description: 'Preventive maintenance to extend printer lifespan.',
        features: ['Printhead cleaning', 'Roller cleaning', 'Cartridge alignment'],
        turnaround: 'Same day',
        icon: 'Printer'
    },

    // 5. Data
    {
        id: 'svc-5-1',
        category: 'Data Services',
        name: 'Data Recovery',
        description: 'Recover lost files from damaged drives or corrupted systems.',
        features: ['Drive assessment', 'File recovery attempt', 'Data backup'],
        turnaround: '3-7 business days',
        icon: 'HardDrive'
    },
    {
        id: 'svc-5-2',
        category: 'Data Services',
        name: 'Data Backup & Migration',
        description: 'Safely transfer files to new system or create backup solutions.',
        features: ['Full data backup', 'Cloud setup', 'External drive configuration'],
        turnaround: '1-2 business days',
        icon: 'HardDrive'
    },
    {
        id: 'svc-5-3',
        category: 'Data Services',
        name: 'OS Installation & Reinstallation',
        description: 'Fresh Windows/Linux installation with driver setup.',
        features: ['OS installation', 'Driver installation', 'Essential software setup'],
        turnaround: '1 business day',
        icon: 'Monitor'
    },

    // 6. Cleaning
    {
        id: 'svc-6-1',
        category: 'Cleaning & Maintenance',
        name: 'Deep PC Cleaning',
        description: 'Thorough internal cleaning to remove dust and improve airflow.',
        features: ['Component dusting', 'Fan cleaning', 'Thermal paste reapplication'],
        turnaround: 'Same day / 1 business day',
        icon: 'Wind'
    },
    {
        id: 'svc-6-2',
        category: 'Cleaning & Maintenance',
        name: 'Laptop Cleaning & Repaste',
        description: 'Disassembly, cleaning, and thermal paste replacement for laptops.',
        features: ['Internal dust removal', 'Thermal paste replacement', 'Fan cleaning'],
        turnaround: '2-3 business days',
        icon: 'Laptop'
    },
    {
        id: 'svc-6-3',
        category: 'Cleaning & Maintenance',
        name: 'Preventive Maintenance Package',
        description: 'Regular checkup to prevent future issues.',
        features: ['Cleaning', 'System health check', 'Software updates'],
        turnaround: '1-2 business days',
        icon: 'Shield'
    },

    // 7. Network
    {
        id: 'svc-7-1',
        category: 'Network & Connectivity Services',
        name: 'Home Network Setup',
        description: 'Configure routers, switches, and network devices.',
        features: ['Router installation', 'Wi-Fi optimization', 'Device connection'],
        turnaround: 'Same day (on-site)',
        icon: 'Wifi'
    },
    {
        id: 'svc-7-2',
        category: 'Network & Connectivity Services',
        name: 'PC Network Configuration',
        description: 'Fix network connectivity issues on desktops/laptops.',
        features: ['Driver updates', 'IP configuration', 'Wi-Fi troubleshooting'],
        turnaround: '1 business day',
        icon: 'Wifi'
    }
];

// Helper to get all unique categories and brands
export const getCategories = () => {
    const categories = new Set(mockProducts.map(p => p.category));
    return Array.from(categories);
}

export const getBrands = () => {
    const brands = new Set(mockProducts.map(p => p.brand));
    return Array.from(brands);
}
