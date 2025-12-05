export type Json =
    | string
    | number
    | boolean
    | null
    | { [key: string]: Json | undefined }
    | Json[]

export interface Database {
    public: {
        Tables: {
            products: {
                Row: {
                    id: string
                    name: string
                    slug: string
                    category: string
                    subcategory: string | null
                    brand: string | null
                    price: number
                    description: string | null
                    specifications: Json | null
                    image_url: string | null
                    image_gallery: string[] | null
                    availability: 'in_stock' | 'out_of_stock' | 'coming_soon'
                    is_featured: boolean
                    stock_quantity: number
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    slug: string
                    category: string
                    subcategory?: string | null
                    brand?: string | null
                    price: number
                    description?: string | null
                    specifications?: Json | null
                    image_url?: string | null
                    image_gallery?: string[] | null
                    availability?: 'in_stock' | 'out_of_stock' | 'coming_soon'
                    is_featured?: boolean
                    stock_quantity?: number
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    slug?: string
                    category?: string
                    subcategory?: string | null
                    brand?: string | null
                    price?: number
                    description?: string | null
                    specifications?: Json | null
                    image_url?: string | null
                    image_gallery?: string[] | null
                    availability?: 'in_stock' | 'out_of_stock' | 'coming_soon'
                    is_featured?: boolean
                    stock_quantity?: number
                    created_at?: string
                    updated_at?: string
                }
            }
            categories: {
                Row: {
                    id: string
                    name: string
                    slug: string
                    parent_id: string | null
                    icon_name: string | null
                    description: string | null
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    slug: string
                    parent_id?: string | null
                    icon_name?: string | null
                    description?: string | null
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    slug?: string
                    parent_id?: string | null
                    icon_name?: string | null
                    description?: string | null
                    created_at?: string
                    updated_at?: string
                }
            }
            inquiries: {
                Row: {
                    id: string
                    name: string
                    email: string
                    phone: string | null
                    subject: string
                    message: string
                    product_id: string | null
                    build_details: Json | null
                    status: 'new' | 'read' | 'responded' | 'closed'
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    email: string
                    phone?: string | null
                    subject: string
                    message: string
                    product_id?: string | null
                    build_details?: Json | null
                    status?: 'new' | 'read' | 'responded' | 'closed'
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    email?: string
                    phone?: string | null
                    subject?: string
                    message?: string
                    product_id?: string | null
                    build_details?: Json | null
                    status?: 'new' | 'read' | 'responded' | 'closed'
                    created_at?: string
                    updated_at?: string
                }
            }
            services: {
                Row: {
                    id: string
                    name: string
                    slug: string
                    description: string
                    estimated_time: string | null
                    icon_name: string | null
                    is_active: boolean
                    created_at: string
                    updated_at: string
                }
                Insert: {
                    id?: string
                    name: string
                    slug: string
                    description: string
                    estimated_time?: string | null
                    icon_name?: string | null
                    is_active?: boolean
                    created_at?: string
                    updated_at?: string
                }
                Update: {
                    id?: string
                    name?: string
                    slug?: string
                    description?: string
                    estimated_time?: string | null
                    icon_name?: string | null
                    is_active?: boolean
                    created_at?: string
                    updated_at?: string
                }
            }
        }
    }
}

export type Product = Database['public']['Tables']['products']['Row'];
export type Category = Database['public']['Tables']['categories']['Row'];
export type Inquiry = Database['public']['Tables']['inquiries']['Row'];
export type Service = Database['public']['Tables']['services']['Row'];
