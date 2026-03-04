import { describe, it, expect, vi } from 'vitest'
import { calcRtMs, sendResponsePayload, useResponseTracker } from '../src/lib/hooks/useResponseTracker'
import { createResponse } from '../src/lib/db/responses'
import { useNavigate } from 'react-router-dom';
import { getValidRunId } from '../src/lib/guards/localRunId';



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
})

.beforeEach( () => {
    vi.clearAllMocks()

    getValidRunId.mockReturnValue('2')
    createResponse.mockResolvedValue({approved: true, duplicate: false})

    vi.spyOn(performance, 'now').mockReturnValue(1000)
})

describe('useResponseTracker.calcRtMs', () => {
    it('rounds milliseconds difference', () => {
        expect(calcRtMs(1000, 1450.4)).toBe(450)
        expect(calcRtMs(1000, 1450.5)).toBe(451)
    })
})

describe('useResponseTracker.sendResponsePayload', () => {

    it('returns true when ', () => {
        const result = useResponseTracker()
        expect().toBe()
    })
})

describe('useResponseTracker.useResponseTracker')
