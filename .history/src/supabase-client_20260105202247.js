import {createClient} from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE
const supabaseKey = ""

const supabase = createClient(supabaseUrl,supabaseKey);