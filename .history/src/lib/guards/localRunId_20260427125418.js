export function getValidRunId(storage = window.localStorage) {
    const rawRunID = storage.getItem("run_id")
    if (!rawRunID) return null;

    const runID = Number(rawRunID);
    if (!Number.isFinite(runID) || runID <= 0) return null
    return runID
}