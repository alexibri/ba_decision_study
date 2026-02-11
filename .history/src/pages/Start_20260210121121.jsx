import { useNavigate } from "react-router-dom";
import { setGroup } from "../lib/assignment";
import "../css/Start.css"
import { createRun } from "../lib/db/runs";
import supabase from '../lib/db/supabase-client'

export default function Start () {
    const navigate = useNavigate();

    const ensureAnonSession = async () => {
        const {data: {session}, error:sessionErr} = await supabase.auth.getSession();
        if(sessionErr){
            console.error(sessionErr)
            return false
        }
        if(session) return true

        const { data, error } = await supabase.auth.signInAnonymously();
        if (error) {
            console.error(error);
            return false;
        }
        return true

    }

    const startDark = async () => {
        const successfulUse = await ensureAnonSession()
        if (!successfulUserAuth) return;

        const run = await createRun({runStatus:"started",designStrategy:1});
        if (!run) return;

        localStorage.setItem("run_id",String(run.run_id))

        setGroup("dark");
        navigate("/scenario/1/step/1")
    }

    const startNudge = async () => {
        const successfulUserAuth = await ensureUserAuth()
        if (!successfulUserAuth) return;

        const run = await createRun({runStatus:"started",designStrategy:2});
        if(!run) return

        localStorage.setItem("run_id",String(run.run_id))

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