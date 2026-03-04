import { describe, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useSingleSubmit } from "../src/lib/hooks/useSingleSubmit";


describe('useSingleSubmit', () => {
    it('returns true when called', async () => {
        const { result } = renderHook(() => useSingleSubmit())
        let resultValue
        await act(async () => {
            resultValue = await result.current(fn)
        })
        expect(resultValue).toBe(true)
    })
    it('runs fn', async () => {
        const { result } = renderHook(() => useSingleSubmit())
        const fn = vi.fn(async () => { })
        expect(fn).toHaveBeenCalledTimes(1)
    })
    it('blocks a second call while first is pending', async() => {
        const { result } = renderHook(() => useSingleSubmit())

    })

});