import "../../css/scenario2.css"
import { useNavigate } from "react-router-dom";

export default function S2Transition() {
    const navigate = useNavigate();

    return <div className="s2screen fade-in">
        <div className="s2transitionCard">
            <h1 className="s2transitionSubtitle">Third Part</h1>
            <div className="s2button">
                <button className="s2decision" onClick={() => navigate("/scenario/3/step/1", { replace: true })}>
                    Continue
                </button>
            </div>
        </div>
    </div>
}