export const API_URL_SUPABASE = import.meta.env.VITE_SUPABASE_URL;
export const API_KEY_SUPABASE = import.meta.env.VITE_SUPABASE_ANON_KEY;

import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(API_URL_SUPABASE, API_KEY_SUPABASE);
