-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Create Categories Table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  parent_id UUID REFERENCES categories(id) ON DELETE SET NULL, -- For Subcategories
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Create Products Table
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category_id UUID REFERENCES categories(id), -- Links to Subcategory
  brand TEXT NOT NULL,
  sku TEXT UNIQUE,
  price NUMERIC(10,2) NOT NULL,
  description TEXT,
  specifications JSONB, -- Stores detailed specs (e.g., {"dpi": "25000", "switches": "Mechanical"})
  image_url TEXT,
  gallery_images TEXT[],
  availability TEXT DEFAULT 'in_stock', -- in_stock, out_of_stock, pre_order
  is_featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Create Inquiries Table
CREATE TABLE inquiries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name TEXT NOT NULL,
  user_email TEXT NOT NULL,
  user_phone TEXT,
  subject TEXT,
  message TEXT NOT NULL,
  product_id UUID REFERENCES products(id), -- Optional link to specific product
  status TEXT DEFAULT 'new', -- new, read, responded
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_products_category ON products(category_id);
CREATE INDEX idx_products_brand ON products(brand);
CREATE INDEX idx_categories_parent ON categories(parent_id);

-- SEED DATA ---------------------------------------------------------

-- A. Insert Main Categories
INSERT INTO categories (id, name, slug, parent_id) VALUES
('a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11', 'Components', 'components', NULL),
('b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a22', 'Laptops', 'laptops', NULL),
('c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a33', 'Desktops', 'desktops', NULL),
('d0eebc99-9c0b-4ef8-bb6d-6bb9bd380a44', 'Peripherals', 'peripherals', NULL);

-- B. Insert Subcategories
-- Under Components (a0...)
INSERT INTO categories (name, slug, parent_id) VALUES
('Processors (CPU)', 'processors', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'),
('Graphics Cards (GPU)', 'graphics-cards', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'),
('Motherboards', 'motherboards', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'),
('Memory (RAM)', 'memory', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'),
('Storage', 'storage', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'),
('Power Supplies', 'power-supplies', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'),
('Cases', 'cases', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'),
('Cooling', 'cooling', 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11');

-- Under Laptops (b0...)
INSERT INTO categories (name, slug, parent_id) VALUES
('Gaming Laptops', 'gaming-laptops', 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a22'),
('Business Laptops', 'business-laptops', 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a22'),
('Ultrabooks', 'ultrabooks', 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a22');

-- Under Desktops (c0...)
INSERT INTO categories (name, slug, parent_id) VALUES
('Gaming PCs', 'gaming-pcs', 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a33'),
('Office PCs', 'office-pcs', 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a33');

-- Under Peripherals (d0...)
INSERT INTO categories (name, slug, parent_id) VALUES
('Mice', 'mice', 'd0eebc99-9c0b-4ef8-bb6d-6bb9bd380a44'),
('Keyboards', 'keyboards', 'd0eebc99-9c0b-4ef8-bb6d-6bb9bd380a44'),
('Monitors', 'monitors', 'd0eebc99-9c0b-4ef8-bb6d-6bb9bd380a44'),
('Headsets', 'headsets', 'd0eebc99-9c0b-4ef8-bb6d-6bb9bd380a44');


-- C. Insert Products (Sample Data)
-- Note: We use subqueries to find category IDs dynamically to make this script portable

-- 1. Processors (Intel & AMD)
INSERT INTO products (name, slug, category_id, brand, price, description, specifications, image_url, availability, is_featured)
VALUES 
('Intel Core i9-14900K', 'intel-core-i9-14900k', (SELECT id FROM categories WHERE slug='processors'), 'Intel', 35995.00, 'Flagship desktop processor.', '{"cores": "24", "threads": "32", "socket": "LGA1700"}', 'https://images.unsplash.com/photo-1591488320449-011701bb6704', 'in_stock', true),
('Intel Core i7-14700K', 'intel-core-i7-14700k', (SELECT id FROM categories WHERE slug='processors'), 'Intel', 24995.00, 'High-end gaming processor.', '{"cores": "20", "threads": "28", "socket": "LGA1700"}', 'https://images.unsplash.com/photo-1591488320449-011701bb6704', 'in_stock', false),
('Intel Core i5-14600K', 'intel-core-i5-14600k', (SELECT id FROM categories WHERE slug='processors'), 'Intel', 18995.00, 'Best value gaming processor.', '{"cores": "14", "threads": "20", "socket": "LGA1700"}', 'https://images.unsplash.com/photo-1591488320449-011701bb6704', 'in_stock', true),
('AMD Ryzen 9 7950X', 'amd-ryzen-9-7950x', (SELECT id FROM categories WHERE slug='processors'), 'AMD', 32995.00, 'Ultimate performance for creators.', '{"cores": "16", "threads": "32", "socket": "AM5"}', 'https://images.unsplash.com/photo-1555618568-9322100d589d', 'in_stock', true),
('AMD Ryzen 7 7800X3D', 'amd-ryzen-7-7800x3d', (SELECT id FROM categories WHERE slug='processors'), 'AMD', 23995.00, 'The gaming king.', '{"cores": "8", "threads": "16", "socket": "AM5", "cache": "3D V-Cache"}', 'https://images.unsplash.com/photo-1555618568-9322100d589d', 'in_stock', true);

-- 2. Graphics Cards (ASUS, MSI, Gigabyte)
INSERT INTO products (name, slug, category_id, brand, price, description, specifications, image_url, availability, is_featured)
VALUES
('ASUS ROG Strix RTX 4090 OC', 'asus-rog-strix-rtx-4090', (SELECT id FROM categories WHERE slug='graphics-cards'), 'ASUS', 115000.00, 'The world''s fastest gaming GPU.', '{"vram": "24GB GDDR6X", "boost_clock": "2640 MHz"}', 'https://images.unsplash.com/photo-1591488320449-011701bb6704', 'pre_order', true),
('MSI Gaming X Slim RTX 4070 Ti', 'msi-gaming-x-rtx-4070-ti', (SELECT id FROM categories WHERE slug='graphics-cards'), 'MSI', 49995.00, 'Slim and powerful.', '{"vram": "12GB GDDR6X", "fans": "3"}', 'https://images.unsplash.com/photo-1591488320449-011701bb6704', 'in_stock', false),
('Gigabyte RX 7800 XT Gaming OC', 'gigabyte-rx-7800-xt', (SELECT id FROM categories WHERE slug='graphics-cards'), 'Gigabyte', 32995.00, 'Great 1440p performance.', '{"vram": "16GB GDDR6", "fans": "3"}', 'https://images.unsplash.com/photo-1591488320449-011701bb6704', 'in_stock', false);

-- 3. Motherboards
INSERT INTO products (name, slug, category_id, brand, price, description, specifications, image_url, availability)
VALUES
('ASUS ROG Maximus Z790 Hero', 'asus-rog-maximus-z790', (SELECT id FROM categories WHERE slug='motherboards'), 'ASUS', 38950.00, 'Top-tier Intel motherboard.', '{"socket": "LGA1700", "form_factor": "ATX", "memory": "DDR5"}', 'https://images.unsplash.com/photo-1562976540-1502c2145186', 'in_stock'),
('MSI MAG B650 Tomahawk WiFi', 'msi-mag-b650-tomahawk', (SELECT id FROM categories WHERE slug='motherboards'), 'MSI', 12500.00, 'Solid AMD foundation.', '{"socket": "AM5", "form_factor": "ATX", "memory": "DDR5"}', 'https://images.unsplash.com/photo-1562976540-1502c2145186', 'in_stock');

-- 4. Mice (Peripherals)
INSERT INTO products (name, slug, category_id, brand, price, description, specifications, image_url, availability)
VALUES
('Logitech G Pro X Superlight 2', 'logitech-g-pro-x-2', (SELECT id FROM categories WHERE slug='mice'), 'Logitech', 8995.00, 'Next-gen wireless pro gaming mouse.', '{"weight": "60g", "sensor": "HERO 2", "switches": "Hybrid Optical"}', 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7', 'in_stock'),
('Razer DeathAdder V3 Pro', 'razer-deathadder-v3-pro', (SELECT id FROM categories WHERE slug='mice'), 'Razer', 9495.00, 'Ergonomic esports mouse.', '{"weight": "63g", "polling_rate": "4000Hz compatible"}', 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7', 'in_stock');

-- 5. Keyboards (Peripherals)
INSERT INTO products (name, slug, category_id, brand, price, description, specifications, image_url, availability)
VALUES
('Keychron Q1 Pro Wireless', 'keychron-q1-pro', (SELECT id FROM categories WHERE slug='keyboards'), 'Keychron', 10995.00, 'Custom mechanical keyboard.', '{"layout": "75%", "case": "Aluminum", "connection": "Bluetooth/Wired"}', 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7', 'in_stock'),
('Logitech G915 TKL', 'logitech-g915-tkl', (SELECT id FROM categories WHERE slug='keyboards'), 'Logitech', 11995.00, 'Low profile wireless mechanical.', '{"switches": "Low Profile GL", "battery": "40 hours"}', 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7', 'in_stock');

-- 6. Monitors (Peripherals)
INSERT INTO products (name, slug, category_id, brand, price, description, specifications, image_url, availability)
VALUES
('ASUS ROG Swift OLED PG27AQDM', 'asus-rog-oled-pg27aqdm', (SELECT id FROM categories WHERE slug='monitors'), 'ASUS', 64995.00, '1440p 240Hz OLED Gaming Monitor.', '{"panel": "OLED", "refresh_rate": "240Hz", "size": "27 inch"}', 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf', 'in_stock'),
('LG UltraGear 27GP850', 'lg-ultragear-27gp850', (SELECT id FROM categories WHERE slug='monitors'), 'LG', 19995.00, 'Fast building IPS monitor.', '{"panel": "Nano IPS", "refresh_rate": "180Hz", "size": "27 inch"}', 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf', 'in_stock');

-- 7. Laptops
INSERT INTO products (name, slug, category_id, brand, price, description, specifications, image_url, availability)
VALUES
('Lenovo Legion Pro 7i', 'lenovo-legion-pro-7i', (SELECT id FROM categories WHERE slug='gaming-laptops'), 'Lenovo', 149995.00, 'Top tier gaming laptop.', '{"cpu": "i9-13900HX", "gpu": "RTX 4080", "ram": "32GB"}', 'https://images.unsplash.com/photo-1603302576837-37561b2e2302', 'in_stock'),
('Apple MacBook Pro 14 M3', 'apple-macbook-pro-14-m3', (SELECT id FROM categories WHERE slug='ultrabooks'), 'Apple', 109990.00, 'Power and portability.', '{"chip": "M3 Pro", "ram": "18GB", "storage": "512GB"}', 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8', 'in_stock');

-- 4. Create Services Table
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category TEXT NOT NULL, -- e.g., "PC Building", "Repair"
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  features TEXT[] NOT NULL,
  turnaround_time TEXT NOT NULL,
  price_range TEXT, -- Optional, hidden in UI for now
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Seed Services Data
INSERT INTO services (category, name, description, features, turnaround_time) VALUES
-- 1. PC Building
('PC Building & Assembly', 'Custom PC Build', 'Professional assembly of customer-selected components into a fully functional system.', ARRAY['Cable management', 'Thermal paste application', 'BIOS setup', 'Windows installation'], '2-3 business days'),
('PC Building & Assembly', 'Gaming PC Assembly', 'Specialized build service for gaming rigs with RGB setup and overclocking.', ARRAY['RGB synchronization', 'Basic overclocking', 'Game benchmarking', 'Stress testing'], '3-4 business days'),
('PC Building & Assembly', 'Pre-Build consultation', 'Expert advice on component compatibility and build planning before purchase.', ARRAY['1-hour consultation', 'Parts list optimization', 'Budget planning'], 'Same day'),

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

-- 5. Data Services
('Data Services', 'Data Recovery', 'Recover lost files from damaged drives or corrupted systems.', ARRAY['Drive assessment', 'File recovery attempt', 'Data backup'], '3-7 business days'),
('Data Services', 'Data Backup & Migration', 'Safely transfer files to new system or create backup solutions.', ARRAY['Full data backup', 'Cloud setup', 'External drive configuration'], '1-2 business days'),
('Data Services', 'OS Installation & Reinstallation', 'Fresh Windows/Linux installation with driver setup.', ARRAY['OS installation', 'Driver installation', 'Essential software setup'], '1 business day'),

-- 6. Cleaning
('Cleaning & Maintenance', 'Deep PC Cleaning', 'Thorough internal cleaning to remove dust and improve airflow.', ARRAY['Component dusting', 'Fan cleaning', 'Thermal paste reapplication'], 'Same day / 1 business day'),
('Cleaning & Maintenance', 'Laptop Cleaning & Repaste', 'Disassembly, cleaning, and thermal paste replacement for laptops.', ARRAY['Internal dust removal', 'Thermal paste replacement', 'Fan cleaning'], '2-3 business days'),
('Cleaning & Maintenance', 'Preventive Maintenance Package', 'Regular checkup to prevent future issues.', ARRAY['Cleaning', 'System health check', 'Software updates'], '1-2 business days'),

-- 7. Network
('Network & Connectivity', 'Home Network Setup', 'Configure routers, switches, and network devices.', ARRAY['Router installation', 'Wi-Fi optimization', 'Device connection'], 'Same day (on-site)'),
('Network & Connectivity', 'PC Network Configuration', 'Fix network connectivity issues on desktops/laptops.', ARRAY['Driver updates', 'IP configuration', 'Wi-Fi troubleshooting'], '1 business day');

