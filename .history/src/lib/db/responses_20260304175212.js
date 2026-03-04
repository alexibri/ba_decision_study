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

    if (error) return {approved: false};
    return { approved: true}
};