import { useNavigate } from "react-router-dom";
import "../../css/scenario2.css"

export default function S2Dark1() {
    const navigate = useNavigate();

    return <div className="s2screen fade-in">

        <div className="s2card">

            <h1>Security</h1>

            <div className="s2innerCard">

                <div className="s2cardHeader">

                    <div className="s2accountRow">
                        <div className="label">Enable Notifications to stay informed about security issues and suspicious activity</div>
                    </div>
                </div>
                <div className="s2popUp">

                    <div className="s2button">
                    <button className="s1accept" onClick={() => navigate("/scenario/2/step/2")}>
                        Yes, keep my Account safe
                    </button>
                    </div>

                    <div className="s2button">
                    <button className="s1accept" onClick={() => navigate("/scenario/2/step/2")}>
                        No, I don't care about my account security
                    </button>
                    </div>
                
                </div>
            </div>

            </div>
        </div>
}