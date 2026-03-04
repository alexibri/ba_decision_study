import { describe, it, expect, vi } from 'vitest'
import { calcRtMs, useResponseTracker } from '../src/lib/hooks/useResponseTracker'
import { createResponse } from '../src/lib/db/responses'

vi.mock('../src/lib/db/responses', () => ({
    createResponse: vi.fn(),
}))

const navigateMock = vi.

describe('useResponseTracker.calcRtMs', () => {
    it('rounds milliseconds difference', () => {
        expect(calcRtMs(1000, 1450.4)).toBe(450)
        expect(calcRtMs(1000, 1450.5)).toBe(451)
    })
})

describe('useResponseTracker.handleChoice', () => {

    it('returns ', () => {
        const result = useResponseTracker()

        expect().toBe()
    })

})