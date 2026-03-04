import {useRef} from "react"

export function useSingleSubmit() {
    const inFlightRef = useRef(false)

    const runOnce = async (fn) => {
        if(inFlightRef.current) return false

        inFlightRef.current = true
        
    }
}