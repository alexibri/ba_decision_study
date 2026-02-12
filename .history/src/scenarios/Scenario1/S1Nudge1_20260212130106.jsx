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
                Essential cookies (required)
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
            </div>

        </div>

    </div>
}