import { useNavigate } from "react-router-dom";
import "../../css/scenario2.css"

export default function S2Dark1() {
    const navigate = useNavigate();

    return <div className="s1screen fade-in">


        <div className="s1card">

            <div className="accountRow">
                        <div className="value">Enable Notifications to stay informed about security issues and suspicious activity</div>
            </div>

            <div className="popUp">

                    <div className="accountRow">
                        <div className="question">Are you sure you want to cancel your Account?</div>
                    </div>

                    <p></p>

                    <div className="s1buttonPopUp">
                    <button className="s1accept" onClick={() => navigate("/end")}>
                        Cancel
                    </button>
                    </div>

                    <div className="s1buttonPopUp">
                    <button className="s1accept" onClick={() => navigate("/end")}>
                        Continue
                    </button>
                    </div>
                
                </div>

            <div className="cardStack">
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