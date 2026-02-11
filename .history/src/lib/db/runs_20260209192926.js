import supabase from './supabase-client';

const getUserData = async () => {
    const {data: {user}, error: err } = await supabase.auth.getUser();

        if (err || !user){
            console.log("No user session: ", err);
            return null;
        }
}

export async function createRun({runStatus,designStrategy}) {

    getUserData();

    const newRunData = {
            user_id: user.id,
            run_status:"started",
            design_strategy_id:designStrategy,
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