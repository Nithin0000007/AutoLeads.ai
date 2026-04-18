import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Lead {
  name: string;
  email: string;
  phone?: string;
  business_type?: string;
  message?: string;
  source?: string;
}

export async function submitLead(lead: Lead): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase.from('leads').insert([lead]);
  if (error) return { success: false, error: error.message };
  return { success: true };
}
