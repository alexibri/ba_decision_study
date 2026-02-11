import { useNavigate } from "react-router-dom";
import { createResponse } from "../../lib/db/responses";
import { useRef } from "react"

export function useResponseTracker(screenID) {
    const startTimeRef = useRef(performance.now())
    const navigate = useNavigate();

    const handleChoice = async (choice, navigateTo) => {

        const currentRtms = Math.round(performance.now() - startTimeRef.current)
        
        const response = await createResponse(
            { runID: Number(localStorage.getItem("run_id")), screenID: 1, selectedChoice: "Dark Pattern", rtms: currentRtms });
        if (!response) return;

        navigate(navigateTo)

    }

    return { handleChoice }
}

const handleDark = async () => {
        const currentRtms = Math.round(performance.now() - startTimeRef.current)
        const response = await createResponse({ runID: Number(localStorage.getItem("run_id")), screenID: 1, selectedChoice: "Dark Pattern", rtms: currentRtms });
        if (!response) return;

        navigate("/scenario/1/step/3")
    }