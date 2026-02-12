import "../../css/scenario1.css"
import { useResponseTracker } from "../../lib/hooks/useResponseTracker";

export default function S1Nudge1() {
    const {handleChoice} = useResponseTracker(2);

    return <div className="s1screen fade-in">

        <div className="s1card">

            <h1>...Before you start</h1>

            <div className="s1cardHeader">
                <h2 className="s1subtitle">for legal reasons</h2>
            </div>

            <p>
                Essential cookies (required) <br />
                These keep you logged in, remember your cart, and ensure a secure connection. They do NOT track you across sites.
            </p>

            <div className="s1button">
                <button className="s1accept" onClick={() => {handleChoice("accept_essential",{ to:"/scenario/1/step/2", replace:true})}}>
                    Accept essential (Recommended)
                </button>
            </div>

            <div className="s1button">
                <button className="s1accept" onClick={() => {handleChoice("decline_all",{ to:"/scenario/1/step/2", replace:true})}}>
                    Decline all optional cookies
                </button>
            </div>

            <div className="s1button">
                <button className="s1accept" onClick={() =>{handleChoice("accept_all",{ to:"/scenario/1/step/2", replace:true})}}>
                    Accept all cookies
                </button>
            </div>

            <p>
                You can change your preferences later in Settings.
            </p>

            <div className="s1scroll">
                <h3>Cookie Information</h3>

                <p>
                    This website uses cookies to ensure the proper technical functioning of the website and,
                    where applicable, to analyze usage and improve services.
                </p>

                <p>
                    Cookies are small text files that are stored on your device when you visit a website.
                    They may contain information such as a session identifier, user preferences,
                    or anonymized usage data.
                </p>

                <h4>Categories of Cookies</h4>

                <p>
                    <strong>Essential cookies</strong><br />
                    These cookies are technically necessary to provide core website functionality,
                    including security, session management, and accessibility.
                    They are set automatically and cannot be disabled.
                </p>

                <p>
                    <strong>Optional cookies (e.g., analytics)</strong><br />
                    These cookies collect aggregated information about how visitors use the website.
                    They help us understand user behavior and improve performance.
                    These cookies are only activated with your consent.
                </p>

                <h4>Storage Duration</h4>
                <p>
                    Some cookies are deleted automatically when you close your browser (session cookies).
                    Others remain stored for a defined period unless manually deleted.
                </p>

                <h4>Legal Basis</h4>
                <p>
                    Essential cookies are processed on the basis of legitimate interest in accordance
                    with applicable data protection regulations.
                    Optional cookies are processed only on the basis of your consent.
                </p>

                <h4>Managing Your Preferences</h4>
                <p>
                    You may withdraw or modify your consent at any time via the privacy settings.
                </p>
            </div>

        </div>

    </div>
}