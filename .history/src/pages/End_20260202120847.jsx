import "../css/Start.css"

export default function End() {
    return <div>
        <div className="end">
            <div className="s1screen">
                <div className="s1card">
                    <h1>Done.</h1>
                    <h2>Thank you for participating</h1>
                    <h3>You may enter your email address in the linked form for a chance to win a €10 Amazon voucher.</h3>
                    <h3>Your email address will be collected separately and not linked to your responses.</h3>
            <div className="stack">

                <div className="s1buttonPopUp">
                    <button className="s1accept" onClick={() => navigate("/")}>
                        Go To the 
                    </button>
                    </div>
            </div>
                </div>
                
            </div>
        </div>
    </div>
}