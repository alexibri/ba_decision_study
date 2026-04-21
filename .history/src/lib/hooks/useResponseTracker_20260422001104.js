import { useNavigate } from "react-router-dom"
import { createResponse } from "../../lib/db/responses"
import { useEffect, useRef, useState } from "react"
import { getValidRunId } from "../guards/localRunId"
import { useSingleSubmit } from "./useSingleSubmit"

export function calcReactionTimeMs(start, now) {
    return Math.round(now - start)
}

export async function sendResponsePayload(currentRunID, currentScreenID, currentSelectedChoice, currentReactionTimeMs) {
    const response = await createResponse(
        {
            runID: currentRunID,
            screenID: currentScreenID,
            selectedChoice: currentSelectedChoice,
            reactionTimeMs: currentReactionTimeMs
        });
    return Boolean(response?.approved)
}

export function useResponseTracker(screenID) {
    const startTimeRef = useRef(null)
    const navigate = useNavigate()
    const runOnce = useSingleSubmit()
    const [loading, setLoading] = useState(false)

    useEffect( ()=> {
        startTimeRef.current = performance.now()
    }, [])

    const handleChoice = async (choice, navigateTo) => {
        return await runOnce(async () => {
            setLoading(true)
            const runID = getValidRunId()
            if (!runID) {
                setLoading(false)
                return false
            }
            const currentReactionTimeMs = calcReactionTimeMs(startTimeRef.current, performance.now())
            let approved = false
            try {
                approved = await sendResponsePayload(runID, screenID, choice, currentReactionTimeMs)
            } catch {
                setLoading(false)
                return false
            }

            if (!approved){
                setLoading(false)
                return false
            }
            navigate(navigateTo.to, { replace: navigateTo.replace })
            return true
        })
    }
    
    return { handleChoice,loading }
}
