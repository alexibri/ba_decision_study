import { useNavigate } from "react-router-dom";
import { setGroup } from "../lib/assignment/group";
import "../css/Start.css"
import { createRun } from "../lib/db/runs";
import supabase from '../lib/db/supabase-client'

export default function Start() {
    const navigate = useNavigate();


    const ensureAnonSession = async () => {
        const { data: { session }, error: sessionErr } = await supabase.auth.getSession();
        if (sessionErr) {
            console.error(sessionErr)
            return null
        }
        if (session) return session

        const { data, error: signInErr } = await supabase.auth.signInAnonymously();
        if (signInErr) {
            console.error(signInErr);
            return null;
        }
        return data.session

    }

    const startWithDesign = async ({designStrategy, groupName}) => {
        const session = await ensureAnonSession()
        if (!session?.user) return;

        const currentUserId = session.user.id
        const existingRunId = localStorage.getItem("run_id")
        let runIdToUse = null;

!!        if (existingRunId) { 
            !!const existing = await getRunById(existingRunId)

            const isValid = existing &&
                existing.user_id === currentUserId &&
                existing.run_status === "started" &&
                !existing.run_end_at &&
                existing.design_strategy_id === designStrategy;

            if (isValid) {
                runIdToUse = existing.run_id
            } else {
                localStorage.removeItem("run_id")
            }
        }

        if (!runIdToUse) {
            const run = await createRun({ runStatus: "started", designStrategy: 1 });
            if (!run) return;
            localStorage.setItem("run_id", String(run.run_id))
            runIdToUse = run.run_id
        }
        setGroup(groupName);
        navigate("/scenario/1/step/1")
    }

    return (
        <div className="start fade-in">
            <div className="s1screen">
                <div className="s1card">
                    <h1>Start</h1>
                    <div className="stack">
                        <button className="button" onClick={() => startWithDesign({designStrategy:1, groupName:"dark"})}>Dark Patterns</button>
                        <button className="button" onClick={() => startWithDesign({designStrategy:2, groupName:"nudge"})}>Nudge</button>

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