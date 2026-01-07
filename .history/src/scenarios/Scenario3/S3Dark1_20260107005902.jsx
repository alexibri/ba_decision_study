import { useNavigate } from "react-router-dom";
import "../../css/scenario3.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function S3Dark1() {
    const navigate = useNavigate();

    return <div className="s3screen fade-in">

        <div className="s3card">

            <h1>Account</h1>

            <div className="innerCard">

                <div className="s3cardHeader">

                    <AccountCircleIcon fontSize="large" />

                    <div className="accountRow">
                        <div className="label">Username:</div>
                    </div>
                    <div className="accountRow">
                        <div className="value">subject123</div>
                    </div>
                </div>

                <div className="infoBlock">
                    <div className="label">Account Details:</div>
                    <div className="value">DE 1234 3232 xxxx xxxx xx</div>
                </div>

                <div className="infoBlock">
                    <div className="label">Country, City</div>
                    <div className="value">Germany, Hamburg</div>
                </div>

                <div className="s3button">
                    <button className="s1accept" onClick={() => navigate("/scenario/3/step/2")}>
                        Delete Account
                    </button>
                </div>
            </div>


        </div>

    </div>
}