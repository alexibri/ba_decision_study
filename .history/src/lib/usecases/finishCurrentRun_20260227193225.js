import { getValidRunId } from "../guards/localRunId";

export async function finishCurrentRun () {

    const runID = getValidRunId()
    if(!runID) return null

    



    const runID = await updateRun({ runID: Number(localStorage.getItem("run_id")), runStatus: 'finished' });
    if (!run) return;
}