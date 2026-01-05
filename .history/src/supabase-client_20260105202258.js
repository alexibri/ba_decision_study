import {createClient} from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE
const supabaseKey = ""

const supabase = createClient(supabaseUrl,supabaseKey);