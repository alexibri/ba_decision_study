import { describe, it, expect, vi, beforeEach } from "vitest";
import { updateRun } from "../src/lib/db/runs";

const updateRunMock = vi.fn()
const getValidRunIdMock = vi.fn()

vi.mock("../db/runs", () => ({
    updateRun: (...args) => updateRunMock(...args),
}))

vi.mock("../guards/localRunID", () => ({
    getValid
}))