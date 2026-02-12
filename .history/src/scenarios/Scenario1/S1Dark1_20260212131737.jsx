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
                    Cookie Information
                    <br />
                    This website uses cookies to ensure the proper technical functioning of the website and, where applicable, to analyze usage and improve services.
                    Cookies are small text files that are stored on your device when you visit a website. They may contain information such as a session identifier, user preferences, or anonymized usage data.
                    <br />
                    We distinguish between the following categories of cookies:
                    <br />
                    Essential cookies
                    These cookies are technically necessary to provide core website functionality, including security, session management, and accessibility. They are set automatically and cannot be disabled.

                    Optional cookies (e.g., analytics)
                    These cookies collect aggregated information about how visitors use the website. They help us understand user behavior and improve performance. These cookies are only activated with your consent.

                    Storage Duration

                    Some cookies are deleted automatically when you close your browser (session cookies). Others remain stored for a defined period unless manually deleted.

                    Legal Basis

                    Essential cookies are processed on the basis of legitimate interest in accordance with applicable data protection regulations.
                    Optional cookies are processed only on the basis of your consent.

                    Managing Your Preferences

                    You may withdraw or modify your consent at any time via the privacy settings.
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