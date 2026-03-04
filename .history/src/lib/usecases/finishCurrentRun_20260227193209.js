import { getValidRunId } from "../guards/localRunId";

export async function finishCurrentRun () {

    const runID = getValidRunId()



    const runID = await updateRun({ runID: Number(localStorage.getItem("run_id")), runStatus: 'finished' });
    if (!run) return;
}