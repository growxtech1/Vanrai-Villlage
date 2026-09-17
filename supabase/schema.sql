-- ==============================================================================
-- VANRAI VILLAGE RESORT - EVENT ENQUIRIES SCHEMA
-- ==============================================================================
-- Run this script in your Supabase SQL Editor (Dashboard > SQL Editor > New query)

-- 1. Create the event_enquiries table
CREATE TABLE IF NOT EXISTS public.event_enquiries (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT timezone('utc'::text, now()),
    
    -- Customer Information
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    email TEXT NOT NULL,
    
    -- Event Specifications
    event_type TEXT NOT NULL,
    event_date DATE,
    num_days INTEGER NOT NULL DEFAULT 1,
    end_date DATE,
    
    -- Requirements
    rooms INTEGER NOT NULL DEFAULT 0,
    pax INTEGER NOT NULL DEFAULT 50,
    catering BOOLEAN NOT NULL DEFAULT false,
    catering_type TEXT CHECK (catering_type IN ('veg', 'non-veg', 'both') OR catering_type IS NULL),
    
    -- Status & CRM tracking
    status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'confirmed', 'cancelled')),
    admin_notes TEXT,
    ip_address TEXT,
    user_agent TEXT
);

-- 2. Create helpful indexes for fast lookup and dashboard filtering
CREATE INDEX IF NOT EXISTS idx_event_enquiries_created_at ON public.event_enquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_event_enquiries_status ON public.event_enquiries (status);
CREATE INDEX IF NOT EXISTS idx_event_enquiries_email ON public.event_enquiries (email);
CREATE INDEX IF NOT EXISTS idx_event_enquiries_phone ON public.event_enquiries (phone);
CREATE INDEX IF NOT EXISTS idx_event_enquiries_event_date ON public.event_enquiries (event_date);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.event_enquiries ENABLE ROW LEVEL SECURITY;

-- 4. Policies:
-- Allow anonymous users / frontend visitors to submit new inquiries
CREATE POLICY "Allow public insert to event_enquiries" 
ON public.event_enquiries 
FOR INSERT 
TO public, anon, authenticated
WITH CHECK (
    first_name IS NOT NULL AND 
    last_name IS NOT NULL AND 
    phone IS NOT NULL AND 
    email IS NOT NULL
);

-- Allow authenticated admins and service role full read/update access
CREATE POLICY "Allow service role full access"
ON public.event_enquiries
FOR ALL
TO service_role
USING (true)
WITH CHECK (true);

-- Allow authenticated users (e.g. Supabase dashboard admins) to read enquiries
CREATE POLICY "Allow authenticated read access"
ON public.event_enquiries
FOR SELECT
TO authenticated
USING (true);

-- 5. Auto-update updated_at timestamp trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS set_event_enquiries_updated_at ON public.event_enquiries;
CREATE TRIGGER set_event_enquiries_updated_at
    BEFORE UPDATE ON public.event_enquiries
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- 6. Comment on table and columns for documentation
COMMENT ON TABLE public.event_enquiries IS 'Stores event inquiries from the website multi-step contact form.';
COMMENT ON COLUMN public.event_enquiries.pax IS 'Expected number of guests for the event.';
COMMENT ON COLUMN public.event_enquiries.rooms IS 'Number of rooms requested for stay.';
COMMENT ON COLUMN public.event_enquiries.status IS 'Current processing status (pending, contacted, confirmed, cancelled).';
