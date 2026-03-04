import { describe, it, expect, vi, beforeEach } from "vitest";
import { createRun, updateRun, getRunById, getActiveRunForUser } from "../src/lib/db/run"; 

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
        auth: { getUser: authGetUserMock},
        from: fromMock
    }
}))

beforeEach( ()=> {
    vi.clearAllMocks()

    builder.insert.mockReturnValue(builder)
    builder.update.mockReturnValue(builder)
    builder.select.mockReturnValue(builder)
    builder.eq.mockReturnValue(builder)
    builder.is.mockReturnValue(builder)
    builder.order.mockReturnValue(builder)
    builder.limit.mockReturnValue(builder)
})

describe("runs.createRun", () => {
    
    it("return null if no user session", async () => {
        authGetUserMock.mockResolvedValueOnce({data: {user:null}, error: null})
        
        const response = await createRun({ runStatus: "started", designStrategy_ID: 1})

        expext (response)
    })
})

