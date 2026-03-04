import { describe, it, expect, vi, beforeEach } from "vitest";

const builder = vi.hoisted( () => {
    const build = {
        insert: vi.fn(),
        update: vi.fn(),
        select: vi.fn(),
        single: vi.fn(),
        maybeSingle: vi.fn(),
        eq: vi.fn(),
        is: vi.fn(),
        order: vi.fn(),
        limit: vi.fn()
    };
    build.insert.mockReturnValue(build)
    build.update.mockReturnValue(build)
    build.select.mockReturnValue(build)
    build.single.mockReturnValue(build)
    build.maybeSingle.mockReturnValue(build)
    build.eq.mockReturnValue(build)
    build.is.mockReturnValue(build)
    build.order.mockReturnValue(build)
    build.limit.mockReturnValue(build)

    return build
})

const authGetUserMock = vi.hoisted( () => vi.fn())
const fromMock = vi.hoisted( () => vi.fn( ()=> builder))

vi.mock("../src/lib/db/supabase-client", () => ({
    default: {
        auth: 
        from: fromMock
    }
}))


