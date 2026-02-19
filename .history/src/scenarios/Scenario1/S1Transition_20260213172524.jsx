import "../../css/start.css"
import { useNavigate } from "react-router-dom";

export default function S1Transition() {
    const navigate = useNavigate();
    
    return  <div className="s1screen fade-in">
                <div className="s1card">
                    <h1 className="s1transitionSubtitle">Second Part</h1>
                    <button className="s1accept" onClick={() => navigate("/scenario/2/step/1",{replace:true})}>
                        Continue
                    </button>
                </div>
            </div>
}