import { describe, it, expect, vi } from 'vitest'
import { calcRtMs, useResponseTracker } from '../src/lib/hooks/useResponseTracker'
import { createResponse } from '../src/lib/db/responses'
import { useNavigate } from 'react-router-dom';

vi.mock('../src/lib/db/responses', () => ({
    createResponse: vi.fn(),
}))

const navigateMock = vi.fn();
vi.mock('react-router-dom', () => ({
    useNavigate: () => navigateMock,
}))

const 

describe('useResponseTracker.calcRtMs', () => {
    it('rounds milliseconds difference', () => {
        expect(calcRtMs(1000, 1450.4)).toBe(450)
        expect(calcRtMs(1000, 1450.5)).toBe(451)
    })
})

describe('useResponseTracker.sendResponsePayload', () => {

    it('returns ', () => {
        const result = useResponseTracker()
        expect().toBe()
    })
})

describe('useResponseTracker.useResponseTracker')


describe('useSingleSubmit', () => {
    it('returns true when called', async () => {
        const { result } = renderHook(() => useSingleSubmit())
        const fn = vi.fn(async () => { })
        let resultValue
        await act(async () => {
            resultValue = await result.current(fn)
        })
        expect(resultValue).toBe(true)
    })