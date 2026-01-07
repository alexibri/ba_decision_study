import { useNavigate } from "react-router-dom";
import "../../css/scenario2.css"

export default function S2Dark1() {
    const navigate = useNavigate();

    return <div className="s1screen fade-in">


        <div className="s1card">

            <div className="accountRow">
                        <div className="value">Enable Notifications to stay informed about security issues and suspicious activity</div>
            </div>

            <div className="cardStack">
                <div className="s1button">
                    <button className="s1accept" onClick={() => navigate("/scenario/2/step/1")}>
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

    </div>
}