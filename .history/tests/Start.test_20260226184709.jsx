import { describe, it, expect, vi, beforeEach } from "vitest";

const navigateMock = vi.fn()

vi-mock("react-router-dom", async() => {
    const actual = await vi.importActual("react-router-dom")
    return {
        ...actual,
        useNavigate: () => navigateMock,
    }
})

const ensureAnonSessionMock = vi.fn()
vi.mock("../src/lib/auth/ensureAnonSession", () => ({
    ensureAnonSession: (...args) => ensureAnonSessionMock(...args),
}))

const getActiveRunForUserMock = vi.fn()
vi.mock("../src/lib/db/runs", () => ({
    getActiveRunForUser: (...args) => getActiveRunForUserMock(...args)
}))

const createRunMock = vi.fn()

const setGroupMock = vi.fn()
vi.mock("../src/lib/assignment/group", () => ({
    setGroup: (...args) => setGroupMock(...args)
}))

import Start from "../src/pages/Start";

beforeEach(() => {
    vi.clearAllMocks()
    localStorage.clear()
})

describe("Start")