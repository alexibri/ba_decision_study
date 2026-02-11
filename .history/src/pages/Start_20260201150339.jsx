import { useNavigate } from "react-router-dom";
import { setGroup } from "../lib/assignment";
import "../css/Start.css"
import { useState } from "react";


export default function Start () {
    const navigate = useNavigate();

    const [newRun, setNewRun] = useState("")

    const addRun = async () => {
        const newRunData = {
            run_start_at: Date.now(),
            run_status:'started',
            design_strategy_id:1
        }
        const {} = await supabase
        .from("run")
        .insert([newRunData])
        .single();
    };

    const startDark = () => {
        setGroup("dark");
        navigate("/scenario/1/step/1")
    }
    const startNudge = () => {
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