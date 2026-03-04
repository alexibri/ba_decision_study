import { describe, it, expect, vi, beforeEach } from "vitest";
import { ensureAnonSession } from "../src/lib/auth/ensureAnonSession";
import { getActiveRunForUser } from "../src/lib/db/runs";
import { setGroup } from "../src/lib/assignment/group";

const authGetUserMock = vi.hoisted(() => vi.fn())
const fromMock = vi.hoisted(() => vi.fn(() => builder))

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
    ensureAnonSession: (...args) => ensureAnonSession(...args),
}))

const getActiveRunForUserMock = vi.fn()
vi.mock("../src/lib/db/runs", () => ({
    getActiveRunForUser: (...args) => getActiveRunForUser(...args)
}))

const createRunMock = vi.fn()

const setGroupMock = vi.fn()
vi.mock("../src/lib/assignment/group", () => ({
    setGroup
}))
