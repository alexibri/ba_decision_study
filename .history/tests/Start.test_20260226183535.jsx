import { describe, it, expect, vi, beforeEach } from "vitest";

const authGetUserMock = vi.hoisted(() => vi.fn())
const fromMock = vi.hoisted(() => vi.fn(() => builder))

const navigateMock = vi

vi.mock("../src/lib/db/supabase-client", () => ({
    default: {
        auth: { getUser: authGetUserMock },
        from: fromMock
    }
}))

