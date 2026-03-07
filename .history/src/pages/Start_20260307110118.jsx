import "../css/start.css"
import { useNavigate } from "react-router-dom";
import { setGroup } from "../lib/assignment/group";
import { createRun } from "../lib/db/runs";
import { ensureAnonSession } from "../lib/auth/ensureAnonSession";
import { useSingleSubmit } from "../lib/hooks/useSingleSubmit";
import { useState } from "react";

export default function Start() {

    const STUDY_GROUP = "dark"
    //const STUDY_GROUP = "nudge"
    const DESIGN_STRATEGY = STUDY_GROUP === "dark" ? 1 : 2

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
                    <h1>Study on the Influence of <br /> Design Elements</h1>
                    <h3>Please go through each screen the way you normally would. 
                        <br />
                        There are no right or wrong answers.
                        <br />
                        <h3>The study takes approximately 5 minutes. Your data will be stored anonymously and used solely for research purposes.
                    </h3>
                    <div className="stack">
                        <div className="startPopUpButton">
                            <button className="startStudyButton" disabled={loading} onClick={() => startWithDesign({ currentDesignStrategy:DESIGN_STRATEGY, groupName:STUDY_GROUP })}>
                                Start
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
