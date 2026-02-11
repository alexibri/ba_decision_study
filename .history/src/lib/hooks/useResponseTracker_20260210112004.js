import { useNavigate } from "react-router-dom";
import "../../css/scenario1.css"
import { createResponse } from "../../lib/db/responses";
import {useRef} from "react"

const navigate = useNavigate();

    const startDark = async () => {
        const run = await createRun({runStatus:"started",designStrategy:1});
        if (!run) return;

        localStorage.setItem("run_id",String(run.run_id))

        setGroup("dark");
        navigate("/scenario/1/step/1")
    }