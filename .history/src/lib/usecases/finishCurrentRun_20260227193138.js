import { getValidRunId } from "../guards/localRunId";

export async function finishCurrentRun () {
    const run = await updateRun({ runID: Number(localStorage.getItem("run_id")), runStatus: 'finished' });
    if (!run) return;
}