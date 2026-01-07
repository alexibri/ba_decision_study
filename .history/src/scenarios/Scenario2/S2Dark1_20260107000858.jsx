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
                    <div className="accountRow">
                        <div className="value">subject123</div>
                    </div>
                </div>

                <div className="infoBlock">
                    <div className="label">Account Details:</div>
                    <div className="value">DE 1234 3232 xxxx xxxx xx</div>
                </div>

                <div className="infoBlock">
                    <div className="label">Country, City</div>
                    <div className="value">Germany, Hamburg</div>
                </div>

                <div className="s1button">
                    <button className="s1accept" onClick={() => navigate("/scenario/3/step/2")}>
                        Yes, keep my Account safe
                    </button>
                </div>

                <div className="s1button">
                    <button className="s1accept" onClick={() => navigate("/scenario/3/step/2")}>
                        No, I don't care about my account security
                    </button>
                </div>
            </div>

            </div>
        </div>
}