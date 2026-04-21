import { updateRun } from "../db/runs"
import { getValidRunId } from "../guards/localRunId"

export async function finishCurrentRun () {

    const runID = getValidRunId()
    if(!runID) return null
    return updateRun({ runID, runStatus: "finished"})
}