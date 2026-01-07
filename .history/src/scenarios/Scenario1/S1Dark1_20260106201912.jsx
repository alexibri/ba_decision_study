import { useNavigate } from "react-router-dom";
import "../../css/scenario1.css"

export default function S1Dark1() {
    const navigate = useNavigate();

    return <div className="s1screen fade-in">

        <div className="s1card">

            <h1>...Before you start</h1>

            <div className="s1cardHeader">
                <h2 className="s1subtitle">For legal reasons</h2>
            </div>

            <div className="s1button">
                <button className="s1accept" onClick={() => navigate("/scenario/2/step/1")}>
                    Accept all
                </button>
            </div>

            <div className="s1scroll">
                <p>
                    1. Scope of Application
                    These Terms and Conditions (“Terms”) govern the use of this digital service and all related content,
                    features, and functionalities provided through this interface. By accessing or using this service,
                    the user acknowledges having read, understood, and agreed to these Terms in their entirety. If the user
                    does not agree to these Terms, the service should not be used.
                    2. Service Description
                    The service provides access to digital content and interactive elements. The provider re
                    serves the right to modify, suspend, or discontinue any part of the service at any time without
                    prior notice. No guarantee is given regarding availability, accuracy, or completeness of the provided content.
                </p>
                <p>
                    3. User Obligations
                    Users agree to use the service in compliance with all applicable
                    laws and regulations. Any misuse, including but not limited to unauthorized access,
                    data manipulation, or attempts to interfere with system integrity, is strictly prohibited.
                    The provider may restrict or terminate access in case of suspected violations.
                    4. Data Processing and Usage
                    By using the service, users consent to the collection and
                    processing of certain technical and usage-related data. This may include device information,
                    interaction patterns, and anonymized behavioral data. Such data may be used for service optimization, research purposes,
                    and statistical analysis.
                    Personal data, if collected, will be processed in
                    accordance with applicable data protection regulations. However, the provider does not guarantee
                    absolute security of transmitted or stored data.
                    5. Cookies and Tracking Technologies
                    This service may use cookies or similar technologies to ensure
                    functionality and improve user experience. Cookies may also be used to analyze usage behavior.
                    Users acknowledge that disabling cookies may limit certain features of the service.
                    6. Third-Party Services
                    The service may include links to or integrations with third-party services.
                    The provider assumes no responsibility for the content, availability, or data practices of such third parties.
                    Use of third-party services is subject to their respective terms and conditions.
                </p>
            </div>
                <button className="s1termsAndConditions" onClick={() => navigate("/scenario/1/step/2")}>
                    Read terms and Conditions
                </button>

            <div>
                <button className="s1decline" onClick={() => navigate("/scenario/2/step/1")}>
                    Decline all
                </button>
            </div>

        </div>

    </div>
}