import { describe, it, expect, vi } from 'vitest'
import { calcRtMs, useResponseTracker } from '../src/lib/hooks/useResponseTracker'

//Was Testen? - Verhaltens-/ Contract- Tests
//RTMS

//Mocking
vi.mock('../src/')

describe('useResponseTracker.calcRtMs', () => {
    it('rounds milliseconds difference', () => {
        expect(calcRtMs(1000, 1450.4)).toBe(450)
        exp
    })
})

describe('useResponseTracker.handleChoice', () => {

    it('returns ', () => {
        const result = useResponseTracker()

        expect().toBe()
    })

})