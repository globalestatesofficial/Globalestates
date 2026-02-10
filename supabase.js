import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://okfejpqxwhykjixczwht.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9rZmVqcHF4d2h5a2ppeGN6d2h0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA3MTcxMjksImV4cCI6MjA4NjI5MzEyOX0.lz5_XWrBHnzk4VP1vtHQwYLCd5gd6oHgGxiKo0JxMps";

export const supabase = createClient(supabaseUrl, supabaseKey);
