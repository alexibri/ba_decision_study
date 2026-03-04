import { useNavigate } from "react-router-dom";
import { setGroup } from "../lib/assignment/group";
import "../css/start.css"
import { createRun, getActiveRunForUser } from "../lib/db/runs";
import { ensureAnonSession } from "../lib/auth/ensureAnonSession";
import { useSingleSubmit } from "../lib/hooks/useSingleSubmit";

export default function Start() {
    const navigate = useNavigate();
    const runOnce = useSingleSubmit()
    const [loading, setLoading] = useState(false)

    const onChoice = async (choice,nav) => 

    const startWithDesign = ({ currentDesignStrategy, groupName }) => {
        return runOnce(async () => {
            const session = await ensureAnonSession()
            if (!session?.user) return;

            const userID = session.user.id
            const existing = await getActiveRunForUser({ userID, currentDesignStrategy })

            let runID = existing?.run_id

            if (!runID) {
                const run = await createRun({ runStatus: "started", designStrategy: currentDesignStrategy });
                if (!run?.run_id) return;
                runID = run.run_id
            }

            localStorage.setItem("run_id", String(runID))
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
                        <button className="button" onClick={() => startWithDesign({ currentDesignStrategy: 1, groupName: "dark" })}>Dark Patterns</button>
                        <button className="button" onClick={() => startWithDesign({ currentDesignStrategy: 2, groupName: "nudge" })}>Nudge</button>

                        <div className="startPopUpButton">
                            <button className="startStudyButton" onClick={() => navigate("/")}>
                                Start
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
