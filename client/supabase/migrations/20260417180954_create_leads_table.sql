/*
  # Create Leads Table for AI Automation Agency

  ## Summary
  Creates a leads table to capture visitor information from website forms and CTAs.

  ## New Tables
  - `leads`
    - `id` (uuid, primary key) - unique identifier
    - `name` (text) - lead's full name
    - `email` (text) - lead's email address
    - `phone` (text, nullable) - lead's phone number
    - `business_type` (text, nullable) - type of business (clinic, real estate, coach, etc.)
    - `message` (text, nullable) - any additional notes or message
    - `source` (text) - where the lead came from (hero, exit-intent, footer, etc.)
    - `created_at` (timestamptz) - when the lead was captured

  ## Security
  - RLS enabled on leads table
  - Public INSERT policy so visitors can submit their info
  - Authenticated SELECT policy so only admins can read leads
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  business_type text DEFAULT '',
  message text DEFAULT '',
  source text DEFAULT 'website',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view leads"
  ON leads FOR SELECT
  TO authenticated
  USING (true);
