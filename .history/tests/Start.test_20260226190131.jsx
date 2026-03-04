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

describe("Start.startWithDesign", () => {

    it("creates run if none exists and then navigates", async () => {
        ensureAnonSessionMock.mockResolvedValueOnce( {user: {id: 1}})
        getActiveRunForUserMock.mockResolvedValueOnce( null)
        createRunMock.mockResolvedValueOnce({run_id: 2})

        render(<Start />)

        await userEvent.click(screen.getByRole("button", { name: /nudge/i}))

        expect(getActiveRunForUserMock).toHaveBeenCalledWith({userID: "1", curren})
        
    })
})

//export async function getActiveRunForUser ({userID, currentDesignStrategy}) {