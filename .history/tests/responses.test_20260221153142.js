import { describe, it, expect, vi, beforeEach } from "vitest";


const insertMock = vi.fn()
const fromMock = vi.fn(() => ({insert: insertMock}))

vi.mock("../src/lib/db/supabase-client", () => ({
    default: {from: fromMock}
}))

beforeEach(()=> {
    
})
