const finishCurrentRun = async () => {
    const run = await updateRun({ runID: Number(localStorage.getItem("run_id")), runStatus: 'finished' });
    if (!run) return;
}