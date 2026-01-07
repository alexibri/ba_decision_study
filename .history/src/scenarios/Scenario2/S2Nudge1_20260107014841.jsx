import { useNavigate } from "react-router-dom";
import "../../css/scenario2.css"

export default function S2Dark1() {
    const navigate = useNavigate();

    return <div className="s1screen fade-in">


        <div className="s1card">

            <div className="s2accountRow">
                        <div className="value">Enable Notifications to stay informed about security issues and suspicious activity</div>
            </div>
            

            <div className="s2cardStack">
                <div className="s1button">
                    <button className="s1accept" onClick={() => navigate("/scenario/2/step/2")}>
                        Enable security notifications
                    </button>
                </div>
                <div className="s1button">
                    <button className="s1accept" onClick={() => navigate("/scenario/2/step/2")}>
                        Continue without notifications
                    </button>
                </div>
            </div>
        </div>

    </div>
}