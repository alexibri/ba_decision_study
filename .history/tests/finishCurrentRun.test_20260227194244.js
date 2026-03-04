import { describe, it, expect, vi, beforeEach } from "vitest";
import { updateRun } from "../src/lib/db/runs";
import { getValidRunId } from "../src/lib/guards/localRunId";

const updateRunMock = vi.fn()
const getValidRunIdMock = vi.fn()

vi.mock("../db/runs", () => ({
    updateRun: (...args) => updateRunMock(...args),
}))

vi.mock("../guards/localRunID", () => ({
    getValidRunId: () => getValidRunIdMock(),
}))

import { finishCurrentRun } from "../src/lib/usecases/finishCurrentRun";

beforeEach(() => {
    vi.clearAllMocks()
})

describe("finishCurrentRun", () => {

    it("returns null if no valid run id exists")
})