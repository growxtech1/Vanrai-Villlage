import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

let cachedClient: SupabaseClient | null = null;

/**
 * Returns true if Supabase URL and key are provided in environment variables.
 */
export function isSupabaseConfigured(): boolean {
    return Boolean(supabaseUrl && supabaseKey && !supabaseUrl.includes("your-project-id"));
}

/**
 * Returns a server-side Supabase client with administrative or anon privileges.
 */
export function getSupabaseClient(): SupabaseClient | null {
    if (!isSupabaseConfigured()) {
        return null;
    }

    if (!cachedClient) {
        cachedClient = createClient(supabaseUrl, supabaseKey, {
            auth: {
                persistSession: false,
                autoRefreshToken: false,
            },
        });
    }

    return cachedClient;
}

export interface EventEnquiryRecord {
    id?: string;
    created_at?: string;
    updated_at?: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
    event_type: string;
    event_date: string | null;
    num_days: number;
    end_date: string | null;
    rooms: number;
    pax: number;
    catering: boolean;
    catering_type: string | null;
    status?: "pending" | "contacted" | "confirmed" | "cancelled";
    admin_notes?: string | null;
    ip_address?: string | null;
    user_agent?: string | null;
}
