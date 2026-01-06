import { useNavigate } from "react-router-dom";
import "../../css/scenario1.css"

export default function Dark1() {
    const navigate = useNavigate();

    return <div className="s1screen">


        <div className="s1card">

            <h1>General Terms and Conditions</h1>

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
                    7. Intellectual Property

                    All content, including but not limited to text, graphics, layout, and design elements,
                    is protected by intellectual property laws. Unauthorized reproduction, distribution, or modification of
                    any content is prohibited without prior written consent from the provider.

                    8. Limitation of Liability

                    The provider shall not be liable for any direct or indirect damages resulting from the
                    use or inability to use the service. This includes, but is not limited to, loss of data,
                    loss of profits, or service interruptions. Use of the service is at the user’s own risk.

                    9. Changes to the Terms

                    The provider reserves the right to modify these Terms at any time. Updated Terms may
                    become effective immediately upon publication. Continued use of the service after changes
                    constitutes acceptance of the revised Terms.

                    10. Termination

                    The provider may terminate or restrict access to the service at any time without prior notice,
                    especially in cases of suspected misuse or violation of these Terms.

                    11. Governing Law

                    These Terms shall be governed by and construed in accordance with applicable law.
                    The place of jurisdiction shall be determined by the provider, unless mandatory legal
                    provisions state otherwise.

                    12. Final Provisions

                    Should individual provisions of these Terms be invalid or unenforceable,
                    the remaining provisions shall remain unaffected. The invalid provision shall be replaced by a valid provision
                    that most closely reflects the original intent.
                </p>
                <div className="s1button">
                    <button className="s1accept" onClick={() => navigate("/scenario/1/dark2")}>
                        Accept all
                    </button>
                </div>

            </div>

            <div>
                <button className="s1decline" onClick={() => navigate("/scenario/2")}>
                    Decline all
                </button>
            </div>

        </div>

    </div>
}