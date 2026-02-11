import supabase from './supabase-client';

export async function createResponse ({runID,screenID,selectedChoice,rtms}) {

        const currentRunId = localStorage.getItem("run_id")

            const newResponseData = {
                run_id: runID,
                screen_id:screenID,
                response_selected_choice:selectedChoice,
                response_rtms:rtms,
                response_submitted_at: new Date().toISOString()
            }
            
            const {data, error} = await supabase
            .from("response")
            .insert([newResponseData])
    
            if(error) {
                console.log("Error creating response ", error);
                return null;
            }
            return data
};