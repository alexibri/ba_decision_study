import { useNavigate } from "react-router-dom";
import "../../css/scenario1.css"

export default function Dark1() {
    const navigate = useNavigate();

    return <div className="s1screen">
        <h1>...Before you start</h1>

        <div className="s1card">
            <div className="s1cardHeader">
                <h2 className="s1-subtitle">For legal reasons</h2>
            </div>

            <div className="s1button">
                <button className="s1accept" onClick={() => navigate("/scenario/2")}>
                    Accept all
                </button>
            </div>

            <div className="s1scroll">
                <p>
                    Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum.
                </p>
                <p>
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                    dolor sit amet. Lorem ipsum dolor sit amet, consectetur sadipscing
                    elitr…
                </p>
            </div>

            <div className="s1buttons">
                <button className="s1termsAndConditions" onClick={() => navigate("/scenario/2")}>
                    Read terms and Conditions
                </button>
            </div>


        </div>

    </div>
}