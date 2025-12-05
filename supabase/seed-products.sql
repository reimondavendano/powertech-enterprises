-- Clear existing data (optional, be careful in production)
-- TRUNCATE TABLE inquiries, products, services, categories RESTART IDENTITY CASCADE;

-- 1. Insert Main Categories
INSERT INTO categories (id, name, slug, parent_id) VALUES
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Components', 'components', NULL),
('b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a22', 'Laptops', 'laptops', NULL),
('c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a33', 'Desktops', 'desktops', NULL),
('d0eebc99-9c0b-4ef8-bb6d-6bb9bd380a44', 'Peripherals', 'peripherals', NULL)
ON CONFLICT (slug) DO NOTHING;

-- 2. Insert Subcategories
INSERT INTO categories (name, slug, parent_id) VALUES
-- Components
('Processors', 'processors', (SELECT id FROM categories WHERE slug='components')),
('Graphics Cards', 'graphics-cards', (SELECT id FROM categories WHERE slug='components')),
('Motherboards', 'motherboards', (SELECT id FROM categories WHERE slug='components')),
('Memory', 'memory', (SELECT id FROM categories WHERE slug='components')),
('Storage', 'storage', (SELECT id FROM categories WHERE slug='components')),
('Power Supplies', 'power-supplies', (SELECT id FROM categories WHERE slug='components')),
('Cases', 'cases', (SELECT id FROM categories WHERE slug='components')),
('Cooling', 'cooling', (SELECT id FROM categories WHERE slug='components')),
-- Laptops
('Gaming Laptops', 'gaming-laptops', (SELECT id FROM categories WHERE slug='laptops')),
('Ultrabooks', 'ultrabooks', (SELECT id FROM categories WHERE slug='laptops')),
('Business Laptops', 'business-laptops', (SELECT id FROM categories WHERE slug='laptops')),
-- Desktops
('Gaming PCs', 'gaming-pcs', (SELECT id FROM categories WHERE slug='desktops')),
('Office PCs', 'office-pcs', (SELECT id FROM categories WHERE slug='desktops')),
-- Peripherals
('Mice', 'mice', (SELECT id FROM categories WHERE slug='peripherals')),
('Keyboards', 'keyboards', (SELECT id FROM categories WHERE slug='peripherals')),
('Monitors', 'monitors', (SELECT id FROM categories WHERE slug='peripherals')),
('Headsets', 'headsets', (SELECT id FROM categories WHERE slug='peripherals'))
ON CONFLICT (slug) DO NOTHING;


-- 3. Insert Products
INSERT INTO products (name, slug, category_id, brand, price, description, specifications, image_url, availability, is_featured) VALUES
-- Processors
('Intel Core i9-14900K', 'intel-core-i9-14900k', (SELECT id FROM categories WHERE slug='processors'), 'Intel', 35995.00, 'Flagship desktop processor for ultimate gaming and creation.', '{"cores": "24 (8P + 16E)", "threads": "32", "socket": "LGA1700", "boost": "6.0 GHz"}', 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000&auto=format&fit=crop', 'in_stock', true),
('Intel Core i7-14700K', 'intel-core-i7-14700k', (SELECT id FROM categories WHERE slug='processors'), 'Intel', 24995.00, 'High-end performance with increased core count.', '{"cores": "20 (8P + 12E)", "threads": "28", "socket": "LGA1700", "boost": "5.6 GHz"}', 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000&auto=format&fit=crop', 'in_stock', false),
('AMD Ryzen 9 7950X3D', 'amd-ryzen-9-7950x3d', (SELECT id FROM categories WHERE slug='processors'), 'AMD', 38995.00, 'The world component for gaming with 3D V-Cache.', '{"cores": "16", "threads": "32", "socket": "AM5", "cache": "144MB"}', 'https://images.unsplash.com/photo-1555618568-9322100d589d?q=80&w=1000&auto=format&fit=crop', 'pre_order', true),
('AMD Ryzen 7 7800X3D', 'amd-ryzen-7-7800x3d', (SELECT id FROM categories WHERE slug='processors'), 'AMD', 23995.00, 'The gaming king processor.', '{"cores": "8", "threads": "16", "socket": "AM5", "cache": "104MB"}', 'https://images.unsplash.com/photo-1555618568-9322100d589d?q=80&w=1000&auto=format&fit=crop', 'in_stock', true),

-- Graphics Cards
('ASUS ROG Strix RTX 4090 OC', 'asus-rog-strix-rtx-4090', (SELECT id FROM categories WHERE slug='graphics-cards'), 'ASUS', 115000.00, 'The most powerful consumer graphics card.', '{"vram": "24GB GDDR6X", "clock": "2640 MHz", "fans": "3", "slots": "3.5"}', 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000&auto=format&fit=crop', 'in_stock', true),
('MSI Gaming X Slim RTX 4070 Ti Super', 'msi-rtx-4070-ti-super', (SELECT id FROM categories WHERE slug='graphics-cards'), 'MSI', 54995.00, 'Excellent 1440p and 4K performance.', '{"vram": "16GB GDDR6X", "clock": "2670 MHz", "fans": "3", "slots": "2.5"}', 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000&auto=format&fit=crop', 'in_stock', false),
('Gigabyte Eagle RX 7800 XT', 'gigabyte-rx-7800-xt', (SELECT id FROM categories WHERE slug='graphics-cards'), 'Gigabyte', 32995.00, 'Value king for 1440p gaming.', '{"vram": "16GB GDDR6", "clock": "2565 MHz", "fans": "3", "slots": "2.5"}', 'https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1000&auto=format&fit=crop', 'in_stock', false),

-- Motherboards
('ASUS ROG Maximus Z790 Hero', 'asus-rog-maximus-z790-hero', (SELECT id FROM categories WHERE slug='motherboards'), 'ASUS', 38950.00, 'Premium Intel motherboard with robust power delivery.', '{"socket": "LGA1700", "memory": "DDR5", "wifi": "WiFi 6E", "slots": "3x M.2"}', 'https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=1000&auto=format&fit=crop', 'in_stock', true),
('MSI MAG B650 Tomahawk WiFi', 'msi-mag-b650-tomahawk', (SELECT id FROM categories WHERE slug='motherboards'), 'MSI', 12500.00, 'Solid foundation for AMD Ryzen 7000/8000 series.', '{"socket": "AM5", "memory": "DDR5", "wifi": "WiFi 6E", "slots": "3x M.2"}', 'https://images.unsplash.com/photo-1562976540-1502c2145186?q=80&w=1000&auto=format&fit=crop', 'in_stock', false),

-- Mice
('Logitech G Pro X Superlight 2', 'logitech-g-pro-x-superlight-2', (SELECT id FROM categories WHERE slug='mice'), 'Logitech', 8995.00, 'The esports standard evolved. Faster and more precise.', '{"weight": "60g", "sensor": "HERO 2", "polling": "2000Hz", "battery": "95h"}', 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1000&auto=format&fit=crop', 'in_stock', true),
('Razer DeathAdder V3 Pro', 'razer-deathadder-v3-pro', (SELECT id FROM categories WHERE slug='mice'), 'Razer', 9495.00, 'Ultra-lightweight ergonomic esports mouse.', '{"weight": "63g", "sensor": "Focus Pro 30K", "polling": "4000Hz Ready", "battery": "90h"}', 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?q=80&w=1000&auto=format&fit=crop', 'in_stock', false),

-- Keyboards
('Keychron Q1 Pro Wireless', 'keychron-q1-pro', (SELECT id FROM categories WHERE slug='keyboards'), 'Keychron', 10995.00, 'Premium all-metal custom mechanical keyboard.', '{"layout": "75%", "body": "Aluminum", "conn": "Bluetooth/Wired", "switches": "K Pro Red"}', 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1000&auto=format&fit=crop', 'in_stock', true),
('Logitech G915 TKL Lightspeed', 'logitech-g915-tkl', (SELECT id FROM categories WHERE slug='keyboards'), 'Logitech', 11995.00, 'Ultra-thin wireless mechanical gaming keyboard.', '{"layout": "TKL", "switches": "Low Profile GL Tactile", "battery": "40h"}', 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1000&auto=format&fit=crop', 'in_stock', false),

-- Monitors
('ASUS ROG Swift OLED PG27AQDM', 'asus-rog-oled-pg27aqdm', (SELECT id FROM categories WHERE slug='monitors'), 'ASUS', 64995.00, 'Endgame 1440p OLED gaming monitor.', '{"size": "27\"", "panel": "OLED", "refresh": "240Hz", "response": "0.03ms"}', 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop', 'pre_order', true),
('LG UltraGear 27GP850-B', 'lg-ultragear-27gp850', (SELECT id FROM categories WHERE slug='monitors'), 'LG', 19995.00, 'Fast IPS panel perfect for competitive gaming.', '{"size": "27\"", "panel": "Nano IPS", "refresh": "180Hz", "response": "1ms"}', 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=1000&auto=format&fit=crop', 'in_stock', false),

-- Laptops
('Lenovo Legion Pro 7i Gen 9', 'lenovo-legion-pro-7i', (SELECT id FROM categories WHERE slug='gaming-laptops'), 'Lenovo', 149995.00, 'AI-tuned gaming powerhouse.', '{"cpu": "i9-14900HX", "gpu": "RTX 4080", "ram": "32GB", "screen": "16\" WQXGA 240Hz"}', 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1000&auto=format&fit=crop', 'in_stock', true),
('Apple MacBook Pro 14 M3', 'apple-macbook-pro-14-m3', (SELECT id FROM categories WHERE slug='ultrabooks'), 'Apple', 109990.00, 'Mind-blowing performance. Eye-opening graphics.', '{"chip": "M3 Pro", "ram": "18GB", "storage": "512GB", "screen": "Liquid Retina XDR"}', 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000&auto=format&fit=crop', 'in_stock', true),

-- Desktops
('PCX GFH WYVERN Premium', 'pcx-gfh-wyvern-premium', (SELECT id FROM categories WHERE slug='gaming-pcs'), 'PowerTech', 85995.00, 'Ready-to-stream gaming desktop.', '{"cpu": "Ryzen 7 7700X", "gpu": "RTX 4070", "ram": "32GB DDR5", "storage": "1TB Gen4"}', 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1000&auto=format&fit=crop', 'in_stock', true)
ON CONFLICT (slug) DO UPDATE 
SET price = EXCLUDED.price, 
    availability = EXCLUDED.availability,
    description = EXCLUDED.description;


-- 4. Insert Services
INSERT INTO services (category, name, description, features, turnaround_time) VALUES
-- 1. PC Building
('PC Building & Assembly', 'Custom PC Build', 'Professional assembly of customer-selected components into a fully functional system.', ARRAY['Cable management', 'Thermal paste application', 'BIOS setup', 'Windows installation'], '2-3 business days'),
('PC Building & Assembly', 'Gaming PC Assembly', 'Specialized build service for gaming rigs with RGB setup and overclocking.', ARRAY['RGB synchronization', 'Basic overclocking', 'Game benchmarking', 'Stress testing'], '3-4 business days'),
('PC Building & Assembly', 'Pre-Build Consultation', 'Expert advice on component compatibility and build planning before purchase.', ARRAY['1-hour consultation', 'Parts list optimization', 'Budget planning'], 'Same day'),
-- 2. Repair
('Computer Repair & Troubleshooting', 'PC Diagnostic Service', 'Comprehensive system check to identify hardware/software issues.', ARRAY['Hardware testing', 'Error log analysis', 'Performance assessment', 'Detailed report'], '1-2 business days'),
('Computer Repair & Troubleshooting', 'Hardware Repair', 'Fix or replace faulty components (motherboard, GPU, PSU, etc.).', ARRAY['Issue diagnosis', 'Component replacement', 'System testing'], '3-7 business days'),
('Computer Repair & Troubleshooting', 'Software Troubleshooting', 'Resolve OS errors, driver issues, blue screen problems, boot failures.', ARRAY['System restore', 'Driver updates', 'Malware removal', 'OS repair'], '1-3 business days'),
('Computer Repair & Troubleshooting', 'Virus & Malware Removal', 'Deep clean system from viruses, spyware, and malicious software.', ARRAY['Full system scan', 'Malware removal', 'Security software installation'], '1 business day'),
-- 3. Upgrades
('System Upgrades & Optimization', 'RAM Upgrade', 'Install additional memory modules for improved performance.', ARRAY['Compatibility check', 'Installation', 'System configuration'], 'Same day / 1 business day'),
('System Upgrades & Optimization', 'Storage Upgrade (HDD to SSD)', 'Migrate system from HDD to faster SSD.', ARRAY['OS cloning', 'Drive installation', 'Speed optimization'], '1-2 business days'),
('System Upgrades & Optimization', 'GPU Installation & Setup', 'Install new graphics card with driver setup.', ARRAY['Physical installation', 'Driver installation', 'Benchmark testing'], 'Same day / 1 business day'),
('System Upgrades & Optimization', 'PC Performance Optimization', 'Speed up slow computers through software and hardware tweaks.', ARRAY['Startup optimization', 'Junk file removal', 'Driver updates', 'Thermal repaste'], '1-2 business days'),
-- 4. Printers
('Printer Services', 'Printer Repair & Troubleshooting', 'Fix common printer issues (paper jams, print quality, connectivity).', ARRAY['Diagnosis', 'Cleaning', 'Part replacement if needed'], '1-3 business days'),
('Printer Services', 'Printer Installation & Setup', 'Connect and configure printers (wired/wireless).', ARRAY['Driver installation', 'Network setup', 'Test printing'], 'Same day / 1 business day'),
('Printer Services', 'Printer Cleaning & Maintenance', 'Preventive maintenance to extend printer lifespan.', ARRAY['Printhead cleaning', 'Roller cleaning', 'Cartridge alignment'], 'Same day'),
-- 5. Data
('Data Services', 'Data Recovery', 'Recover lost files from damaged drives or corrupted systems.', ARRAY['Drive assessment', 'File recovery attempt', 'Data backup'], '3-7 business days'),
('Data Services', 'Data Backup & Migration', 'Safely transfer files to new system or create backup solutions.', ARRAY['Full data backup', 'Cloud setup', 'External drive configuration'], '1-2 business days'),
('Data Services', 'OS Installation & Reinstallation', 'Fresh Windows/Linux installation with driver setup.', ARRAY['OS installation', 'Driver installation', 'Essential software setup'], '1 business day'),
-- 6. Cleaning
('Cleaning & Maintenance', 'Deep PC Cleaning', 'Thorough internal cleaning to remove dust and improve airflow.', ARRAY['Component dusting', 'Fan cleaning', 'Thermal paste reapplication'], 'Same day / 1 business day'),
('Cleaning & Maintenance', 'Laptop Cleaning & Repaste', 'Disassembly, cleaning, and thermal paste replacement for laptops.', ARRAY['Internal dust removal', 'Thermal paste replacement', 'Fan cleaning'], '2-3 business days'),
('Cleaning & Maintenance', 'Preventive Maintenance Package', 'Regular checkup to prevent future issues.', ARRAY['Cleaning', 'System health check', 'Software updates'], '1-2 business days'),
-- 7. Network
('Network & Connectivity Services', 'Home Network Setup', 'Configure routers, switches, and network devices.', ARRAY['Router installation', 'Wi-Fi optimization', 'Device connection'], 'Same day (on-site)'),
('Network & Connectivity Services', 'PC Network Configuration', 'Fix network connectivity issues on desktops/laptops.', ARRAY['Driver updates', 'IP configuration', 'Wi-Fi troubleshooting'], '1 business day');
