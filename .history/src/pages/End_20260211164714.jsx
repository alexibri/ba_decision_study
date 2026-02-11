import "../css/Start.css"

export default function End() {

    function forwardBtn() {
        window.open("https://forms.cloud.microsoft/e/TterNuyt86")
    }

    return <div>
        <div className="end">
            <div className="s1screen">
                <div className="s1card">
                    <h2>Done.</h2>
                    <h2>Thank you for participating</h2>
                    <h3>You may enter your email address in the linked form for a chance to win a €10 Amazon voucher.</h3>
                    <h3>Your email address will be collected separately and not linked to your responses.</h3>
                    <div className="stack">

                        <div className="s1buttonPopUp">
                            <button className="s1accept" onClick={forwardBtn}>
                                Go to the form
                            </button>
                        </div>
                    </div>
                    <h3><</h3>
                </div>

            </div>
        </div>
    </div>
}