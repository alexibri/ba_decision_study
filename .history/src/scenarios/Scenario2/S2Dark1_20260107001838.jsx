import { useNavigate } from "react-router-dom";
import "../../css/scenario2.css"

export default function S2Dark1() {
    const navigate = useNavigate();

    return <div className="s1screen fade-in">

        <div className="s1card">

            <h1>Security</h1>

            <div className="innerCard">

                <div className="s1cardHeader">

                    <div className="accountRow">
                        <div className="label">Enable Notifications to stay informed about security issues and suspicious activity</div>
                    </div>
                </div>

                <div className="popUp">

                    <div className="s1buttonPopUp">
                    <button className="s1accept" onClick={() => navigate("/end")}>
                        Yes, keep my Account safe
                    </button>
                    </div>

                    <div className="s1buttonPopUp">
                    <button className="s1accept" onClick={() => navigate("/end")}>
                        Continue
                    </button>
                    </div>
                
                </div>

                <div className="s1button">
                    <button className="s1accept" onClick={() => navigate("/scenario/2/step/2")}>
                        No, I don't care about my account security
                    </button>
                </div>
            </div>

            </div>
        </div>
}