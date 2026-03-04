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
    
    it("return null if no user session exists", async () => {
        authGetUserMock.mockResolvedValueOnce({data: {user:null}, error: null})

        const response = await createRun({ runStatus: "started", designStrategy: 1})

        expect(response).toBeNull()
        expect(fromMock).not.toHaveBeenCalled()
    })

    it("inserts payload and returns run_id", async() => {
        authGetUserMock.mockResolvedValueOnce({data: {user: {id: "user_test"}}, error: null})
        builder.single.mockResolvedValueOnce({ data: {run_id: 1}, error: null})
        const response = await createRun( { runStatus: "started", designStrategy: 1})

        expect(fromMock).toHaveBeenCanceledWith("run")
        expect(builder.insert).toHaveBeenCalledTimes(1)
        expect(builder.insert.mock.calls[0][0]).toEqual({
            user_id: "user_test",
            run_status: "started",
            design_strategy_id: 1
        })
        
        expect(builder.select).toHaveBeenCalledWith("run_id")
        expect(builder.single).toHaveBeenCalled()

        expect(response).toEqual({run_id: 1})

    })

    it("returns null on insert error", async() => {
        authGetUserMock.mockResolvedValueOnce({
            data: {user: {id: "user_test"}},
            error: null,
        })
        builder.single.mockRejectedValueOnce({data: {run_id: 1}, error: "fail"})
        const response = await createRun({ runStatus: "started", designStrategy: 1})

        expect(response).toBeNull()
    })
})

describe("runs.updateRun", () => {
    
    it("updates run_status + run_end_at and returns run_id", async () => {
        authGetUserMock.mockResolvedValueOnce({data: {user: {id: "user_test"}}, error: null})
        builder.single.mockResolvedValueOnce({data: {run_id: 1}, error: null})

        const response = await updateRun( {runId:1,runStatus:"finished"})

        expect(builder.update).toHaveBeenCalledTimes(1)
        expect(builder.update.mock.calls[0][0]).toEqual({
            user_id: "user_test",
            run_status: "finished",
        })
        expect(response).toEqual({run_id:1})

    })
})