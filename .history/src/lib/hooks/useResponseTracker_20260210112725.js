import { useNavigate } from "react-router-dom";
import { createResponse } from "../../lib/db/responses";
import { useRef } from "react"

export function useResponseTracker(screenID) {
    const startTimeRef = useRef(performance.now())
    const navigate = useNavigate();

    const handleChoice = async (choice, navigateTo) => {


        const run = await createRun({ runStatus: "started", designStrategy: 1 });
        if (!run) return;

        localStorage.setItem("run_id", String(run.run_id))

        setGroup("dark");
        navigate("/scenario/1/step/1")

    }

    return { handleChoice }
}

const handleDark = async () => {
        const currentRtms = Math.round(performance.now() - startTimeRef.current)
        const response = await createResponse({ runID: Number(localStorage.getItem("run_id")), screenID: 1, selectedChoice: "Dark Pattern", rtms: currentRtms });
        if (!response) return;

        navigate("/scenario/1/step/3")
    }