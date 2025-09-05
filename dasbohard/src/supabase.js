import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hvjmvqeyxpkpgrsptjzt.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh2am12cWV5eHBrcGdyc3B0anp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgxMDQ5NDQsImV4cCI6MjAzMzY4MDk0NH0.4i21Kk3B3K5i3-i1o_3O-1L4c_2u324a2_2u324a2_2u'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)