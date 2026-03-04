import { describe, it, expect, vi, beforeEach } from "vitest";
import { createResponse } from "../src/lib/db/responses";


const insertMock = vi.fn()
const fromMock = vi.fn(() => ({insert: insertMock}))

vi.mock("../src/lib/db/supabase-client", () => ({
    default: {from: fromMock}
}))

beforeEach(()=> {
    vi.clearAllMocks()
})

describe("responses.createResponse", () => {
    it("inserts mapped payload and returns true on success", async()
        insertMock.mockResolvedValueOnce({error: null})
        const res = await createResponse({
            runID: "1",
            screenID: 1,
            selectedChoice: "accept_all",
            rtms: 100,
        })
        
        expect
    )
})