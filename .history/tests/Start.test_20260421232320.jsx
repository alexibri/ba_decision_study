import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const navigateMock = vi.fn()
vi.mock("react-router-dom", async () => {
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

const createRunMock = vi.fn()
vi.mock("../src/lib/db/runs", () => ({
    createRun: (...args) => createRunMock(...args),
}))

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
        ensureAnonSessionMock.mockResolvedValueOnce({ user: { id: 1 } })
        createRunMock.mockResolvedValueOnce({ run_id: 2 })

        render(<Start />)

        await userEvent.click(screen.getByRole("button", { name: /start/i }))

        await vi.waitFor(() => {
            expect(createRunMock).toHaveBeenCalledTimes(1)
        })

        expect(localStorage.getItem("run_id")).toBe("2")
        expect(navigateMock).toHaveBeenCalledWith("/scenario/1/step/1", { replace: true })
    })
})
