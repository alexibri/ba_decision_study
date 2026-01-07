import { useNavigate } from "react-router-dom";
import { setGroup } from "../lib/assignment";
import "../css/Start.css"


export default function Start () {
    const navigate = useNavigate();

    const startDark = () => {
        setGroup("dark");
        navigate("/scenario/1/step/1")
    }
    const startNudge = () => {
            setGroup("nudge");
            navigate("/scenario/1/step/1")
    }


    return(
        <div className="start">
            <div className="s1screen">
                <div className="s1card">
                    <h1>Start</h1>
            <p>Bitte eine Version auswählen</p>
            <div className="stack">
                <button className="button" onClick={startDark}>Dark Patterns</button>
                <button className="button" onClick={startNudge}>Nudge</button>
            </div>
                </div>
                
            </div>
        </div>
    )

    <div className="s1screen">

        <div className="s1card">

            <h1>Account</h1>

            <div className="innerCard">

                <div className="s1cardHeader">

                    <AccountCircleIcon fontSize="large" />

                    <div className="accountRow">
                        <div className="label">Username:</div>
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
                        Delete Account
                    </button>
                </div>
            </div>


        </div>

    </div>

}