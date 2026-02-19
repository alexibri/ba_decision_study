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