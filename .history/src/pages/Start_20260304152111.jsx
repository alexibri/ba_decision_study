import "../css/start.css"
import { useNavigate } from "react-router-dom";
import { setGroup } from "../lib/assignment/group";
import { createRun } from "../lib/db/runs";
import { ensureAnonSession } from "../lib/auth/ensureAnonSession";
import { useSingleSubmit } from "../lib/hooks/useSingleSubmit";
import { useState } from "react";



export default function Start() {
    const navigate = useNavigate();
    const runOnce = useSingleSubmit()
    const [loading, setLoading] = useState(false)

    const startWithDesign = ({ currentDesignStrategy, groupName }) => {
        return runOnce(async () => {
            setLoading(true)
            const session = await ensureAnonSession()
            if (!session?.user) {
                setLoading(false)
                return
            }
            const run = await createRun({ runStatus: "started", designStrategy: currentDesignStrategy });
            if (!run?.run_id) {
                setLoading(false)
                return
            }

            localStorage.setItem("run_id", String(run.run_id))
            setGroup(groupName);

            navigate("/scenario/1/step/1", { replace: true })
        })
    }

    return (
        <div className="start fade-in">
            <div className="startScreen">
                <div className="startCard">
                    <h1>Start</h1>
                    <div className="stack">
                        <button className="button" disabled={loading} onClick={() => startWithDesign({ currentDesignStrategy: 1, groupName: "dark" })}>Dark Patterns</button>
                        <button className="button" disabled={loading} onClick={() => startWithDesign({ currentDesignStrategy: 2, groupName: "nudge" })}>Nudge</button>

                        <div className="startPopUpButton">
                            <button className="startStudyButton" disabled={loading} onClick={() => navigate("/")}>
                                Start
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
