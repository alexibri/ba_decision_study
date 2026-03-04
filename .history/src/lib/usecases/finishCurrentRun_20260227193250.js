import { updateRun } from "../db/runs";
import { getValidRunId } from "../guards/localRunId";

export async function finishCurrentRun () {

    const runID = getValidRunId()
    if(!runID) return null

    return updateRun({ runID, runStatus})



    const runID = await updateRun({ runID: Number(localStorage.getItem("run_id")), runStatus: 'finished' });
    if (!run) return;
}