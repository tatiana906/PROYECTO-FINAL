import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zxqnptegbdpvgmszmmdc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4cW5wdGVnYmRwdmdtc3ptbWRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcxMTIxNDksImV4cCI6MjA3MjY4ODE0OX0.N45p-C7Jg8l-9y3EH03vWt2inNC1iOfYj6XH8dns91Q'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)