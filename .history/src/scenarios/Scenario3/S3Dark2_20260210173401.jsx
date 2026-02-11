
import "../../css/scenario3.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function S3Dark2() {
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

                <div className="s3popUp">

                    <div className="s3accountRow">
                        <div className="question">Are you sure you want to cancel your Account?</div>
                    </div>

                    <p></p>

                    <div className="s3buttonPopUp">
                    <button className="s3accept" onClick={() => navigate("/end")}>
                        Cancel
                    </button>
                    </div>

                    <div className="s3buttonPopUp">
                    <button className="s3accept" onClick={() => navigate("/end")}>
                        Continue
                    </button>
                    </div>
                
                </div>
            </div>


        </div>

    </div>
}