import { useNavigate } from "react-router-dom";
import { createResponse } from "../../lib/db/responses";
import { useRef } from "react"

/*
calcRtMs(start, now) → pure function

buildResponsePayload({ runId, screenId, choice, rtms }) → pure function

optional: getRunIdFromStorage() → kleine helper function
*/

export function calcRtMs (start,now) {
    return Math.round(now - start)
}

export async function buildResponsePayload (currentRunID, currentScreenID, currentSelectedChoice, currentRtMs) {
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

        await buildResponsePayload (Number(localStorage.getItem("run_id")), screenID, choice, currentRtMs)

        navigate(navigateTo.to, { replace: navigateTo.replace })

    }
    return { handleChoice }
}