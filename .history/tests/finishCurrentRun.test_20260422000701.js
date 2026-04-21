import { describe, it, expect, vi, beforeEach } from "vitest"

const updateRunMock = vi.fn()
const getValidRunIdMock = vi.fn()

vi.mock("../src/lib/db/runs", () => ({
    updateRun: (...args) => updateRunMock(...args),
}))

vi.mock("../src/lib/guards/localRunId", () => ({
    getValidRunId: () => getValidRunIdMock(),
}))

import { finishCurrentRun } from "../src/lib/usecases/finishCurrentRun";

beforeEach(() => {
    vi.clearAllMocks()
})

describe("finishCurrentRun", () => {

    it("returns null if no valid run_id exists", async () => {
        getValidRunIdMock.mockReturnValueOnce(null)

        const result = await finishCurrentRun()

        expect(updateRunMock).not.toHaveBeenCalled()
        expect(result).toBeNull()
    })

    it("calls updateRun with correct arguments if run_id exists", async () => {
        getValidRunIdMock.mockReturnValueOnce(2)
        updateRunMock.mockResolvedValueOnce({ success: true })

        const result = await finishCurrentRun()

        expect(updateRunMock).toHaveBeenCalledWith({
            runID: 2,
            runStatus: "finished"
        })

        expect(result).toEqual({ success: true })
    })
})