import { useNavigate } from "react-router-dom";
import "../../css/scenario1.css"

export default function Dark1() {
    const navigate = useNavigate();

    return <div className="s1screen">


        <div className="s1card">

            <h1>...Before you start</h1>

            <div className="s1cardHeader">
                <h2 className="s1subtitle">For legal reasons</h2>
            </div>

            <div className="s1button">
                <button className="s1accept" onClick={() => navigate("/scenario/2")}>
                    Accept all
                </button>
            </div>
                <button className="s1termsAndConditions" onClick={() => navigate("/scenario/1/dark2")}>
                    Read terms and Conditions
                </button>

            <div>
                <button className="s1decline" onClick={() => navigate("/scenario/2")}>
                    Decline all
                </button>
            </div>

        </div>

    </div>
}