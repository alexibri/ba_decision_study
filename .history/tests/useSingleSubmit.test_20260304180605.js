import { it, describe, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useSingleSubmit } from "../src/lib/hooks/useSingleSubmit";

describe("useSingleSubmit", () => {
    it("returns true when called", async () => {
        const { result } = renderHook(() => useSingleSubmit())
        const fn = vi.fn(async () => { })
        let resultValue
        await act(async () => {
            resultValue = await result.current(fn)
        })
        expect(resultValue).toBe(true)
    })
    it("runs function", async () => {
        const { result } = renderHook(() => useSingleSubmit())
        const fn = vi.fn(async () => { })
        await act(async () => {
            await result.current(fn)
        })
        expect(fn).toHaveBeenCalledTimes(1)
    })

    it("stays locked after successful submit", async() => {
        const {result} = renderHook(() => useSingleSubmit())
        const fn = vi.fn(async () => { })

        await act(async ()=> { await result.current(fn)})

        let secondResult
        await act(async () => { secondResult = await result.current(fn)})

        
    })
    
    it("blocks a second call while first is pending", async () => {
        const { result } = renderHook(() => useSingleSubmit())

        let resolveFirst
        const firstPromise = new Promise((resolve) => {
            resolveFirst = resolve
        })
        const fn = vi.fn(() => firstPromise)
        const firstCall = result.current(fn)
        let resultValue
        await act(async () => {
            resultValue = await result.current(fn)
        })

        expect(resultValue).toBe(false)
        expect(fn).toHaveBeenCalledTimes(1)

        resolveFirst()
        await firstCall
    })
});
