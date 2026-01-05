import { useNavigate } from "react-router-dom";

export default function Dark1() {
    const navigate = useNavigate();

    return <div className="screen">
        <h2>Scenario 1</h2>


        <button onClick={() => navigate("/scenario/2")}>
            Continue
        </button>
    </div>
}