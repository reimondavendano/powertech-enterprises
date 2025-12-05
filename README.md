# PowerTech Enterprise - PC Parts Catalog & Inquiry System

A modern, corporate-themed web application for browsing computer parts, laptops, and accessories with inquiry functionality. Built with Next.js 14, Supabase, and Tailwind CSS.

## 🚀 Features

### Core Features
- **Product Catalog**: Browse computer parts, laptops, and accessories
- **Advanced Filtering**: Filter by category, brand, price range, and availability
- **Product Search**: Real-time search with autocomplete
- **PC Builder Tool**: Step-by-step component selection with compatibility checking
- **Inquiry System**: Submit inquiries for products, builds, or services
- **Services Page**: PC repair, custom builds, and maintenance services
- **Responsive Design**: Mobile-first, fully responsive layout

### Design Highlights
- **Modern UI**: Clean, minimalist design with 2025 trends
- **Corporate Theme**: Rustic white, deep red, and matte black color scheme
- **Glassmorphism**: Modern glass effects on cards and overlays
- **Smooth Animations**: Fade-ins, slide-ups, and hover effects
- **Tech Patterns**: Circuit board-inspired backgrounds

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Backend**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand
- **Form Handling**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Fonts**: Inter, Poppins (Google Fonts)

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Supabase account ([supabase.com](https://supabase.com))

### Step 1: Clone and Install Dependencies

```bash
cd powertech-ent
npm install
```

### Step 2: Set Up Supabase

1. Create a new project on [Supabase](https://supabase.com)
2. Go to **SQL Editor** in your Supabase dashboard
3. Run the schema file:
   - Copy contents from `supabase/schema.sql`
   - Paste and execute in SQL Editor
4. Run the seed data file:
   - Copy contents from `supabase/seed-products.sql`
   - Paste and execute in SQL Editor

### Step 3: Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**To get your Supabase credentials:**
1. Go to your Supabase project
2. Click on **Settings** → **API**
3. Copy the **Project URL** and **anon/public** key

### Step 4: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
powertech-ent/
├── app/                      # Next.js App Router
│   ├── (main)/              # Main application routes
│   │   ├── products/        # Product catalog pages
│   │   ├── build-pc/        # PC builder tool
│   │   ├── services/        # Services page
│   │   ├── inquiry/         # Contact/inquiry page
│   │   └── about/           # About page
│   ├── api/                 # API routes
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── layout/              # Layout components (Navbar, Footer)
│   ├── products/            # Product-related components
│   ├── forms/               # Form components
│   └── ui/                  # Reusable UI components
├── lib/                     # Utility libraries
│   └── supabase.ts          # Supabase client
├── types/                   # TypeScript type definitions
│   ├── database.ts          # Database types
│   └── index.ts             # General types
├── hooks/                   # Custom React hooks
├── utils/                   # Utility functions
├── supabase/                # Supabase configuration
│   ├── schema.sql           # Database schema
│   └── seed-products.sql    # Sample product data
└── public/                  # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary**: Deep Red (#DC2626)
- **Secondary**: Matte Black (#1F2937)
- **Accent**: Tech Blue (#3B82F6)
- **Background**: Rustic White (#F5F5F5)

### Typography
- **Headings**: Poppins (Bold, 700-900)
- **Body**: Inter (Regular, 400-600)

### Components
All components follow the design system with:
- Consistent spacing (using CSS variables)
- Smooth transitions (0.3s ease)
- Hover effects (lift, scale, color change)
- Responsive breakpoints (mobile-first)

## 📄 Pages Overview

### 1. Homepage (`/`)
- Hero section with CTA
- Category grid
- Featured products
- Why choose us section
- Call-to-action banner

### 2. Product Catalog (`/products`)
- Filter sidebar (category, brand, price, availability)
- Sort options
- Grid/list view toggle
- Pagination
- Search functionality

### 3. Product Detail (`/products/[slug]`)
- Image gallery
- Full specifications
- Availability status
- Related products
- Inquiry button

### 4. Build PC (`/build-pc`)
- Step-by-step component selection
- Compatibility checker
- Real-time price calculation
- Save build functionality
- Request quote

### 5. Services (`/services`)
- Service cards with descriptions
- Estimated turnaround time
- Inquiry/booking CTA

### 6. Inquiry/Contact (`/inquiry`)
- Contact form with validation
- Subject selection
- File attachment support
- Success message

### 7. About (`/about`)
- Company story
- Why choose us
- Team information

## 🗄️ Database Schema

### Tables
1. **products** - Product catalog
2. **categories** - Product categories and subcategories
3. **inquiries** - Customer inquiries
4. **services** - Available services

See `supabase/schema.sql` for complete schema definition.

## 🔧 Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Adding New Products

You can add products directly in Supabase:
1. Go to **Table Editor** → **products**
2. Click **Insert row**
3. Fill in the required fields
4. Save

Or use SQL:
```sql
INSERT INTO products (name, slug, category, brand, price, description, specifications, image_url, availability)
VALUES ('Product Name', 'product-slug', 'category', 'Brand', 9999.00, 'Description', '{"spec": "value"}', 'image-url', 'in_stock');
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Import your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Add environment variables
7. Deploy

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |

## 🎯 Key Differentiators

- ✅ **Modern 2025 Design**: Latest UI/UX trends
- ✅ **Inquiry-Based**: No checkout/payment (inquiry only)
- ✅ **PC Builder Tool**: Interactive component selection
- ✅ **Fully Responsive**: Mobile-first approach
- ✅ **Fast Performance**: Optimized images, lazy loading
- ✅ **TypeScript**: Full type safety
- ✅ **SEO Optimized**: Proper meta tags and structure

## 🔮 Future Enhancements

- [ ] User accounts (save builds, inquiry history)
- [ ] Live chat widget
- [ ] Blog/News section
- [ ] Product comparison tool
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Product reviews
- [ ] Wishlist functionality

## 📞 Support

For questions or issues:
- Email: info@powertech-ent.com
- Phone: +63 912 345 6789

## 📄 License

This project is proprietary and confidential.

---

**Built with ❤️ by PowerTech Enterprise**
