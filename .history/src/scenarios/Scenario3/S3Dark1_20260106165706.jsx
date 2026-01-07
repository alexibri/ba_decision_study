import { useNavigate } from "react-router-dom";
import "../../css/scenario1.css"

export default function S3Dark1() {
    const navigate = useNavigate();

    return <div className="s1screen">

        <div className="s1card">

            <h1>Account</h1>

            <div className="innerCard">

                <div className="s1cardHeader">

                    <h2>Username:</h2>
                    <p></p>
                    <h2>subject123</h2>
                </div>

                <div className="s1cardHeader">

                    <h2>Username:</h2>
                    <p></p>
                    <h2>subject123</h2>
                </div>

                <div className="s1cardHeader">

                    <h2>Username:</h2>
                    <p></p>
                    <h2>subject123</h2>
                </div>

                <div className="s1button">
                    <button className="s1accept" onClick={() => navigate("/scenario/3/step/1")}>
                        Yes, keep my Account safe
                    </button>
                </div>

                <p></p>

                <div className="s1button">
                    <button className="s1accept" onClick={() => navigate("/scenario/3/step/1")}>
                        No, I don't care about my account security
                    </button>
                </div>

            </div>


        </div>

    </div>
}