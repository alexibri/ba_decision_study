
import "../../css/scenario3.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function S3Dark1() {
    const navigate = useNavigate();

    return <div className="s3screen fade-in">

        <div className="s3card">

            <h1>Account</h1>

            <div className="s3innerCard">

                <div className="s3cardHeader">

                    <AccountCircleIcon fontSize="large" />

                    <div className="s3accountRow">
                        <div className="label">Username:</div>
                    </div>
                    <div className="s3accountRow">
                        <div className="value">subject123</div>
                    </div>
                </div>

                <div className="s3infoBlock">
                    <div className="label">Account Details:</div>
                    <div className="value">DE 1234 3232 xxxx xxxx xx</div>
                </div>

                <div className="s3infoBlock">
                    <div className="label">Country, City</div>
                    <div className="value">Germany, Hamburg</div>
                </div>

                <div className="s3button">
                    <button className="s3accept" onClick={() => navigate("/scenario/3/step/2")}>
                        Delete Account
                    </button>
                </div>
            </div>


        </div>

    </div>
}