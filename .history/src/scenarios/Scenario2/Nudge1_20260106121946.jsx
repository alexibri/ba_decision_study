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
                <button className="s1accept" onClick={() => navigate("/scenario/3")}>
                    Continue without notificationsEnable security notifications
                </button>
            </div>
                <button className="s1accept" onClick={() => navigate("/scenario/3")}>
                    Enable security notifications
                </button>
        </div>

    </div>
}