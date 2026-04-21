import supabase from "../db/supabase-client"

export async function ensureAnonSession() {
    const { data: { session }, error: sessionErr } = await supabase.auth.getSession()
    if (sessionErr) return null
    if (session) return session

    const { data, error } = await supabase.auth.signInAnonymously()
    if (error) return null

    return data.session ?? null
}
