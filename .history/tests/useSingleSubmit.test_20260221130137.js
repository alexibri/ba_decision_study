import { describe, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useSingleSubmit } from "../src/lib/hooks/useSingleSubmit";


describe('useSingleSubmit', () => {
    it('returns true and false', async () => {
        const {result} = renderHook( () => useSingleSubmit())
        const fn = vi.fn( async () => {})

        let ok
        await act(async () => {
            ok = await result.current(fn)
        })

        expect(fn).toHaveBeenCalledTimes(1)
        expect.toBe(true)
    })

    it('runs fn and returns true', async () => {
        const {result} = renderHook( () => useSingleSubmit())
        const fn = vi.fn( async () => {})

        let ok
        await act(async () => {
            ok = await result.current(fn)
        })

        expect(fn).toHaveBeenCalledTimes(1)
        expect.toBe(true)
    })


});