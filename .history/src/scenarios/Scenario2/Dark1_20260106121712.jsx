import { useNavigate } from "react-router-dom";
import "../../css/scenario1.css"

export default function Dark1() {
    const navigate = useNavigate();

    return <div className="s1screen">


        <div className="s1card">

            <div className="s1cardHeader">
                <h2 className="s1subtitle">Enable Notifications to stay informed about security issues and suspicious activity</h2>
            </div>

            <div className="s1button">
                <button className="s1accept" onClick={() => navigate("/scenario/2/")}>
                    Yes, keep my Account safe
                </button>
            </div>
                <button className="s1accept" onClick={() => navigate("/scenario/1/dark2")}>
                    No, I don't care about my account security
                </button>

            <div>
                <button className="s1decline" onClick={() => navigate("/scenario/2")}>
                    Decline all
                </button>
            </div>

        </div>

    </div>
}