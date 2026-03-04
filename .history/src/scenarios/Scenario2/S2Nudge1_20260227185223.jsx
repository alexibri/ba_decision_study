import "../../css/scenario2.css"
import { useResponseTracker } from "../../lib/hooks/useResponseTracker";

export default function S2Nudge1() {
    const { handleChoice } = useResponseTracker(4);

    return <div className="s2screen fade-in">

        <div className="s2card">

            <h1>Security</h1>

            <div className="s2cardInner">

                <div className="s2cardHeader">

                    <div className="s2accountRow">
                        <h2>Enable Notifications to stay informed about security issues and suspicious activity</h2>
                    </div>
                </div>
                <div className="s2popUp">

                    <div className="s2button">
                        <button className="s2decision" onClick={() => { handleChoice("disable_notifications", { to: "/scenario/2/step/2", replace: true }) }}>
                            Continue without notifications
                        </button>
                    </div>
                    <br /><br />

                    <div className="s2button">
                        <button className="s2accept" onClick={() => { handleChoice("enable_notifications", { to: "/scenario/2/step/2", replace: true }) }}>
                            Enable security notifications
                        </button>
                    </div>

                </div>
            </div>

        </div>
    </div>
}