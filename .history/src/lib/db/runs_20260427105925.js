import supabase from './supabase-client'

const getUserData = async () => {
    const { data: { user }, error: err } = await supabase.auth.getUser()
    if (err || !user) {
        console.log("No user session: ", err)
        return null
    }
    return user
}

export async function createRun({ runStatus, designStrategy, userID }) {
    const newRunData = {
        user_id: userID,
        run_status: runStatus,
        design_strategy_id: designStrategy,
    }
    const { data, error } = await supabase
        .from("run")
        .insert(newRunData)
        .select("run_id")
        .single()

    if (error) {
        console.log("Error creating run: ", error)
        return null
    }
    return data
};

export async function updateRun({ runID, runStatus }) {
    const newRunData = {
        run_status: runStatus,
        run_end_at: new Date().toISOString()
    }
    const { data, error } = await supabase
        .from("run")
        .update(newRunData)
        .eq('run_id', runID)
        .select("run_id")
        .single()

    if (error) {
        console.log("Error updating run: ", error)
        return null
    }
    return data
}
