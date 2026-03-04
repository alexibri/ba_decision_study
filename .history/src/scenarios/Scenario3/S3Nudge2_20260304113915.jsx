import "../../css/scenario3.css"
import { useResponseTracker } from "../../lib/hooks/useResponseTracker";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { finishCurrentRun } from "../../lib/usecases/finishCurrentRun";

export default function S3Nudge2() {
    const { handleChoice, loading } = useResponseTracker(6);

    const onCancel = async () => {
        const success = await handleChoice("cancel_delete_account", { to: "/end", replace: true })
        if (success) await finishCurrentRun();
    }

    const onConfirm = async () => {
        const success = await handleChoice("confirm_delete_account", { to: "/end", replace: true });
        if (succ) await finishCurrentRun();
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
                        <div className="s3question">What would you like to do?</div>
                    </div>

                    <div className="s3buttonPopUp">
                        <button className="s3decision" disabled={loading} onClick={onConfirm}>
                            Delete Account
                        </button>
                    </div>

                    <div className="s3buttonPopUp">
                        <button className="s3decision" disabled={loading} onClick={onCancel}>
                            Keep Account
                        </button>
                    </div>

                </div>
            </div>


        </div>

    </div>
}