import { describe, it, expect, vi, beforeEach } from "vitest";

const getSessionMock = vi.hoisted(() => vi.fn())
const signInAnonymouslyMock = vi.hoisted(() => vi.fn())

vi.mock("../src/lib/db/supabase-client", () => ({
    default: {
        auth: { getSession: getSessionMock, signInAnonymously: signInAnonymouslyMock },
    }
}))

import { ensureAnonSession } from "../src/lib/auth/ensureAnonSession";

beforeEach(() => vi.clearAllMocks())

describe("ensureAnonSession", () => {

    it("returns null if getSession throws error", async () => {
        getSessionMock.mockResolvedValueOnce({
            data: {session:null},
            error: {message: "fail"}
        })

        const result = await ensureAnonSession()
        expect(result).toBeNull()
    })

    it("returns existing session if present", async () => {
        const existingSession = {user: {id: 1}}

        getSessionMock.mockResolvedValueOnce({
            data: {session:existingSession},
            error: null
        })

        const result = await ensureAnonSession()
        expect(result).toEqual(existingSession)
        expect(signInAnonymouslyMock).not.toHaveBeenCalled()
    })

    it("returns null if signInAnonymously throws error", async () => {
        getSessionMock.mockResolvedValueOnce({
            data: {session:null},
            error: {message: null}
        })

        signInAnonymouslyMock.mockResolvedValueOnce({
            data: {session:null},
            error: {message:"fail"},
        })

        const result = await ensureAnonSession()
        expect(result).toBeNull()
    })

    it
})