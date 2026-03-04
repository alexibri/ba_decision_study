import { describe } from "vitest";


describe('useSingleSubmit', () => {
    it('runs fn and returns true', async () => {
        const {result}  renderHook( () => )
    })
}

describe('useResponseTracker.calcRtMs', () => {
    it('rounds milliseconds difference', () => {
        expect(calcRtMs(1000, 1450.4)).toBe(450)
        expect(calcRtMs(1000, 1450.5)).toBe(451)
    })
})