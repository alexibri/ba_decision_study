import "../../css/scenario3.css"
import { updateRun } from "../../lib/db/runs";
import { useResponseTracker } from "../../lib/hooks/useResponseTracker";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import supabase from '.././'

export default function S3Dark2() {
    const { handleChoice } = useResponseTracker(8);

    const ensureAnonSession = async () => {
        const {data: {session}, error:sessionErr} = await supabase.auth.getSession();
        if(sessionErr){
            console.error(sessionErr)
            return false
        }
        if(session) return true

        const { data, error } = await supabase.auth.signInAnonymously();
        if (error) {
            console.error(error);
            return false;
        }
        return true

    }

    const finishCurrentRun = async () => {
        const successfulUserSession = await ensureAnonSession()
        if (!successfulUserSession) return;

        const run = await updateRun(Number(localStorage.getItem("run_id")) , 'finished')
        if (!run) return;
    }

    const onCancel = async () => {
        await handleChoice("cancel_delete_account", "/end")
        await finishCurrentRun();
    }

    const onContinue = async () => {
        await handleChoice("confirm_delete_account", "/end");
        await updateCurrentRun();
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
                        <div className="question">Are you sure you want to cancel your Account?</div>
                    </div>

                    <p></p>

                    <div className="s3buttonPopUp">
                        <button className="s3accept" onClick={() => {onCancel() }}>
                            Cancel
                        </button>
                    </div>

                    <div className="s3buttonPopUp">
                        <button className="s3accept" onClick={() => {onContinue() }}>
                            Continue
                        </button>
                    </div>

                </div>
            </div>


        </div>

    </div>
}