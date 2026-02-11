import { useNavigate } from "react-router-dom";
import { setGroup } from "../lib/assignment";
import "../css/Start.css"


export default function Start () {
    const navigate = useNavigate();

    const [newInsert]

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