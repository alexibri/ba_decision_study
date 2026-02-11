import "../../css/scenario1.css"
import { useNavigate } from "react-router-dom";

export default function S2Transition() {
    const navigate = useNavigate();
    const [enabled,setEnabled] = useState();

    useEffect( () => {
        const timeout = setTimeout( () => setEnabled(true), 1000);
        return () => clearTimeout(timeout);
    }, []);


    return   <div className="s1screen fade-in">
                <div className="s1card">
                    <h1 className="s1transitionSubtitle">Third Part</h1>

                <div className="s1buttonPopUp">
                    <button className="s1accept" onClick={() => navigate("/scenario/3/step/1")}>
                        Continue
                    </button>
                    </div>
                </div>
                
            </div>
}