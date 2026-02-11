import supabase from './supabase-client';

export async function createRun({userID,}) {

    const newResponseData = {
        run_id: runID,
        screen_id: screenID,
        response_selected_choice: selectedChoice,
        response_rtms: rtms,
        response_submitted_at: new Date().toISOString()
    }

    const { data, error } = await supabase
        .from("response")
        .insert([newResponseData])

    if (error) {
        console.log("Error creating response ", error);
        return null;
    }
    return data

};

const createRun = async (designStrategy) => {

        const {data: {user}, error: err } = await supabase.auth.getUser();

        if (err || !user){
            console.log("No user session: ", err);
            return null;
        }

        const newRunData = {
            user_id: user.id,
            run_status:"started",
            design_strategy_id:designStrategy,
        }
        
        const {data, error} = await supabase
        .from("run")
        .insert([newRunData])
        .select("run_id")
        .single();

        if(error) {
            console.log("Error adding run ", error);
            return null;
        }
        return data
    };