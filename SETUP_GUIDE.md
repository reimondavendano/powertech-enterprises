# PowerTech Enterprise - Complete Setup Guide

This guide will walk you through setting up the PowerTech Enterprise application from scratch.

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Supabase Setup](#supabase-setup)
3. [Local Development Setup](#local-development-setup)
4. [Testing the Application](#testing-the-application)
5. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, make sure you have:
- **Node.js** version 18 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)
- A **Supabase account** ([Sign up free](https://supabase.com))
- A code editor (VS Code recommended)

---

## Supabase Setup

### Step 1: Create a Supabase Project

1. Go to [https://supabase.com](https://supabase.com)
2. Click **"Start your project"** or **"New Project"**
3. Fill in the project details:
   - **Name**: PowerTech Enterprise (or any name you prefer)
   - **Database Password**: Choose a strong password (save this!)
   - **Region**: Choose the closest region to your location
4. Click **"Create new project"**
5. Wait for the project to be created (this may take 1-2 minutes)

### Step 2: Set Up the Database Schema

1. In your Supabase project dashboard, click on **"SQL Editor"** in the left sidebar
2. Click **"New query"**
3. Open the file `supabase/schema.sql` from this project
4. Copy the entire contents of the file
5. Paste it into the SQL Editor
6. Click **"Run"** (or press Ctrl+Enter)
7. You should see a success message: "Success. No rows returned"

This creates all the necessary tables:
- `products` - For storing product information
- `categories` - For product categories
- `inquiries` - For customer inquiries
- `services` - For service offerings

### Step 3: Add Sample Data

1. Still in the SQL Editor, click **"New query"** again
2. Open the file `supabase/seed-products.sql` from this project
3. Copy the entire contents
4. Paste it into the SQL Editor
5. Click **"Run"**
6. You should see a success message indicating rows were inserted

This adds 50+ sample products including:
- Computer parts (CPUs, GPUs, RAM, etc.)
- Laptops (Gaming, Business, Budget)
- Accessories (Keyboards, Mice, Monitors, etc.)

### Step 4: Get Your API Credentials

1. In your Supabase dashboard, click on **"Settings"** (gear icon) in the left sidebar
2. Click on **"API"**
3. You'll see two important values:
   - **Project URL** (looks like: `https://abcdefg.supabase.co`)
   - **anon/public** key (under "Project API keys")
4. **Keep this page open** - you'll need these values in the next section

---

## Local Development Setup

### Step 1: Install Dependencies

Open your terminal in the `powertech-ent` folder and run:

```bash
npm install
```

This will install all required packages (may take 1-2 minutes).

### Step 2: Configure Environment Variables

1. In the project root, create a new file named `.env.local`
2. Open `env.example.txt` for reference
3. Add the following to `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

4. Replace `your_project_url_here` with your **Project URL** from Supabase
5. Replace `your_anon_key_here` with your **anon/public key** from Supabase

**Example:**
```env
NEXT_PUBLIC_SUPABASE_URL=https://xyzabc123.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh5emFiYzEyMyIsInJvbGUiOiJhbm9uIiwiaWF0IjoxNjk5OTk5OTk5LCJleHAiOjIwMTU1NzU5OTl9.abcdefghijklmnopqrstuvwxyz123456789
```

6. Save the file

### Step 3: Start the Development Server

In your terminal, run:

```bash
npm run dev
```

You should see output like:
```
▲ Next.js 16.0.7
- Local:        http://localhost:3000
- Network:      http://192.168.x.x:3000

✓ Starting...
✓ Ready in 2.5s
```

---

## Testing the Application

### Step 1: Open the Application

1. Open your web browser
2. Go to: [http://localhost:3000](http://localhost:3000)
3. You should see the PowerTech Enterprise homepage

### Step 2: Verify Features

**Homepage:**
- ✅ Hero section with "Build Your Dream PC" heading
- ✅ Category grid (Computer Parts, Laptops, Accessories, Services)
- ✅ Featured Products section
- ✅ Why Choose PowerTech section
- ✅ Call-to-action banner

**Navigation:**
- ✅ Click on "Products" in the navbar
- ✅ Click on "Build PC"
- ✅ Click on "Services"
- ✅ Click on "Contact"

**Responsive Design:**
- ✅ Resize your browser window to test mobile view
- ✅ Click the hamburger menu icon on mobile

### Step 3: Check Database Connection

To verify the database is connected:

1. Go to the Products page
2. If you see products loading, the connection is working! ✅
3. If you see errors, check the troubleshooting section below

---

## Troubleshooting

### Issue: "Missing Supabase environment variables"

**Solution:**
1. Make sure `.env.local` file exists in the project root
2. Verify the file contains both variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. Restart the development server (`Ctrl+C`, then `npm run dev`)

### Issue: "Failed to fetch products"

**Solution:**
1. Check your Supabase project is active (green status in dashboard)
2. Verify your API credentials are correct in `.env.local`
3. Make sure you ran both SQL files (schema.sql and seed-products.sql)
4. Check the browser console for specific error messages

### Issue: Port 3000 is already in use

**Solution:**
1. Stop any other applications using port 3000
2. Or, run on a different port:
   ```bash
   npm run dev -- -p 3001
   ```
   Then open [http://localhost:3001](http://localhost:3001)

### Issue: CSS styles not loading

**Solution:**
1. Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Delete the `.next` folder and restart:
   ```bash
   rm -rf .next
   npm run dev
   ```

### Issue: TypeScript errors

**Solution:**
1. Make sure all dependencies are installed:
   ```bash
   npm install
   ```
2. Restart your code editor
3. If using VS Code, reload the window (Ctrl+Shift+P → "Reload Window")

---

## Next Steps

Now that your application is running:

1. **Customize the content**: Edit the homepage text, company info, etc.
2. **Add more products**: Use the Supabase dashboard or SQL Editor
3. **Customize the design**: Modify colors in `app/globals.css`
4. **Build new features**: Add product pages, inquiry forms, etc.
5. **Deploy**: Follow the deployment guide in README.md

---

## Additional Resources

- **Next.js Documentation**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Supabase Documentation**: [https://supabase.com/docs](https://supabase.com/docs)
- **Tailwind CSS**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **TypeScript**: [https://www.typescriptlang.org/docs](https://www.typescriptlang.org/docs)

---

## Support

If you encounter any issues not covered in this guide:

1. Check the browser console for error messages
2. Check the terminal for server errors
3. Review the Supabase logs in the dashboard
4. Refer to the main README.md for more information

**Happy coding! 🚀**
