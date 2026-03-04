import { useNavigate } from "react-router-dom";
import { createResponse } from "../../lib/db/responses";
import { useRef } from "react"


export function calcRtMs(start, now) {
    return Math.round(now - start)
}

export async function sendResponsePayload(currentRunID, currentScreenID, currentSelectedChoice, currentRtMs) {
    const response = await createResponse(
        {
            runID: currentRunID,
            screenID: currentScreenID,
            selectedChoice: currentSelectedChoice,
            rtms: currentRtMs
        });
    return Boolean(response?.approved);
}

export function useResponseTracker(screenID) {
    const startTimeRef = useRef(performance.now())
    const navigate = useNavigate();

    const handleChoice = async (choice, navigateTo) => {
        const currentRtMs = calcRtMs(startTimeRef.current, performance.now())
        const runID = Number(localStorage.getItem("run_id"))

        const approved = await sendResponsePayload(runID, screenID, choice, currentRtMs)
        if
        navigate(navigateTo.to, { replace: navigateTo.replace })
    }
    return { handleChoice }
}
