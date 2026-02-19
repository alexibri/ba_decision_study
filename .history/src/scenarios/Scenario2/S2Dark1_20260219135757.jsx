import "../../css/scenario2.css"
import { useResponseTracker } from "../../lib/hooks/useResponseTracker";

export default function S2Dark1() {
    const { handleChoice } = useResponseTracker(3);

    return <div className="s2screen fade-in">

        <div className="s2card">

            <h1>Security</h1>

            <div className="s2innerCard">

                <div className="s2cardHeader">

                    <div className="s2accountRow">
                        <h2>Enable Notifications to stay informed about security issues and suspicious activity</h2>
                    </div>
                </div>
                <div className="s2popUp">

                    <div className="s2button">
                        <button className="s2accept" onClick={() => { handleChoice("enable_notifications", { to: "/scenario/2/step/2", replace: true }) }}>
                            Yes, keep my Account safe
                        </button>
                    </div>

                    <br /><br />

                    <div className="s2button">
                        <button className="s2accept" onClick={() => { handleChoice("disable_notifications", { to: "/scenario/2/step/2", replace: true }) }}>
                            No, I don't care about my account security
                        </button>
                    </div>

                </div>
            </div>

        </div>
    </div>
}