import { useNavigate } from "react-router-dom";
import "../../css/scenario3.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function S3Dark1() {
    const navigate = useNavigate();

    return <div className="s1screen">

        <div className="s1card">

            <h1>Account</h1>

            <div className="innerCard">

                <div className="s1cardHeader">

                    <AccountCircleIcon fontSize="large"/>

                    <div className="accountRow">
                        <div className="">Username:</div>
                    </div>
                    <h2>Username:</h2>
                    <p></p>
                    <h2>subject123</h2>
                </div>

                <div className="s1cardHeader">

                    <h2>Account Details:</h2>
                    <p></p>
                    <h2>DE 1234 3232 xxxx xxxx xx</h2>
                </div>

                <div className="s1cardHeader">

                    <h2>Country, City:</h2>
                    <p></p>
                    <h2>Germany, Hamburg</h2>
                </div>

                <div className="s1button">
                    <button className="s1accept" onClick={() => navigate("/scenario/3/step/1")}>
                        Delete Account
                    </button>
                </div>
            </div>


        </div>

    </div>
}