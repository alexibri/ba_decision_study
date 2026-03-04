import supabase from "../db/supabase-client";

export async function ensureAnonSession = async () => {
        const { data: { session }, error: sessionErr } = await supabase.auth.getSession();
        if (sessionErr) {
            console.error(sessionErr)
            return null
        }
        if (session) return session

        const { data, error: signInErr } = await supabase.auth.signInAnonymously();
        if (signInErr) {
            console.error(signInErr);
            return null;
        }
        return data.session
    }