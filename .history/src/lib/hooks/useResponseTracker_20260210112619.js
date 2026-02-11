import { useNavigate } from "react-router-dom";
import { createResponse } from "../../lib/db/responses";
import { useRef } from "react"

export function useResponseTracker(screenID) {
    const startTimeRef = useRef(performance.now())
    const navigate = useNavigate();

    const handleChoice = async (choice, navigateTo) => {

    }

    return {handleChoice}
}