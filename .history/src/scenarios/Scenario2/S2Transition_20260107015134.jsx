import { useNavigate } from "react-router-dom";
import "../../css/scenario2.css"
import { useEffect, useState } from "react";

export default function S2Transition() {
    const navigate = useNavigate();
    const [enabled,setEnabled] = useState();

    useEffect( () => {
        const timeout = setTimeout( () => setEnabled(true), 1000);
        return () => clearTimeout(timeout);
    }, []);


    return <div className="s2screen">
                <div className="s2transitioncard">
                    <h1 className="s2transitionSubtitle">Third Part</h1>

                <div className="s2buttonPopUp">
                    <button className="s2accept" onClick={() => navigate("/scenario/3/step/1")}>
                        Continue
                    </button>
                    </div>
                </div>
                
            </div>
}