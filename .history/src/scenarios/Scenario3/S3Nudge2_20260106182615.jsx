import { useNavigate } from "react-router-dom";
import "../../css/scenario3.css"

export default function S3Nudge2() {
    const navigate = useNavigate();

    return <div className="s1screen">

        <div className="s1card">

            <h1>Account</h1>

            <div className="s1cardHeader"> -
                <h2 className="s1subtitle">Enable Notifications to stay informed about security issues and suspicious activity</h2>
            </div>

            <div className="s1button">
                <button className="s1accept" onClick={() => navigate("/scenario/3/step/1")}>
                    Yes, keep my Account safe
                </button>
            </div>
            <div className="s1button">
                <button className="s1accept" onClick={() => navigate("/scenario/3/step/1")}>
                    No, I don't care about my account security
                </button>
            </div>
        </div>
        
    </div>
}