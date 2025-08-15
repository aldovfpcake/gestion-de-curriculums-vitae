import { createClient } from '@supabase/supabase-js';
import e from 'express';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);



 
export  default supabase;


//export { supabaseUrl, supabaseKey, supabase };
