import "../../css/scenario1.css"

export default function S1Transition() {
    return <div>
        <div className="end">
            <div className="s1screen">
                <div className="transitioncard">
                    <div className="s1cardHeader">
                <h2 className="transitionSubtitle">Next Part</h2>
            </div>
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