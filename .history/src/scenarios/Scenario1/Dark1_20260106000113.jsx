import { useNavigate } from "react-router-dom";
import "../../css/scenario1.css"

export default function Dark1() {
    const navigate = useNavigate();

    return <div className="s1screen">
        <h1>...Before you start</h1>

        <div className="s1card">
            <div className="scenario1cardHeader"></div>
        </div>

    </div>
}