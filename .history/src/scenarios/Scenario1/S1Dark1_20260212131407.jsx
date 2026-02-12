import { replace } from "react-router-dom";
import "../../css/scenario1.css"
import { useResponseTracker } from "../../lib/hooks/useResponseTracker";

export default function S1Dark1() {
    const { handleChoice } = useResponseTracker(1);

    return <div className="s1screen fade-in">

        <div className="s1card">

            <h1>...Before you start</h1>

            <div className="s1cardHeader">
                <h2 className="s1subtitle">For legal reasons</h2>
            </div>

            <div className="s1button">
                <button className="s1accept" onClick={() => { handleChoice("accept_all", { to: "/scenario/1/step/2", replace: true }) }}>
                    Accept all cookies
                </button>
            </div>

            <div className="s1scroll">
                <p>
                    Cookies

                    We use cookies to ensure the secure and reliable operation of this website.
                    With your consent, we may also use optional cookies to understand how the website is used and to improve its performance.

                    Cookies are small text files stored on your device. They do not grant us direct access to your device.

                    We distinguish between:

                    Essential cookies – Required for technical functionality and security. These cannot be disabled.

                    Optional cookies – Used for analytics and service improvement. These are only activated with your consent.

                    Your choice is voluntary and will not affect access to the core features of this website.
                    You may change your preferences at any time.
                </p>
            </div>

            <div className="s1button">
                <button className="s1decline" onClick={() => { handleChoice("decline_all", { to: "/scenario/1/step/2", replace: true }) }}>
                    Decline all cookies
                </button>
            </div>

        </div>

    </div>
}