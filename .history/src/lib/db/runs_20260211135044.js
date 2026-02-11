import supabase from './supabase-client';

const getUserData = async () => {
    const { data: { user }, error: err } = await supabase.auth.getUser();

    if (err || !user) {
        console.log("No user session: ", err);
        return null;
    }

    return user
}

export async function createRun({ runStatus, designStrategy }) {

    const userData = await getUserData();

    if (!userData) return null;

    const newRunData = {
        user_id: userData.id,
        run_status: runStatus,
        design_strategy_id: designStrategy,
    }

    const { data, error } = await supabase
        .from("run")
        .insert(newRunData)
        .select("run_id")
        .single();

    if (error) {
        console.log("Error creating run: ", error);
        return null;
    }

    return data

};

export async function updateRun ({runID,runStatus}) {
    
    const newRunData = {
        run_status: runStatus,
        run_end_at:new Date().toISOString()
    }

    const {data, error} = await supabase
    .from("run")
    .update([newRunData])
    .eq('run_id',runID)
    .select("run_id")
    .single();

    if (error){
        console.log("Error updating run: ", error);
        return null;
    }

    return data
}

export async function getRunById (runID) {
    const {data, error} = await supabase
    .from("run")
    .select("run_id,user_id,run_status,run_end_at,design_strategy_id")
    .eq("run_id", runID)
    .maybeSingle();

    if (error){
        console.log("Error fetching run;", error)
        return null;
    }

    return data
}

export async funtion getActiveRunForUser ({useID, designStrategy}){
    let userQuery = supabase
    .from("run")
    .select("run_id, user_id,run_status, run_end_at, design_strategy_id")
    .eq("user_id", userID)
    .eq("run_status","started")
    .is("run_end_at", null)
    .order("run_id", )
}