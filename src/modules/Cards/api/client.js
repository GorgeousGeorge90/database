import { createClient } from '@supabase/supabase-js'


const supabase = createClient(
    'https://rxiyvljqrdowdwdklasd.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4aXl2bGpxcmRvd2R3ZGtsYXNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQwNzU0MzUsImV4cCI6MTk5OTY1MTQzNX0.IiyojIxiX-Tn-kG0HlYRlaTr0vaURUgKkJEpnuIed9k',
)

export default supabase