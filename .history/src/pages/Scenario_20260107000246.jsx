import { useParams } from "react-router-dom";
import { getGroup } from "../lib/assignment";
import React from "react";

import S1Dark1 from "../scenarios/Scenario1/S1Dark1";
import S1Nudge1 from "../scenarios/Scenario1/S1Nudge1";
import S1Dark2 from "../scenarios/Scenario1/S1Dark2";
import S1Nudge2 from "../scenarios/Scenario1/S1Nudge2";
import S1Transition from "../scenarios/Scenario1/S1Transition";

import S2Dark1 from "../scenarios/Scenario2/S2Dark1";
import S2Nudge1 from "../scenarios/Scenario2/S2Nudge1";
import S2Transition from "../scenarios/Scenario2/S2Transition";

import S3Dark1 from "../scenarios/Scenario3/S3Dark1";
import S3Nudge1 from "../scenarios/Scenario3/S3Nudge1";
import S3Dark2 from "../scenarios/Scenario3/S3Dark2";
import S3Nudge2 from "../scenarios/Scenario3/S3Nudge2";

export default function Scenario () {
    const group = getGroup();
    const {sid, stepid} =useParams();

    const scenarios = {
        "1": {
            dark: {
                "1": S1Dark1,
                "2": S1Dark2,
                "3": S1Transition,
            },
            nudge: {
                "1": S1Nudge1,
                "2": S1Nudge2,
                "3": S1Transition,
            }
        },
        "2": {
            dark: {
                "1": S2Dark1,
            },
            nudge: {
                "1": S2Nudge1,
            }
        },
        "3": {
            dark: {
                "1": S3Dark1,
                "2": S3Dark2
            },
            nudge: {
                "1": S3Nudge1,
                "2": S3Nudge2
            }
        }
    }

    const Component = scenarios?.[sid]?.[group]?.[stepid];

    if(!Component) {
        return <div>
            Scenario ist noch nicht gebaut
        </div>
    }
    
    return React.createElement(Component);
}