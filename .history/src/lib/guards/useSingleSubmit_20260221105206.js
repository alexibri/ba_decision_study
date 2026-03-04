import {useRef} from "react"

export function useSingleSubmit(fn) {
    const inFlightRef = useRef(false)

    const runOnce = async (fn) => {
        if(inFlightRef.current) return false

        inFlightRef.current = true
        try {
            await fn()
            return true
        } finally {
            inFlightRef.current = false
        }
    }
    return runOnce;
}