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


    return <div className="transition fade-in">
            <div className="s2screen">
                <div className="transitioncard">
                    <h1 className="transitionSubtitle">Third Part</h1>

                <div className="s1buttonPopUp">
                    <button className="s1accept" onClick={() => navigate("/scenario/3/step/1")}>
                        Continue
                    </button>
                    </div>
                </div>
                
            </div>
        </div>
}