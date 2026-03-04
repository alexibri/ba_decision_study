import { useNavigate } from "react-router-dom";
import { createResponse } from "../../lib/db/responses";
import { useRef } from "react"

/*
calcRtMs(start, now) → pure function

buildResponsePayload({ runId, screenId, choice, rtms }) → pure function

optional: getRunIdFromStorage() → kleine helper function
*/

function calcRtMs (start) {
    return Math.round(performance.now() - start)
}

export function useResponseTracker(screenID) {
    const startTimeRef = useRef(performance.now())
    const navigate = useNavigate();

    const handleChoice = async (choice, navigateTo) => {

        //const currentRtms = Math.round(performance.now() - startTimeRef.current)

        const response = await createResponse(
            {
                runID: Number(localStorage.getItem("run_id")),
                screenID: screenID,
                selectedChoice: choice,
                rtms: currentRtms
            });
        if (!response.approved) return;
        navigate(navigateTo.to, { replace: navigateTo.replace })

    }
    return { handleChoice }
}