import { useParams } from "react-router-dom";
import Dark1 from "../scenarios/Scenario1/Dark1";
import Nudge1 from "../scenarios/Scenario1/Nudge1";

export default function Scenario () {
    const {id} = useParams();
    const group = getGroup();

    if(id === 1){
        return group === "nudge" ? <Nudge1 /> : <Dark1 />
    }
    
    return <div>
        Scenario {id} ist noch nicht gebaut
    </div>

}