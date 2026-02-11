import { useNavigate } from "react-router-dom";
import { setGroup } from "../lib/assignment";
import "../css/Start.css"
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { createRun } from "../lib/db/runs";

export default function Start () {

    const navigate = useNavigate();

    const startDark = async () => {
        const run = await createRun({runStatus:"started",designStrategy:1});
        if (!run) return;

        localStorage.setItem("run_id",String(run.run_id))

        setGroup("dark");
        navigate("/scenario/1/step/1")
    }

    const startNudge = async () => {
        const run = await createRun({"started",2});
        if(!run) return

        localStorage.setItem("run_id",String(run.run_id))
        localStorage.setItem("run_token",run.run_token)

        setGroup("nudge");
        navigate("/scenario/1/step/1")
    }

    return(
        <div className="start fade-in">
            <div className="s1screen">
                <div className="s1card">
                    <h1>Start</h1>
            <div className="stack">
                <button className="button" onClick={startDark}>Dark Patterns</button>
                <button className="button" onClick={startNudge}>Nudge</button>

                <div className="s1buttonPopUp">
                    <button className="s1accept" onClick={() => navigate("/")}>
                        Start
                    </button>
                    </div>
            </div>
                </div>
                
            </div>
        </div>
    )
}