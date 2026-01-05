import {createClient} from '@supabase/supabase-js'

const supabaseUrl = "https://pssjmvrpmuqmwzpdfmhl.supabase.co"
const supabaseKey = "sb_publishable_o7zVaqRXElR1iDIoBRWPUQ_XY7XWfEI"

const supabase = createClient(supabaseUrl,supabaseKey);