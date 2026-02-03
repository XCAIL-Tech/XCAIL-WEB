import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://frxcfvvxkxymwzkeskcu.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZyeGNmdnZ4a3h5bXd6a2Vza2N1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwODAwMjksImV4cCI6MjA4NTY1NjAyOX0.fayExGRKCFarW3Oh6FxB5ErRaC2nJVPvGSL6oTtUAy0";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
