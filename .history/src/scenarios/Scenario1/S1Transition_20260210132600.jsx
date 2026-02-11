import { useNavigate } from "react-router-dom";
import "../../css/scenario1.css"

export default function S1Transition() {
    const navigate = useNavigate();
    
    return   <div className="s1screen fade-in">
                <div className="s1card">
                    <h1 className="s1transitionSubtitle">Second Part</h1>

                <div className="s1buttonPopUp">
                    <button className="s1accept" onClick={() => navigate("/scenario/2/step/1")}>
                        Continue
                    </button>
                    </div>
                </div>
                
            </div>
}