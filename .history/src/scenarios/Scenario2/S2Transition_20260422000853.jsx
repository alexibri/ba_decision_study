import "../../css/transition.css"
import { useNavigate } from "react-router-dom"

export default function S2Transition() {
    const navigate = useNavigate()

    return <div className="transitionScreen fade-in">
        <div className="transitionCard">
            <h1 className="transitionSubtitle">Third Part</h1>
            <button className="transitionButton" onClick={() => navigate("/scenario/3/step/1", { replace: true })}>
                Continue
            </button>
        </div>
    </div>
}