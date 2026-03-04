import { useNavigate } from "react-router-dom";
import { createResponse } from "../../lib/db/responses";
import { useRef } from "react"
import { getValidRunId } from "../guards/localRunId";
import { useSingleSubmit } from "./useSingleSubmit";

export function calcRtMs(start, now) {
    return Math.round(now - start)
}

export async function sendResponsePayload(currentRunID, currentScreenID, currentSelectedChoice, currentReationTimeMs) {
    const response = await createResponse(
        {
            runID: currentRunID,
            screenID: currentScreenID,
            selectedChoice: currentSelectedChoice,
            reactionTs: currentReationTimeMs
        });
    return Boolean(response?.approved)
}

export function useResponseTracker(screenID) {
    const startTimeRef = useRef(performance.now())
    const navigate = useNavigate()
    const runOnce = useSingleSubmit()

    const handleChoice = async (choice, navigateTo) => {
        await runOnce(async () => {
            const runID = getValidRunId()
            if (!runID) return

            const currentReationTimeMs = calcReactionTimeMs(startTimeRef.current, performance.now())

            let approved = false
            try {
                approved = await sendResponsePayload(runID, screenID, choice, currentReationTimeMs)
            } catch {
                return
            }

            if (!approved) return
            navigate(navigateTo.to, { replace: navigateTo.replace })
        })
    }
    return { handleChoice }
}
