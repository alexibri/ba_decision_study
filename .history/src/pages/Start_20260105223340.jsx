import { useNavigate } from "react-router-dom";

export default function Start () {
    const navigate = useNavigate();

    const startDark = () => {
        setGroup("dark");
        navigate("/scenario/1")
    }
    const startNudge = () => {
            setGroup("nudge");
            navigate("/scenario/1")
    }


    return(
        <div className="start">
            <h1>Start</h1>
            <p>Bitte eine Version auswählen</p>
            <div className="stack">
                <button className="button" onClick={startDark}>Dark Patterns</button>
                <button className="button" onClick={navigate("")}>Nudge</button>
            </div>

        </div>
    )

}