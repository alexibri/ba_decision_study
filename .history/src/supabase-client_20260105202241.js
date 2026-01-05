import {createClient} from '@supabase/supabase-js'

const supabaseUrl = import.meta.en
const supabaseKey = ""

const supabase = createClient(supabaseUrl,supabaseKey);