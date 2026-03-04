import { useNavigate } from "react-router-dom";
import { createResponse } from "../../lib/db/responses";
import { useRef } from "react"
import { getValidRunId } from "../guards/localRunId";


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
    const runID = getValidRunId();

    const handleChoice = async (choice, navigateTo) => {
        if(!runID)
        const currentRtMs = calcRtMs(startTimeRef.current, performance.now())

        const approved = await sendResponsePayload(runID, screenID, choice, currentRtMs)
        if(!approved) return;

        navigate(navigateTo.to, { replace: navigateTo.replace })
    }
    return { handleChoice }
}
