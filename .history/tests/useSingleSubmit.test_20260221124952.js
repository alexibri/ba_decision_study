import { describe } from "vitest";
import { useSingleSubmit } from "../src/lib/hooks/useSingleSubmit";


describe('useSingleSubmit', () => {
    it('runs fn and returns true', async () => {
        const {result}  renderHook( () => useSingleSubmit())
        const fn = vi.fn( async () {})

        let ok
        await act(async () => {
            ok = await result.current(fn)
        })

        expect(fn).toHaveBeenCalledTimes(1
    })

}

describe('useResponseTracker.calcRtMs', () => {
    it('rounds milliseconds difference', () => {
        expect(calcRtMs(1000, 1450.4)).toBe(450)
        expect(calcRtMs(1000, 1450.5)).toBe(451)
    })
})