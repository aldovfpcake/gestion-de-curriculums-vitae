import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export  default supabase;

// Export the supabase client for use in other modules
//export { supabaseUrl, supabaseKey, supabase };
