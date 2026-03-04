import { describe, it, expect, vi, beforeEach } from "vitest";
import { ensureAnonSession } from "../src/lib/auth/ensureAnonSession";
import { getActiveRunForUser } from "../src/lib/db/runs";

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

const getActiveRunForUser = vi.fn()
vi.mock("../src/lib/db/runs", ())