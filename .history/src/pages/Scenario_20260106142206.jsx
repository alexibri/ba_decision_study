import { useParams } from "react-router-dom";
import { getGroup } from "../lib/assignment";

import Dark1 from "../scenarios/Scenario1/S1Dark1";
import Nudge1 from "../scenarios/Scenario1/S1Nudge1";

export default function Scenario () {
    const {id} = useParams();
    const group = getGroup();
    const {sid, stepid}

    if(id === "1"){
        return group === "nudge" ? <S1Nudge1 /> : <S1Dark1 />
    }

    if(id === "2"){
        return group === "nudge" ? <S2Nudge1 /> : <S2Dark1 />
    }
    
    return <div>
        Scenario {id} ist noch nicht gebaut
    </div>

}