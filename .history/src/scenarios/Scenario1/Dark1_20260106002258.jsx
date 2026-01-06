import { useNavigate } from "react-router-dom";
import "../../css/scenario1.css"

export default function Dark1() {
    const navigate = useNavigate();

    return <div className="s1screen">
        

        <div className="s1card">

            <h1>...Before you start</h1>

            <div className="s1cardHeader">
                <h2 className="s1-subtitle">For legal reasons</h2>
            </div>

            <div className="s1button">
                <button className="s1accept" onClick={() => navigate("/scenario/2")}>
                    Accept all
                </button>
            </div>

            <div className="s1scroll">
                <p>
                    1. Scope of Application

These Terms and Conditions (“Terms”) govern the use of this digital service and all related content, 
features, and functionalities provided through this interface. By accessing or using this service, the user acknowledges having read, understood, and agreed to these Terms in their entirety. If the user does not agree to these Terms, the service should not be used.

2. Service Description

The service provides access to digital content and interactive elements. The provider reserves the right to modify, suspend, or discontinue any part of the service at any time without prior notice. No guarantee is given regarding availability, accuracy, or completeness of the provided content.
                </p>
                <p>
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                    dolor sit amet. Lorem ipsum dolor sit amet, consectetur sadipscing
                    elit 
                </p>
            </div>

            <div className="s1buttons">
                <button className="s1termsAndConditions" onClick={() => navigate("/scenario/2")}>
                    Read terms and Conditions
                </button>
            </div>

            <div>
                <button className="s1decline" onClick={() => navigate("/scenario/2")}>
                    Decline all
                </button>
            </div>

        </div>

    </div>
}