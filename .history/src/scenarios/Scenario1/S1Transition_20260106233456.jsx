import "../../css/scenario1.css"

export default function S1Transition() {
    return <div>
        <div className="end">
            <div className="s1screen">
                <div className="transitioncard">
                    <h1 className="transitionSubtitle">Next Part</h1>
            <div className="stack">

                <div className="s1buttonPopUp">
                    <button className="s1accept" onClick={() => navigate("/")}>
                        Continue
                    </button>
                    </div>
            </div>
                </div>
                
            </div>
        </div>
    </div>
}