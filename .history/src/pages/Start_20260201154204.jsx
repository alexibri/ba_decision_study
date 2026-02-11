import { useNavigate } from "react-router-dom";
import { setGroup } from "../lib/assignment";
import "../css/Start.css"
import { useState } from "react";


export default function Start () {
    const navigate = useNavigate();

    const [newRun, setNewRun] = useState("")
    

    const createRun = async (designStrategy) => {
        const newRunData = {
            run_status:"started",
            design_strategy_id:designStrategy
        }
        const {data, error} = await supabase
        .from("run")
        .insert([newRunData])
        .select("run_id, run_token")
        .single();

        if(error) {
            console.log("Error adding run ", error);
            return null;
        }
        return data
    };

    const startDark = async () => {
        const run = await createRun(1);
        if (!run) return;

        localStorage.setItem("run_id",String(run.run_id))
        localStorage.setItem("run_token",run.run_token)

        setGroup("dark");
        navigate("/scenario/1/step/1")
    }

    const startNudge = async () => {
        const run = await createRun();
        if(!run)


        setGroup("nudge");
        navigate("/scenario/1/step/1")
    }

    return(
        <div className="start fade-in">
            <div className="s1screen">
                <div className="s1card">
                    <h1>Start</h1>
            <div className="stack">
                <button className="button" onClick={[startDark,addRun]}>Dark Patterns</button>
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