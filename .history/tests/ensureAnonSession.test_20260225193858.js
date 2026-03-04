import { describe, it, expect, vi, beforeEach } from "vitest";

const getSessionMock = vi.hoisted(() => vi.fn())
const signInAnonymouslyMock = vi.hoisted(() => vi.fn())

vi.mock("../src/lib/db/supabase-client", () => ({
    default: {
        auth: { getUser: authGetUserMock, signInAnonymously: signInAnonymouslyMock },
    }
}))

import { ensureAnonSession } from "../src/lib/auth/ensureAnonSession";

