import { useParams } from "react-router-dom";
import { getGroup } from "../lib/assignment";

import S1Dark1 from "../scenarios/Scenario1/S1Dark1";
import S1Nudge1 from "../scenarios/Scenario1/S1Nudge1";
import S1Dark2 from "../scenarios/Scenario1/S1Dark1";
import S1Nudge2 from "../scenarios/Scenario1/S1Nudge1";

import S2Dark1 from "../scenarios/Scenario2/S2Dark1";
import S2Nudge1 from "../scenarios/Scenario2/S2Nudge1";

export default function Scenario () {
    const group = getGroup();
    const {sid, stepid} =useParams();

    const scenarios = {
        "1": {
            dark: {
                "1": S1Dark1,
                "2": S1Dark2
            },
            nudge: {
                "1": S1Nudge1,
                "2": S1Nudge2,
            }
        },
        "2": {
            dark: {
                "1": S2Dark1,
            },
            nudge: {
                "1": S2Nudge1,
            }
        }
    }

    const Component = scenarios?.[sid]?.[group]?.[step];

    if(!Component) {
        
    }
    
    return <div>
        Scenario {id} ist noch nicht gebaut
    </div>

}