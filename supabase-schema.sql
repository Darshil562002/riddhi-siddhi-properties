-- ============================================================
-- Riddhi Siddhi Properties — Supabase Database Schema
-- Run this in Supabase Dashboard > SQL Editor
-- ============================================================

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  message TEXT NOT NULL,
  consent BOOLEAN DEFAULT true NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Project enquiries
CREATE TABLE IF NOT EXISTS project_enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  project_name TEXT NOT NULL,
  configuration TEXT,
  message TEXT,
  consent BOOLEAN DEFAULT true NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Site visit requests
CREATE TABLE IF NOT EXISTS site_visit_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  project_name TEXT,
  preferred_date TEXT,
  preferred_time TEXT,
  consent BOOLEAN DEFAULT true NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Callback requests
CREATE TABLE IF NOT EXISTS callback_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  preferred_time TEXT,
  consent BOOLEAN DEFAULT true NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- ============================================================
-- Row Level Security (RLS) — IMPORTANT
-- Enable RLS so only authenticated service role can read data
-- The anon key (used by forms) can only INSERT, never SELECT
-- ============================================================

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_enquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_visit_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE callback_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users (website forms) to insert only
CREATE POLICY "allow_anon_insert_contact" ON contact_submissions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "allow_anon_insert_enquiry" ON project_enquiries
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "allow_anon_insert_site_visit" ON site_visit_requests
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "allow_anon_insert_callback" ON callback_requests
  FOR INSERT TO anon WITH CHECK (true);

-- Only authenticated admins can SELECT (read submissions)
CREATE POLICY "allow_authed_select_contact" ON contact_submissions
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "allow_authed_select_enquiry" ON project_enquiries
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "allow_authed_select_site_visit" ON site_visit_requests
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "allow_authed_select_callback" ON callback_requests
  FOR SELECT TO authenticated USING (true);
