import supabase from '../../lib/db/supabase-client';

const createResponse = async (selectedChoice) => {

        const currentRunId = localStorage.getItem("run_id")

            const newResponseData = {
                run_id: currentRunId,
                response_selected_choice:selectedChoice,
                response_rtms:Math.round(performance.now() - startTime),
                response_submitted_at: new Date().toISOString()
            }
            
            const {data, error} = await supabase
            .from("response")
            .insert([newResponseData])
    
            if(error) {
                console.log("Error adding run ", error);
                return null;
            }
            return data
        };