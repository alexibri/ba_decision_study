import "../css/Start.css"

export default function End() {
    return <div>
        <div className="end">
            <div className="s1screen">
                <div className="s1card">
                    <h1>Done.</h1>
                    <h1>Thank you for participating</h1>
            <div className="stack">

                <div className="s1buttonPopUp">
                    <button className="s1accept" onClick={() => navigate("/")}>
                        You may enter your email address in the linked form for a chance to win a €10 Amazon voucher.
Your email address will be collected separately and not linked to your responses.
                    </button>
                    </div>
            </div>
                </div>
                
            </div>
        </div>
    </div>
}