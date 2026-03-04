import "../../css/transition.css"
import { useNavigate } from "react-router-dom";

export default function S1Transition() {
    const navigate = useNavigate();

    return <div className="transitionScreen fade-in">
        <div className="transitionCard">
            <h1 className="transitionSubtitle">Second Part</h1>
            <button className="s1accept" onClick={() => navigate("/scenario/2/step/1", { replace: true })}>
                Continue
            </button>
        </div>
    </div>
}

