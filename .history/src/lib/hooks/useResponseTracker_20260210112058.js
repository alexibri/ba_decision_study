import { useNavigate } from "react-router-dom";
import { createResponse } from "../../lib/db/responses";
import {useRef} from "react"

const navigate = useNavigate();

export function useResponseTracker() {
        const run = await createRun({runStatus:"started",designStrategy:1});
        if (!run) return;

        localStorage.setItem("run_id",String(run.run_id))

        setGroup("dark");
        navigate("/scenario/1/step/1")
}