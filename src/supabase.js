import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://arirfoxuypqatcaukoal.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyaXJmb3h1eXBxYXRjYXVrb2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwODgwNzMsImV4cCI6MTk5MjY2NDA3M30.g8hJAcISBjHWUb871FSIZ6bRPD3ixulCJSKtNM1XUAs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
