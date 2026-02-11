import "../../css/scenario3.css"
import { updateRun } from "../../lib/db/runs";
import { useResponseTracker } from "../../lib/hooks/useResponseTracker";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function S3Nudge2() {
    const { handleChoice } = useResponseTracker(8);

    const finishCurrentRun = async () => {
        const run = await updateRun({runID:Number(localStorage.getItem("run_id")) , runStatus:'finished'});
        if (!run) return;
    }

    const onCancel = async () => {
        await handleChoice("cancel_delete_account", { to: "/end", replace: true })
        await finishCurrentRun();
    }

    const onConfirm = async () => {
        await handleChoice("confirm_delete_account", { to: "/end", replace: true });
        await finishCurrentRun();
    }
    
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
                        <div className="question">What would you like to do?</div>
                    </div>

                    <p></p>

                    <div className="s3buttonPopUp">
                    <button className="s3accept" onClick={onConfirm}>
                        Delete Account
                    </button>
                    </div>

                    <div className="s3buttonPopUp">
                    <button className="s3accept" onClick={onCancel}>
                        Keep Account
                    </button>
                    </div>
                
                </div>
            </div>


        </div>

    </div>
}