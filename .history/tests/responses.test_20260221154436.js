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
    it("inserts mapped payload and returns true on success", async() => {
        insertMock.mockResolvedValueOnce({error: null})
        const res = await createResponse({
            runID: 1,
            screenID: 1,
            selectedChoice: "accept_all",
            rtms: 100,
        })
        const payload = insertMock.mock.calls[0][0]
        
        expect(fromMock).toHaveBeenCalledWith("response")
        expect(insertMock).toHaveBeenCalledTimes(1)
        expect(payload).toMatchObject({
            run_id: 1,
            screen_id: 1,
            response_selecte_choice: "accept_all",
            response_rtms: 100
        })
        expect (res).toEqual({approved: true, duplicate: false})
    })

    it("returns approved:true and duplicate:true when error.code is 23505", async ()=>{
        insertMock.mockResolvedValueOnce({error: {code: "23505"}})

        const res = await createResponse({
            runID: 1,
            screenID: 1,
            selectedChoice: "accept_all",
            rtms: 100
        })
        expect(res).toEqual()
    })
})