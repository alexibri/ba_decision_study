import { useNavigate } from "react-router-dom";
import "../../css/scenario3.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function S3Dark2() {
    const navigate = useNavigate();

    return <div className="s1screen">

        <div className="s1card">

            <h1>Account</h1>

            <div className="innerCard">

                <div className="s1cardHeader">

                    <AccountCircleIcon fontSize="large" />

                    <div className="accountRow">
                        <div className="label">Username:</div>
                    </div>
                    <div className="accountRow">
                        <div className="value">subject123</div>
                    </div>
                </div>

                <div className="popUp">


                    
                    <div className="s1button">
                    <button className="s1accept" onClick={() => navigate("/scenario/3/step/2")}>
                        Delete Account
                    </button>
                    </div>

                    <div className="s1button">
                    <button className="s1accept" onClick={() => navigate("/scenario/3/step/2")}>
                        Delete Account
                    </button>
                    </div>
                
                </div>
            </div>


        </div>

    </div>
}