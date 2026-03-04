import { describe, it, expect, vi, beforeEach } from 'vitest'
import { calcRtMs, sendResponsePayload, useResponseTracker } from '../src/lib/hooks/useResponseTracker'
import { createResponse } from '../src/lib/db/responses'
import { useNavigate } from 'react-router-dom';
import { getValidRunId } from '../src/lib/guards/localRunId';
import { renderHook } from '@testing-library/react';

vi.mock('../src/lib/db/responses', () => ({
    createResponse: vi.fn(),
}))

vi.mock('../src/lib/guards/localRunId', () => ({
    getValidRunId: vi.fn()
}))

const navigateMock = vi.fn();
vi.mock('react-router-dom', () => ({
    useNavigate: () => navigateMock,
}))

beforeEach(() => {
    vi.clearAllMocks()

    getValidRunId.mockReturnValue("1")
    createResponse.mockResolvedValue({ approved: true, duplicate: false })

    vi.spyOn(performance, "now").mockReturnValue(1000)
})

describe("useResponseTracker.calcRtMs", () => {
    it("rounds milliseconds difference", () => {
        expect(calcRtMs(1000, 1450.4)).toBe(450)
        expect(calcRtMs(1000, 1450.5)).toBe(451)
    })
})

describe("useResponseTracker.sendResponsePayload", () => {

    it("returns true when createRespone approved", async () => {
        createResponse.mockResolvedValue({ approved: true })
        const resultValue = await sendResponsePayload("1", 1, "accept_all", 123)

        expect(resultValue).toBe(true)
        expect(createResponse).toHaveBeenCalledTimes(1)
    })

    it("returns false when createRespone not approved", async () => {
        createResponse.mockResolvedValue({ approved: false })
        const resultValue = await sendResponsePayload("1", 1, "accept_all", 123)

        expect(resultValue).toBe(false)
        expect(createResponse).toHaveBeenCalledTimes(1)
    })
})

describe("useResponseTracker.useResponseTracker", () => {
    it("calls createResponse and navigates on first click", async () => {
        performance.now.mockReturnValue(1000).mockReturnValueOnce(1500)
        const { result } = renderHook(() => useResponseTracker(1))

        await act(async () => {
            await result.current.handleChoice("accept_all", { to: "/test", replace: true })
        })

        expect(createResponse).toHaveBeenCalledTimes(1)
        expect(createResponse).toHaveBeenCalledWith({
            runID: "1", screenID: 1, selectedChoice: "accept_all", rtms: 500,
        })
        expect(navigateMock).toHaveBeenCalledTimes(1)
        expect(navigateMock).toHaveBeenCalledWith("/test", { replace: true })
    })

    it("does nothing if no runID", async () => {
        getValidRunId.mockReturnValueOnce(null)
        const { result } = renderHook(() => useResponseTracker(1))

        await act(async () => {
            await result.current.handleChoice("accept_all", { to: "/test", replace: true })
        })

        expect(createResponse).toHaveBeenCalledTimes(0)
        expect(navigateMock).toHaveBeenCalledTimes(0)
    })

    it("blocks double submits", async () => {
        let resolveInsert
        createResponse.mockImplementation(
            () => new Promise((res)=> {
                resolveInsert = () => res({approved:true})
            })
        )
        performance.now
        .mockReturnValueOnce(1000)
        .mockReturnValueOnce(1500)
        .mockReturnValueOnce(1600)
        const { result } = renderHook(() => useResponseTracker(1))

        act(() => {
            result.current.handleChoice("accept_all", { to: "/test", replace: true })
        })

        await act(async () => {
            await result.current.handleChoice("accept_all", { to: "/test", replace: true })
        })

        expect(createResponse).toHaveBeenCalledTimes(1)
        expect(navigateMock).toHaveBeenCalledTimes(0)
    })
})


