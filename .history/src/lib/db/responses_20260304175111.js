import supabase from './supabase-client';

export async function createResponse({ runID, screenID, selectedChoice, reactionTimeMs }) {
    const newResponseData = {
        run_id: runID,
        screen_id: screenID,
        response_selected_choice: selectedChoice,
        response_reaction_time_ms: reactionTimeMs,
        response_submitted_at: new Date().toISOString()
    }

    const { error } = await supabase
        .from("response")
        .insert(newResponseData)

    const error = await supabase
    
    if (error) {
        if(error.code === duplicateResponseErrorCode) return {approved: true, duplicate:true}
        console.log("Error creating response ", error);
        return {approved: false};
    }
    return { approved: true, duplicate:false}
};